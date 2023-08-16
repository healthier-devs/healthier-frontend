import { SEVERITY_TYPES } from "src/data/severity_types";
import * as Styled from "./index.style";
import type { IDiagnoseResult } from "src/interfaces/diagnoseApi/diagnosis";

export interface IDiagnosisItem {
  banner_illustration: string;
  record: {
    diagnosis_id: number;
    title: string;
    is_created?: string;
    severity: number;
  };
}
export interface IDiagnosisCardProps {
  isSquare?: boolean;
  result: IDiagnoseResult;
  handleNavigate: (dx_id: string) => void;
}

const DiagnosisCard = ({ isSquare = false, result, handleNavigate }: IDiagnosisCardProps) => {
  const { severity, dx_name, dx_id, img_url } = result;

  return (
    <Styled.Container isSquare={isSquare} severity={severity} onClick={() => handleNavigate(dx_id)} imgsrc={img_url + severity + ".png"}>
      {isSquare && <Styled.IllustrationShadow />}
      <Styled.Box isDate={null}>
        <Styled.TitleWrapper>
          <Styled.Title severity={severity}>{dx_name}</Styled.Title>
        </Styled.TitleWrapper>
        <Styled.Chip severity={severity}>{SEVERITY_TYPES[severity]}</Styled.Chip>
      </Styled.Box>
    </Styled.Container>
  );
};

export default DiagnosisCard;
