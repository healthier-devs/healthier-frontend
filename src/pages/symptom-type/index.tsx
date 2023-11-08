import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";
import { useHeaderNavigation } from "src/hooks/useHeaderNavigation";
import { NextButton } from "../signUp/lib";
import { Title, LAYOUT_STYLE } from "./lib";

function SymptomTypePage() {
  const { handleClickBack, handleClickExit } = useHeaderNavigation();

  return (
    <>
      <ContentHeader label="감별 진단" back backCallback={handleClickBack} exit exitCallback={handleClickExit} />
      <Layout style={LAYOUT_STYLE}>
        <Title text={"증상이 있는 부위를\n선택해주세요"} />
      </Layout>
      <NextButton isEnabled={true} onClick={() => null} />
    </>
  );
}

export default SymptomTypePage;
