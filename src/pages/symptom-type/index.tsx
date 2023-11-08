import { useState } from "react";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";
import { useHeaderNavigation } from "src/hooks/useHeaderNavigation";
import { NextButton } from "../signUp/lib";
import { Title, LAYOUT_STYLE, Categories } from "./lib";
import type { TDiagnoseType, TDiagnoseCategory } from "src/interfaces/symptomPage";

function SymptomTypePage() {
  const { handleClickBack, handleClickExit } = useHeaderNavigation();
  const [category, setCategory] = useState<TDiagnoseCategory | null>(null);
  const handleClickCategory = (c: TDiagnoseCategory) => {
    setCategory(c);
  };
  const handleRemoveCategory = () => {
    setCategory(null);
  };

  return (
    <>
      <ContentHeader label="감별 진단" back backCallback={handleClickBack} exit exitCallback={handleClickExit} />
      <Layout style={LAYOUT_STYLE}>
        <Title text={"증상이 있는 부위를\n선택해주세요"} />
        <Categories selectedCategory={category} handleClickCategory={handleClickCategory} handleRemoveCategory={handleRemoveCategory} />
      </Layout>
      <NextButton isEnabled={true} onClick={() => null} />
    </>
  );
}

export default SymptomTypePage;
