import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NoteWithMagnifier from "src/assets/images/NoteWithMagnifier";
import ContentHeader from "src/components/contentHeader";
import Loading from "src/components/loading";
import useDiagnosis from "src/hooks/diagnose/useDiagnosis";
import AnswerButtons from "./answerButtons";
import * as Styled from "./index.style";
import type { TSymptomType } from "src/interfaces/symptomPage";

const Diagnosis = () => {
  const navigate = useNavigate();
  const {
    state: { symptom },
  } = useLocation() as { state: { symptom: TSymptomType } };

  const containerRef = useRef<HTMLDivElement>(null);

  const { isLoading, curQuestion, selectedAnswer, setSelectedAnswer, handleNext, handleBack } = useDiagnosis(symptom);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    containerRef.current.scrollTo({ top: 0 });
  }, [curQuestion]);

  return (
    <>
      {isLoading ? (
        <Loading
          titleTexts={[{ text: "본격적인\n증상 감별을 시작할게요", style: { fontWeight: 500 } }]}
          illustration={<NoteWithMagnifier style={{ width: "77%" }} />}
        />
      ) : (
        <>
          <ContentHeader back={true} backCallback={handleBack} exit={true} exitCallback={() => navigate("/")} label="감별 진단" />
          <Styled.Layout>
            <Styled.Container ref={containerRef}>
              <Styled.TitleContainer>
                <Styled.Question>
                  {curQuestion.question.split("\\n").map((text: string, idx: number) => (
                    <div key={idx}>{text}</div>
                  ))}
                </Styled.Question>
                {curQuestion.sub_content && <Styled.SubContent>{curQuestion.sub_content}</Styled.SubContent>}
              </Styled.TitleContainer>

              <AnswerButtons
                question={curQuestion}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
                handleNext={handleNext}
              />
            </Styled.Container>
          </Styled.Layout>
        </>
      )}
    </>
  );
};

export default Diagnosis;
