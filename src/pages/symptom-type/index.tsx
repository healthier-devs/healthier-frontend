import { useState } from "react";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";
import { DIAGNOSE_TYPES } from "src/data/symptom_type";
import { useHeaderNavigation } from "src/hooks/useHeaderNavigation";
import { NextButton } from "../signUp/lib";
import { Title, Categories, Body, Styles, SymptomsModal } from "./lib";
import type { TDiagnoseCategory, TSymptomType } from "src/interfaces/symptomPage";

function SymptomTypePage() {
  const { handleClickExit } = useHeaderNavigation();
  const [category, setCategory] = useState<TDiagnoseCategory | null>(null);
  const [symptoms, setSymptoms] = useState<TSymptomType[]>([]);
  const [selectedSymptom, setSelectedSymptom] = useState<TSymptomType | null>(null);
  const [showSymptomModal, setShowSymptomModal] = useState<boolean>(false);

  const handleClickBack = () => {
    if (showSymptomModal) {
      handleClickBackdrop();
    } else {
      setCategory(null);
      setSymptoms([]);
    }
  };

  const handleClickCategory = (c: TDiagnoseCategory) => {
    setCategory(c);
  };
  const handleRemoveCategory = () => {
    setCategory(null);
    setSymptoms([]);
  };

  const handleClickNext = () => {
    if (showSymptomModal) {
      return;
    }
    if (category === null) {
      return;
    }
    setSymptoms(DIAGNOSE_TYPES[category].symptoms);
    setShowSymptomModal(true);
  };

  const handleClickBackdrop = () => {
    setCategory(null);
    setSymptoms([]);
    setShowSymptomModal(false);
  };

  const handleClickSymptom = (s: TSymptomType) => {
    if (!selectedSymptom) {
      setSelectedSymptom(s);

      return;
    }

    if (selectedSymptom.engName === s.engName) {
      setSelectedSymptom(null);
    } else {
      setSelectedSymptom(s);
    }
  };

  const isNextButtonEnabled = showSymptomModal ? selectedSymptom !== null : category !== null;

  return (
    <>
      <ContentHeader
        label="감별 진단"
        back
        backCallback={handleClickBack}
        exit
        exitCallback={handleClickExit}
        backgroundTransparent={false}
      />
      <Layout style={Styles.LAYOUT_STYLE}>
        <Title text={showSymptomModal ? "어떤 증상이었나요?" : "증상이 있는 부위를\n선택해주세요"} />

        <Styles.Wrapper>
          <Categories
            selectedCategory={category}
            showSymptomModal={showSymptomModal}
            handleClickCategory={handleClickCategory}
            handleRemoveCategory={handleRemoveCategory}
          />

          <Body category={category} isBlurred={symptoms.length > 0} />

          {showSymptomModal && (
            <SymptomsModal
              symptoms={symptoms}
              selectedSymptom={selectedSymptom}
              handleClickSymptom={handleClickSymptom}
              handleClickBackdrop={handleClickBackdrop}
            />
          )}
        </Styles.Wrapper>
      </Layout>

      <NextButton isEnabled={isNextButtonEnabled} onClick={handleClickNext} />
    </>
  );
}

export default SymptomTypePage;
