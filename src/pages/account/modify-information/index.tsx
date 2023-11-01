import { useEffect } from "react";
import { useGetHealthInformation } from "src/hooks/mypage/useGetHealthInformation";
import * as Styled from "./index.style";

interface IHealthInformation {
  drinkingAmount: "마시지 않음" | "소주 3병 미만" | "소주 3-5병" | "소주 5병 이상";
  smokingAmount: {
    smoking: boolean;
    years: number;
    timesPerDay: number;
  };
  underlyingDiseases: string[];
  medicines: string[];
  continuousMedicines: string[];
  prevSurgery: string[];
}

const ModifyInformation = () => {
  const { isLoading, healthInformationData } = useGetHealthInformation();

  const healthInformation: IHealthInformation = healthInformationData as IHealthInformation;

  useEffect(() => {
    console.log(healthInformation);
  }, [isLoading]);

  const handleDrinkingAmt = (drinkingAmount: string) => {
    //
  };

  return (
    <Styled.Container>
      <Styled.Header>
        정확한 증상 감별을 위해
        <br />
        <span className="bold">추가 정보</span>를 수집할게요{" "}
      </Styled.Header>
      <Styled.Box>
        <div className="line">
          <span className="green">Q.</span>
          <span>평소 주량을 알려주세요 </span>
          <span className="blue sub">(일주일 기준)</span>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.drinkingAmount === "마시지 않음"}>마시지 않음</Styled.Chip>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.drinkingAmount === "소주 3병 미만"}>소주 3병 미만</Styled.Chip>
          <Styled.Chip selected={healthInformation.drinkingAmount === "소주 3-5병"}>소주 3-5병</Styled.Chip>
          <Styled.Chip selected={healthInformation.drinkingAmount === "소주 5병 이상"}>소주 5병 이상</Styled.Chip>
        </div>
      </Styled.Box>
      <Styled.Box>
        <div className="line">
          <span className="green">Q.</span>
          <span>평소 흡연량을 알려주세요 </span>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.smokingAmount.smoking === false}>흡연을 하지 않음</Styled.Chip>
          <Styled.Chip selected={healthInformation.smokingAmount.smoking === true}>현재 흡연중</Styled.Chip>
        </div>
        <Styled.SmokeBox clickable={healthInformation.smokingAmount.smoking === true}>
          <Styled.SmokeInput placeholder="횟수" disabled={!healthInformation.smokingAmount.smoking === true} />
          년동안 하루 <Styled.SmokeInput placeholder="횟수" disabled={!healthInformation.smokingAmount.smoking === true} />번 피웠어요
        </Styled.SmokeBox>
      </Styled.Box>
      <Styled.Box>
        <div className="line">
          <span className="green">Q.</span>
          <span>현재 앓고 있는 기저질환을 </span>
          <span className="blue">모두</span>
          <span> 선택해주세요</span>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.underlyingDiseases.length === 0}>해당사항 없음</Styled.Chip>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.underlyingDiseases.includes("고혈압")}>고혈압</Styled.Chip>
          <Styled.Chip selected={healthInformation.underlyingDiseases.includes("간엽")}>간엽</Styled.Chip>
          <Styled.Chip selected={healthInformation.underlyingDiseases.includes("당뇨")}>당뇨</Styled.Chip>
          <Styled.Chip selected={healthInformation.underlyingDiseases.includes("결핵")}>결핵</Styled.Chip>
          <Styled.Chip selected={healthInformation.underlyingDiseases.includes("고지혈증")}>고지혈증</Styled.Chip>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.underlyingDiseases.includes("알러지")}>알러지</Styled.Chip>
          <Styled.Chip selected={healthInformation.underlyingDiseases.includes("심장질환")}>심장질환</Styled.Chip>
          <Styled.Chip selected={healthInformation.underlyingDiseases.includes("담석")}>담석</Styled.Chip>
        </div>
      </Styled.Box>
      <Styled.Box>
        <div className="line">
          <span className="green">Q.</span>
          <span>현재 복용하고 있는 약을 </span>
          <span className="blue">모두</span>
          <span> 선택해주세요</span>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.medicines.length === 0}>해당사항 없음</Styled.Chip>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.medicines.includes("고혈압약")}>고혈압약</Styled.Chip>
          <Styled.Chip selected={healthInformation.medicines.includes("간염약")}>간염약</Styled.Chip>
          <Styled.Chip selected={healthInformation.medicines.includes("당뇨약")}>당뇨약</Styled.Chip>
          <Styled.Chip selected={healthInformation.medicines.includes("결핵약")}>결핵약</Styled.Chip>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.medicines.includes("고지혈증약")}>고지혈증약</Styled.Chip>
          <Styled.Chip selected={healthInformation.medicines.includes("알러지약")}>알러지약</Styled.Chip>
          <Styled.Chip selected={healthInformation.medicines.includes("심장질환약")}>심장질환약</Styled.Chip>
          <Styled.Chip selected={healthInformation.medicines.includes("담석약")}>담석약</Styled.Chip>
        </div>
      </Styled.Box>
      <Styled.Box>
        <div className="line">
          <span className="green">Q.</span>
          <span>지속적으로 먹는 약이 있나요? </span>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.continuousMedicines.length === 0}>해당사항 없음</Styled.Chip>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.continuousMedicines.includes("아스피린")}>아스피린</Styled.Chip>
          <Styled.Chip selected={healthInformation.continuousMedicines.includes("소염진통제")}>소염진통제</Styled.Chip>
          <Styled.Chip selected={healthInformation.continuousMedicines.includes("스테로이드")}>스테로이드</Styled.Chip>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.continuousMedicines.includes("항생제")}>항생제</Styled.Chip>
          <Styled.Chip selected={healthInformation.continuousMedicines.includes("제산제")}>제산제</Styled.Chip>
        </div>
      </Styled.Box>
      <Styled.Box>
        <div className="line">
          <span className="green">Q.</span>
          <span>이전에 수술을 받은 적이 있다면, 체크해주세요 </span>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.prevSurgery.length === 0}>해당사항 없음</Styled.Chip>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.prevSurgery.includes("암 수술")}>암 수술</Styled.Chip>
          <Styled.Chip selected={healthInformation.prevSurgery.includes("산부인과 시술 혹은 수술")}>산부인과 시술 혹은 수술</Styled.Chip>
          <Styled.Chip selected={healthInformation.prevSurgery.includes("뇌 수술")}>뇌 수술</Styled.Chip>
        </div>
        <div className="line">
          <Styled.Chip selected={healthInformation.prevSurgery.includes("복부 수술")}>복부 수술</Styled.Chip>
          <Styled.Chip selected={healthInformation.prevSurgery.includes("맹장염(충수돌기염)수술")}>맹장염(충수돌기염)수술</Styled.Chip>
        </div>
      </Styled.Box>
      <Styled.Button clickable={true}>정보 저장하기</Styled.Button>
    </Styled.Container>
  );
};

export default ModifyInformation;
