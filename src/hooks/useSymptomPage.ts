import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DIAGNOSE_TYPES } from "src/data/symptom_type";
import { useAppDispatch } from "src/state";
import { setCategory as setCategoryAction } from "src/state/diagnoseSlice";
import type { TDiagnoseCategory, TSymptomType } from "src/interfaces/symptomPage";

const useSymptomPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [category, setCategory] = useState<TDiagnoseCategory | null>(null);
  const [symptoms, setSymptoms] = useState<TSymptomType[]>([]);
  const [selectedSymptom, setSelectedSymptom] = useState<TSymptomType | null>(null);
  const [showSymptomModal, setShowSymptomModal] = useState<boolean>(false);
  const isNextButtonEnabled = showSymptomModal ? selectedSymptom !== null : category !== null;

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
    dispatch(
      setCategoryAction({
        category: c,
      })
    );
  };

  const handleRemoveCategory = () => {
    clearSelectedCategory();
  };

  const handleClickNext = () => {
    if (showSymptomModal) {
      navigate("/diagnosis", {
        state: {
          symptom: selectedSymptom,
        },
      });
    }
    if (category) {
      setSymptoms(DIAGNOSE_TYPES[category].symptoms);
      setShowSymptomModal(true);

      return;
    }
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
