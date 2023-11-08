import { useState } from "react";
import { DIAGNOSE_TYPES } from "src/data/symptom_type";
import type { TDiagnoseCategory, TSymptomType } from "src/interfaces/symptomPage";

const useSymptomPage = () => {
  const [category, setCategory] = useState<TDiagnoseCategory | null>(null);
  const [symptoms, setSymptoms] = useState<TSymptomType[]>([]);
  const [selectedSymptom, setSelectedSymptom] = useState<TSymptomType | null>(null);
  const [showSymptomModal, setShowSymptomModal] = useState<boolean>(false);

  const clearSelectedCategory = () => {
    setCategory(null);
    setSymptoms([]);
  };

  const handleClickBack = () => {
    if (showSymptomModal) {
      handleClickBackdrop();
    } else {
      clearSelectedCategory();
    }
  };

  const handleClickCategory = (c: TDiagnoseCategory) => {
    setCategory(c);
  };

  const handleRemoveCategory = () => {
    clearSelectedCategory();
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
    clearSelectedCategory();
    setShowSymptomModal(false);
    setSelectedSymptom(null);
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

  return {
    category,
    symptoms,
    selectedSymptom,
    showSymptomModal,
    handleClickBack,
    handleClickBackdrop,
    handleClickCategory,
    handleRemoveCategory,
    handleClickSymptom,
    isNextButtonEnabled,
    handleClickNext,
  };
};

export default useSymptomPage;
