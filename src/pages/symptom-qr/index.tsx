import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";
import { DENTAL_SYMPTOMS } from "src/data/symptom_type";
import { useAppDispatch } from "src/state";
import { setCategory } from "src/state/diagnoseSlice";
import * as Styled from "./index.style";
import type { TDentalSymptomType } from "src/interfaces/symptomPage";

function SymptomTypeQR() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedSymptom, setSelectedSymptom] = useState<TDentalSymptomType | null>(null);

  const handleClickSymptom = (symptom: TDentalSymptomType) => {
    if (selectedSymptom) {
      return;
    }
    setSelectedSymptom(symptom);
  };

  useEffect(() => {
    if (!selectedSymptom) {
      return;
    }

    const timerId = setTimeout(() => {
      dispatch(
        setCategory({
          category: "치과",
        })
      );

      navigate("/diagnosis", {
        state: selectedSymptom,
      });
    }, 300);

    return () => clearTimeout(timerId);
  }, [navigate, dispatch, selectedSymptom]);

  return (
    <>
      <ContentHeader back={true} backCallback={() => navigate(-1)} label="문진" exit={true} exitCallback={() => navigate("/")} />
      <Layout padding="0 2rem 12rem 2rem" style={{ background: "var(--gradient)" }}>
        <Styled.Container>
          {DENTAL_SYMPTOMS.map((symptom) => (
            <Styled.Button
              key={symptom}
              isSelected={symptom === selectedSymptom}
              value={symptom}
              onClick={() => handleClickSymptom(symptom)}
            >
              {symptom}
            </Styled.Button>
          ))}
        </Styled.Container>
      </Layout>
    </>
  );
}

export default SymptomTypeQR;
