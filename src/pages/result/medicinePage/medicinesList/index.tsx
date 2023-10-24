import * as Styled from "./index.style";
import type { IMedicine } from "src/interfaces/diagnoseApi/result";

interface IMedicineListProps {
  medicines: IMedicine[];
  selectedIdx: number;
  handleClickMedicine: (idx: number) => void;
}

function MedicinesList({ medicines, selectedIdx, handleClickMedicine }: IMedicineListProps) {
  return (
    <Styled.Container>
      <Styled.List>
        {medicines.map((medicine, idx) => (
          <Styled.Item key={medicine.name} isSelected={idx === selectedIdx} onClick={() => handleClickMedicine(idx)}>
            <Styled.ImgWrapper className="background">
              <Styled.Img className="img" src={`images/diagnosis/PILL_${idx + 1}.svg`} alt="pill" />
            </Styled.ImgWrapper>

            <span className="label">{medicine.name}</span>
          </Styled.Item>
        ))}
      </Styled.List>
    </Styled.Container>
  );
}

export default MedicinesList;
