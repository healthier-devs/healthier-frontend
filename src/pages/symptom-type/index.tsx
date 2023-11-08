import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";
import { useHeaderNavigation } from "src/hooks/useHeaderNavigation";
import useSymptomPage from "src/hooks/useSymptomPage";
import { NextButton } from "../signUp/lib";
import { Title, Categories, Body, Styles, SymptomsModal } from "./lib";

function SymptomTypePage() {
  const { handleClickExit } = useHeaderNavigation();

  const {
    category,
    symptoms,
    selectedSymptom,
    showSymptomModal,
    isNextButtonEnabled,
    handleClickBack,
    handleClickBackdrop,
    handleClickCategory,
    handleClickNext,
    handleClickSymptom,
    handleRemoveCategory,
  } = useSymptomPage();

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
      </Layout>

      <NextButton isEnabled={isNextButtonEnabled} onClick={handleClickNext} />
    </>
  );
}

export default SymptomTypePage;
