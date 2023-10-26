import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import DiagnosisCard from "src/components/diagnosisCard";
import Layout from "src/components/layout";
import * as Styled from "./index.style";
import type { IDiagnoseResult } from "src/interfaces/diagnoseApi/diagnosis";

const DiagnosisList = () => {
  const { state } = useLocation() as { state: IDiagnoseResult[] };
  const [mostLikelyResult, setMostLikelyResult] = useState<IDiagnoseResult>();
  const [extraResults, setExtraResults] = useState<IDiagnoseResult[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }

    setMostLikelyResult(state[0]);
    setExtraResults(state.slice(1, state.length));
  }, [state, navigate]);

  const handleNavigate = (dx_id: string) => {
    navigate("/result", {
      state: {
        dx_id,
      },
    });
  };

  return (
    <>
      <ContentHeader
        back={true}
        exit={true}
        backCallback={() => navigate(-1)}
        exitCallback={() => navigate("/")}
        backgroundTransparent={false}
      />
      <Layout padding="5.6rem 2.4rem 8rem" style={{ height: "fit-content" }}>
        <Styled.Title padding="2rem 0 1.6rem 0">
          {"가장 가능성 높은 질환은\n"}
          <span className="highlight">{mostLikelyResult?.dx_name}</span>에요
        </Styled.Title>

        {mostLikelyResult && <DiagnosisCard isSquare={true} result={mostLikelyResult} handleNavigate={handleNavigate} />}
        {extraResults && (
          <>
            <Styled.ExtraResultsTitle padding="4rem 0 1.6rem">가능성 높은{"\n"}추가 질환을 알려드려요</Styled.ExtraResultsTitle>
            {extraResults.map((extraResult) => (
              <DiagnosisCard key={extraResult.dx_id} result={extraResult} handleNavigate={handleNavigate} />
            ))}
          </>
        )}
      </Layout>
    </>
  );
};

export default DiagnosisList;
