import Chips from "../../lib/chips";
import Description from "../../lib/description";
import { Contents } from "./index.style";
import type { IMedicine } from "src/interfaces/diagnoseApi/result";

interface IMedicineDetailProps {
  medicine: IMedicine;
}

const MedicineDetail = ({ medicine }: IMedicineDetailProps) => {
  const { sideEffects, dosageUsage, efficacyEffectiveness, ingredient, types, caution } = medicine;
  const cautionTexts = (caution ?? "").split("^");

  return (
    <>
      <Contents>
        <p className="sub-title">효능•효과</p>
        <Description text={efficacyEffectiveness} />
      </Contents>
      {ingredient && (
        <Contents>
          <p className="sub-title mb-8">성분</p>
          <Chips labels={ingredient} />
        </Contents>
      )}
      {types && (
        <Contents>
          <p className="sub-title mb-8">종류</p>
          <Chips labels={types} />
        </Contents>
      )}
      {dosageUsage && (
        <Contents>
          <p className="sub-title mb-8">용량 및 용법</p>
          <Chips labels={dosageUsage} />
        </Contents>
      )}
      {caution && (
        <Contents>
          <p className="sub-title">복용 시 주의하세요</p>
          {cautionTexts.map((cautionText, index) => (
            <Description key={cautionText} text={cautionText} className={index % 2 === 1 ? "highlight" : ""} />
          ))}
        </Contents>
      )}
      <Contents>
        <p className="sub-title mb-8">부작용</p>
        <Chips labels={sideEffects} />
      </Contents>
    </>
  );
};

export default MedicineDetail;
