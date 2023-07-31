import { useLocation, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";
import Loading from "src/components/loading";
import imageUrl from "src/data/image_url";
import useDiagnosis from "src/hooks/diagnose/useDiagnosis";
import AnswerButtons from "./answerButtons";
import * as Styled from "./index.style";
import type { TSymptomType } from "src/interfaces/symptomPage";

const Diagnosis = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: TSymptomType };

  const { isLoading, curQuestion, selectedAnswer, setSelectedAnswer, handleNext, handleBack } = useDiagnosis(state);

  return (
    <>
      {isLoading ? (
        <Loading
          titleTexts={[{ text: "본격적인\n증상 감별을 시작할게요", style: { fontWeight: 500 } }]}
          illustration={<Styled.LoadingIcon loading="eager" alt="icon" src={imageUrl.diagnosis_loading} />}
        />
      ) : (
        <Layout>
          <ContentHeader back={true} backCallback={handleBack} exit={true} exitCallback={() => navigate("/")} label="감별 진단" />

          <Styled.Container>
            <Styled.Question>
              {curQuestion.question.split("\\n").map((text: string, idx: number) => (
                <div key={idx}>{text}</div>
              ))}
            </Styled.Question>
            {curQuestion.sub_content && <Styled.SubContent>{curQuestion.sub_content}</Styled.SubContent>}
            <AnswerButtons
              question={curQuestion}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              handleNext={handleNext}
            />
          </Styled.Container>
        </Layout>
      )}
    </>
  );
};

export default Diagnosis;
