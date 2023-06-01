import { useRef, useEffect, Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { HeadacheDiagnose } from "src/api/diagnose";
import { IAnswer, IHeadacheResult, IQuestion } from "src/interfaces/diagnosisPage";
import { IHeadacheQuestion, IPainArea, IResultCard } from "src/interfaces/headacheDiagnoseApi";
import { useAppDispatch, useAppSelector } from "src/state";
import { popAnswer } from "src/state/answerSlice";
import { insertType, isHeadache, PAIN_AREA_MAP, typeMapping } from "src/utils/diagnosis";

interface IUseHeadache {
  state: string;
  curQuestion: IQuestion;
  setCurQuestion: Dispatch<IQuestion>;
  selectedAnswer: IAnswer[];
  setSelectedAnswer: Dispatch<IAnswer[]>;
  setLoading: Dispatch<boolean>;
}

function useHeadache({ state, curQuestion, setCurQuestion, selectedAnswer, setSelectedAnswer, setLoading }: IUseHeadache) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const prevQuestionList = useRef<IHeadacheQuestion[][]>([]); // 지나온 질문 묶음
  const curQuestionList = useRef<IHeadacheQuestion[]>([]); // 질문 묶음
  const curQuestionIndex = useRef<number>(0); // 질문 묶음에서 현재 질문 index
  const isPassPrimaryQuestion = useRef<boolean>(false); // 1차성 두통 질문을 거쳤는가
  const isFirstPrimaryQuestion = useRef<boolean>(false); // red flag sign에서 바로 일차성 두통 질문으로 갔는가
  // [질문 영역] site 선택과 관련
  const curSiteIndex = useRef<number>(0); // 다중 site 선택
  const results = useRef<IHeadacheResult[]>([]); // 진단 결과 id들
  const isChronic = useRef<number>(0); // 만성 여부
  const unknownEmergency = useRef<number>(0); // 예외 케이스

  const { gender, birth_year, interests, site } = useAppSelector((store) => store.user);
  const { answers } = useAppSelector((store) => store.answer);

  useEffect(() => {
    async function getFirstQuestion() {
      const { questions } = await HeadacheDiagnose.getBasicQuestion();

      const typedQuestion = insertType(questions, "basic");
      prevQuestionList.current.push(typedQuestion);
      curQuestionList.current = typedQuestion;
      curQuestionIndex.current = 0;
      setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
    }

    if (isHeadache(state)) {
      getFirstQuestion();
    }
  }, []);

  const setQuestion = (questions: IHeadacheQuestion[]) => {
    prevQuestionList.current.push(questions);
    curQuestionList.current = questions;
    curQuestionIndex.current = 0;
    setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
    setSelectedAnswer([]);
  };

  const getFirstQuestion = async () => {
    while (
      curSiteIndex.current < site.length &&
      (PAIN_AREA_MAP[site[curSiteIndex.current]] === "머리 전체" || PAIN_AREA_MAP[site[curSiteIndex.current]] === "이마의 띠")
    ) {
      curSiteIndex.current += 1;
    }

    if (curSiteIndex.current === site.length) {
      const { questions: additionalQuestion } = await HeadacheDiagnose.getAdditionalQuestion();
      const typedQuestion = insertType(additionalQuestion, "additional");

      setQuestion(typedQuestion);
    } else {
      const { questions: siteQuestions } = await HeadacheDiagnose.postFirstHeadacheQuestion({
        pain_area: PAIN_AREA_MAP[site[curSiteIndex.current]] as IPainArea,
      });
      curSiteIndex.current++;
      const typedQuestion = insertType(siteQuestions, "site_first");

      setQuestion(typedQuestion);
    }
  };

  const handleHeadacheLogic = async () => {
    if (++curQuestionIndex.current < curQuestionList.current.length) {
      setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
      setSelectedAnswer([]);
    } else if (curQuestion.type === "basic") {
      const { questions } = await HeadacheDiagnose.getRedFlagSign();
      const typedQuestion = insertType(questions, "red_flag");
      setQuestion(typedQuestion);
      setSelectedAnswer([]);
    } else if (curQuestion.type === "red_flag") {
      if (prevQuestionList.current.length !== 2) return;
      const { type, questions, result, is_chronic } = await HeadacheDiagnose.postRedFlagSign({
        questions: [...answers, { question_id: curQuestion.id, answer_id: selectedAnswer.map((ans) => ans.answer_id) }],
        pain_area: site.map((s) => PAIN_AREA_MAP[s]),
      }); // 중복 답안 허용

      if (is_chronic) isChronic.current = is_chronic;
      if (type === 1 && result) {
        // red flag sign 질문에서 결과 발생 -> 로직 종료
        setLoading(true);
        results.current.push(result);

        const resultList = await HeadacheDiagnose.postResult({
          results: results.current,
          tracks: [...answers, { question_id: curQuestion.id, answer_id: selectedAnswer.map((ans) => ans.answer_id) }],
          gender,
          birth_year,
          interests,
        });

        let finalResult = {} as IResultCard;
        if (resultList.results.likely) {
          finalResult = resultList.results.likely[0];
        } else if (resultList.results.suspicious) {
          finalResult = resultList.results.suspicious[0];
        } else if (resultList.results.predicted) {
          finalResult = resultList.results.predicted[0];
        }

        const diagnosisResult = await HeadacheDiagnose.postResultDetail(finalResult.id);

        const timer = setTimeout(() => {
          navigate("/result", {
            state: {
              type: "result",
              diagnostic_result: diagnosisResult.diagnostic_result,
            },
          });
          clearTimeout(timer);
        }, 3000);
      } else if (type === 2) {
        // 일차성 두통 질문
        const typedQuestion = insertType(questions, "primary_question");
        setQuestion(typedQuestion);
        isPassPrimaryQuestion.current = true;
        isFirstPrimaryQuestion.current = true;
      } else if (type === 3) {
        // 기타 부위 질문
        await getFirstQuestion();
      }
    } else if (curQuestion.type === "primary_question") {
      // 일차성 두통 마지막 질문
      const primaryQuestions = {
        is_chronic: isChronic.current,
        questions: [
          ...answers.slice(8).map((ans) => {
            return { question_id: ans.question_id, answer_id: ans.answer_id[0] };
          }),
        ],
      };

      const { questions } = await HeadacheDiagnose.postPrimaryHeadache(primaryQuestions);
      const typedQuestion = insertType(questions, "primary_answer");
      setQuestion(typedQuestion);
    } else if (curQuestion.type === "primary_answer") {
      // 일차성 두통 응답
      const primaryAnswer = {
        question_id: curQuestion.id,
        answer_id: selectedAnswer[0].answer_id,
        unknown_emergency: unknownEmergency.current,
      };

      const { type, questions, result } = await HeadacheDiagnose.postNextPrimaryHeadache(primaryAnswer);
      if (type === 2 && result) {
        results.current.push(result);

        if (isFirstPrimaryQuestion.current) {
          // red flag sign -> 일차성 두통 질문으로 바로 이어진 경우 악화 요인 질문 후 로직 종료
          const { questions: additionalQuestion } = await HeadacheDiagnose.getAdditionalQuestion();
          const typedQuestion = insertType(additionalQuestion, "additional");
          setQuestion(typedQuestion);
        } else {
          await getFirstQuestion();
        }
      } else {
        const typedQuestion = insertType(questions, "primary_answer");
        setQuestion(typedQuestion);
      }
    } else if (curQuestion.type === "site_first" || curQuestion.type === "site") {
      const answer = {
        question_id: curQuestion.id,
        answer_id: selectedAnswer[0].answer_id,
      };

      const { type, questions, result, unknownEmergency: emergencyResponse } = await HeadacheDiagnose.postHeadacheQuestion(answer);

      if (emergencyResponse) unknownEmergency.current = emergencyResponse;

      if (type === 1 || type === 3) {
        // 다음 질문 or 통증 수치 질문 (눈, 눈주위)
        const typedQuestion = insertType(questions, "site");
        setQuestion(typedQuestion);
      } else if (type === 2) {
        if (!result) return;

        results.current.push(result);

        await getFirstQuestion();
      } else if (type === 4) {
        // 일차성 두통 공통 질문 요청
        if (isPassPrimaryQuestion.current) {
          // 이미 일차성 두통을 거친경우 다음 부위로
          await getFirstQuestion();
        } else {
          const { questions: primaryQuestions } = await HeadacheDiagnose.getPrimaryHeadache();
          const typedQuestion = insertType(primaryQuestions, "primary_question");
          setQuestion(typedQuestion);
          isPassPrimaryQuestion.current = true;
        }
      } else if (type === 5) {
        // 긴장,군발 두통 로직 시작 질문 요청
        if (isPassPrimaryQuestion.current) {
          // 이미 일차성 두통을 거친경우 다음 부위로
          await getFirstQuestion();
        } else {
          const { questions: primaryQuestions } = await HeadacheDiagnose.getTensionHeadache();
          const typedQuestion = insertType(primaryQuestions, "primary_answer");
          setQuestion(typedQuestion);
          isPassPrimaryQuestion.current = true;
        }
      }
    } else if (curQuestion.type === "additional") {
      setLoading(true);

      const answer = {
        question_id: curQuestion.id,
        answer_id: selectedAnswer.map((ans) => ans.answer_id),
      }; // 중복 답안 허용
      const { result } = await HeadacheDiagnose.postAdditionalQuestion(answer);

      if (result) results.current.push(result);

      const resultList = await HeadacheDiagnose.postResult({
        results: results.current,
        tracks: [...answers, { question_id: curQuestion.id, answer_id: selectedAnswer.map((ans) => ans.answer_id) }],
        gender,
        birth_year,
        interests,
      });

      let finalResult = {} as IResultCard;
      if (resultList.results.likely) {
        finalResult = resultList.results.likely[0];
      } else if (resultList.results.suspicious) {
        finalResult = resultList.results.suspicious[0];
      } else if (resultList.results.predicted) {
        finalResult = resultList.results.predicted[0];
      }

      const diagnosisResult = await HeadacheDiagnose.postResultDetail(finalResult.id);

      const timer = setTimeout(() => {
        navigate("/result", {
          state: {
            type: "result",
            diagnostic_result: diagnosisResult.diagnostic_result,
          },
        });
        clearTimeout(timer);
      }, 3000);
    }
  };

  const handleHeadacheBackLogic = () => {
    if (answers.length === 0) {
      navigate(-1);
    } else if (answers.length === 1) {
      dispatch(popAnswer());

      curQuestionIndex.current = 0;
      setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
      setSelectedAnswer([]);
    } else if (answers.length >= 2) {
      dispatch(popAnswer());

      if (curQuestionIndex.current !== 0) {
        curQuestionIndex.current--;
      } else {
        const prevQuestion = prevQuestionList.current.pop();
        if (!prevQuestion) {
          navigate(-1);
          return;
        }
        if (prevQuestion[0].type === "primary") {
          isPassPrimaryQuestion.current = false;
          isFirstPrimaryQuestion.current = false;
        }
        if (prevQuestion[0].type === "site_first") {
          curSiteIndex.current--;
        }

        const nextQuestionList = prevQuestionList.current[prevQuestionList.current.length - 1];
        curQuestionList.current = nextQuestionList;
        curQuestionIndex.current = nextQuestionList.length - 1;
      }
      setCurQuestion(typeMapping(curQuestionList.current[curQuestionIndex.current]));
      setSelectedAnswer([]);
    }
  };

  return { handleHeadacheLogic, handleHeadacheBackLogic };
}

export default useHeadache;
