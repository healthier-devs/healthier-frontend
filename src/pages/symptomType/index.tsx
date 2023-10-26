import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";
import RoundButton from "src/components/roundButton";
import { DIAGNOSE_TYPES } from "src/data/symptom_type";
import useModal from "src/hooks/useModal";
import theme from "src/lib/theme";
import * as Styled from "./index.style";
import SymptomCategory from "./symptomCategory";
import SymptomTypeModal from "./symptomTypeModal";
import type { TDiagnoseType, TSymptomType } from "src/interfaces/symptomPage";

const SymptomTypePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [select, setSelect] = useState(-1);
  const [selectedSymptom, setSelectedSymptom] = useState<TSymptomType | null>(null);
  const { modalRef, isOpenModal, closeModal } = useModal();

  useEffect(() => {
    // if (!state) {
    //   navigate("/");
    // }
    if (!isOpenModal) {
      setSelect(-1);
    }
  }, [isOpenModal, navigate, state]);

  const handleClickNextButton = () => {
    navigate("/diagnosis", {
      state: selectedSymptom,
    });
  };

  return (
    <>
      <ContentHeader
        back={true}
        backCallback={() => navigate(-1)}
        exit={true}
        exitCallback={() => navigate("/")}
        label="증상 유형 선택"
        backgroundTransparent={false}
      />
      <Styled.Background />
      <Layout>
        {isOpenModal && <SymptomTypeModal ref={modalRef} closeModal={closeModal} select={select} />}

        <Styled.Container>
          <Styled.Title>
            증상 유형을
            <br /> 선택해주세요
          </Styled.Title>

          <Styled.SymptomCategoryContainer>
            {DIAGNOSE_TYPES.map((dt: TDiagnoseType) => (
              <SymptomCategory
                key={dt.category}
                diagnoseType={dt}
                selectedSymptom={selectedSymptom}
                setSelectedSymptom={setSelectedSymptom}
              />
            ))}
          </Styled.SymptomCategoryContainer>
        </Styled.Container>
        <Styled.NextButtonContainer>
          <div className="click-enabler">
            <RoundButton
              onClick={handleClickNextButton}
              outline="none"
              backgroundColor={selectedSymptom ? theme.color.blue : theme.color.grey_650}
              color={selectedSymptom ? theme.color.grey_100 : theme.color.grey_500}
              style={{
                zIndex: 1,
              }}
            >
              증상 감별 시작하기
            </RoundButton>
          </div>
        </Styled.NextButtonContainer>
      </Layout>
    </>
  );
};

export default SymptomTypePage;
