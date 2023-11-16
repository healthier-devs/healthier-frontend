import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import { useGetHealthInformation } from "src/hooks/mypage/useGetHealthInformation";
import { usePutHealthInformation } from "src/hooks/mypage/usePutHealthInformation";
import { IHealthInformation } from "src/interfaces/mypage";
import * as Styled from "./index.style";

type TMakeRequired<T> = {
  [K in keyof T]-?: T[K];
};

export type TPageProps = TMakeRequired<IHealthInformation>;

const CollectInformation = () => {
  const navigate = useNavigate();
  const { healthInformationData } = useGetHealthInformation();
  const healthInformation: TPageProps = healthInformationData as TPageProps;
  const [drinkingAmount, setDrinkingAmount] = useState(healthInformation.drinkingAmount);
  const [smokingAmount, setSmokingAmount] = useState(healthInformation.smokingAmount);
  const [underlyingDiseases, setUnderlyingDiseases] = useState(healthInformation.underlyingDiseases);
  const [medicines, setMedicines] = useState(healthInformation.medicines);
  const [continuousMedicines, setContinuousMedicines] = useState(healthInformation.continuousMedicines);
  const [prevSurgery, setPrevSurgery] = useState(healthInformation.prevSurgery);
  const { putHealthInformation } = usePutHealthInformation({
    drinkingAmount,
    smokingAmount,
    underlyingDiseases,
    medicines,
    continuousMedicines,
    prevSurgery,
  });

  useEffect(() => {
    setDrinkingAmount(healthInformation.drinkingAmount);
    setSmokingAmount(healthInformation.smokingAmount);
    setUnderlyingDiseases(healthInformation.underlyingDiseases);
    setMedicines(healthInformation.medicines);
    setContinuousMedicines(healthInformation.continuousMedicines);
    setPrevSurgery(healthInformation.prevSurgery);
  }, [healthInformation]);

  const handleChangeDrinkingAmount = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target) {
      const textContent = target.textContent;

      if (
        textContent === "마시지 않음" ||
        textContent === "소주 3병 미만" ||
        textContent === "소주 3-5병" ||
        textContent === "소주 5병 이상"
      ) {
        setDrinkingAmount(textContent);
      }
    }
  };

  const handleChangeSmokingStatus = (e: React.MouseEvent<HTMLDivElement> | React.ChangeEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    console.log(e);

    if (target) {
      const textContent = target.textContent;

      if (textContent) {
        console.log(textContent);
      }
      if (textContent === "흡연을 하지 않음") {
        setSmokingAmount({
          smoking: false,
          years: 0,
          timesPerDay: 0,
        });
      } else if (textContent === "현재 흡연중") {
        setSmokingAmount({
          smoking: true,
          years: healthInformation.smokingAmount.years,
          timesPerDay: healthInformation.smokingAmount.timesPerDay,
        });
      }
    }
  };

  const handleChangeUnderlyingDiseases = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target) {
      const textContent = target.textContent;

      if (textContent === "해당사항 없음") {
        setUnderlyingDiseases([]);
      } else if (
        textContent === "고혈압" ||
        textContent === "간염" ||
        textContent === "당뇨" ||
        textContent === "결핵" ||
        textContent === "고지혈증" ||
        textContent === "알러지" ||
        textContent === "심장질환" ||
        textContent === "담석"
      ) {
        if (underlyingDiseases.includes(textContent)) {
          setUnderlyingDiseases(underlyingDiseases.filter((disease) => disease !== textContent));
        } else {
          setUnderlyingDiseases([...underlyingDiseases, textContent]);
        }
      }
    }
  };

  const handleChangeMedicines = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target) {
      const textContent = target.textContent;

      if (textContent === "해당사항 없음") {
        setMedicines([]);
      } else if (
        textContent === "고혈압약" ||
        textContent === "간염약" ||
        textContent === "당뇨약" ||
        textContent === "결핵약" ||
        textContent === "고지혈증약" ||
        textContent === "알러지약" ||
        textContent === "심장질환약" ||
        textContent === "담석약"
      ) {
        if (medicines.includes(textContent)) {
          setMedicines(medicines.filter((medicine) => medicine !== textContent));
        } else {
          setMedicines([...medicines, textContent]);
        }
      }
    }
  };

  const handleChangeContinuousMedicines = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target) {
      const textContent = target.textContent;

      if (textContent === "해당사항 없음") {
        setContinuousMedicines([]);
      } else if (
        textContent === "아스피린" ||
        textContent === "소염진통제" ||
        textContent === "스테로이드" ||
        textContent === "항생제" ||
        textContent === "제산제"
      ) {
        if (continuousMedicines.includes(textContent)) {
          setContinuousMedicines(continuousMedicines.filter((medicine) => medicine !== textContent));
        } else {
          setContinuousMedicines([...continuousMedicines, textContent]);
        }
      }
    }
  };

  const handleChangePrevSurgery = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target) {
      const textContent = target.textContent;

      if (textContent === "해당사항 없음") {
        setPrevSurgery([]);
      } else if (
        textContent === "암 수술" ||
        textContent === "산부인과 시술 혹은 수술" ||
        textContent === "뇌 수술" ||
        textContent === "복부 수술" ||
        textContent === "맹장염(충수돌기염) 수술"
      ) {
        if (prevSurgery.includes(textContent)) {
          setPrevSurgery(prevSurgery.filter((surgery) => surgery !== textContent));
        } else {
          setPrevSurgery([...prevSurgery, textContent]);
        }
      }
    }
  };

  const handleBtnClick = () => {
    putHealthInformation();
    // console.log(
    //   JSON.stringify({
    //     drinkingAmount,
    //     smokingAmount,
    //     underlyingDiseases,
    //     medicines,
    //     continuousMedicines,
    //     prevSurgery,
    //   })
    // );
    navigate("/symptom-type");
  };

  return (
    <>
      <ContentHeader back backgroundTransparent={false} backCallback={() => navigate(-1)} exit={false} label={"건강정보 수집"} />
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
            <Styled.Chip selected={drinkingAmount === "마시지 않음"} onClick={handleChangeDrinkingAmount}>
              마시지 않음
            </Styled.Chip>
          </div>
          <div className="line">
            <Styled.Chip selected={drinkingAmount === "소주 3병 미만"} onClick={handleChangeDrinkingAmount}>
              소주 3병 미만
            </Styled.Chip>
            <Styled.Chip selected={drinkingAmount === "소주 3-5병"} onClick={handleChangeDrinkingAmount}>
              소주 3-5병
            </Styled.Chip>
            <Styled.Chip selected={drinkingAmount === "소주 5병 이상"} onClick={handleChangeDrinkingAmount}>
              소주 5병 이상
            </Styled.Chip>
          </div>
        </Styled.Box>

        <Styled.Box>
          <div className="line">
            <span className="green">Q.</span>
            <span>평소 흡연량을 알려주세요 </span>
          </div>
          <div className="line">
            <Styled.Chip selected={smokingAmount.smoking === false} onClick={handleChangeSmokingStatus}>
              흡연을 하지 않음
            </Styled.Chip>
            <Styled.Chip selected={smokingAmount.smoking === true} onClick={handleChangeSmokingStatus}>
              현재 흡연중
            </Styled.Chip>
          </div>
          <Styled.SmokeBox clickable={smokingAmount.smoking === true}>
            <Styled.SmokeInput
              placeholder={smokingAmount.years === 0 ? "횟수" : String(smokingAmount.years)}
              disabled={!smokingAmount.smoking === true}
              onBlur={handleChangeSmokingStatus}
            />
            년동안 하루{" "}
            <Styled.SmokeInput
              placeholder={smokingAmount.timesPerDay === 0 ? "횟수" : String(smokingAmount.timesPerDay)}
              disabled={!smokingAmount.smoking === true}
            />
            번 피웠어요
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
            <Styled.Chip selected={underlyingDiseases.length === 0} onClick={handleChangeUnderlyingDiseases}>
              해당사항 없음
            </Styled.Chip>
          </div>
          <div className="line">
            <Styled.Chip selected={underlyingDiseases.includes("고혈압")} onClick={handleChangeUnderlyingDiseases}>
              고혈압
            </Styled.Chip>
            <Styled.Chip selected={underlyingDiseases.includes("간염")} onClick={handleChangeUnderlyingDiseases}>
              간염
            </Styled.Chip>
            <Styled.Chip selected={underlyingDiseases.includes("당뇨")} onClick={handleChangeUnderlyingDiseases}>
              당뇨
            </Styled.Chip>
            <Styled.Chip selected={underlyingDiseases.includes("결핵")} onClick={handleChangeUnderlyingDiseases}>
              결핵
            </Styled.Chip>
            <Styled.Chip selected={underlyingDiseases.includes("고지혈증")} onClick={handleChangeUnderlyingDiseases}>
              고지혈증
            </Styled.Chip>
          </div>
          <div className="line">
            <Styled.Chip selected={underlyingDiseases.includes("알러지")} onClick={handleChangeUnderlyingDiseases}>
              알러지
            </Styled.Chip>
            <Styled.Chip selected={underlyingDiseases.includes("심장질환")} onClick={handleChangeUnderlyingDiseases}>
              심장질환
            </Styled.Chip>
            <Styled.Chip selected={underlyingDiseases.includes("담석")} onClick={handleChangeUnderlyingDiseases}>
              담석
            </Styled.Chip>
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
            <Styled.Chip selected={medicines.length === 0} onClick={handleChangeMedicines}>
              해당사항 없음
            </Styled.Chip>
          </div>
          <div className="line">
            <Styled.Chip selected={medicines.includes("고혈압약")} onClick={handleChangeMedicines}>
              고혈압약
            </Styled.Chip>
            <Styled.Chip selected={medicines.includes("간염약")} onClick={handleChangeMedicines}>
              간염약
            </Styled.Chip>
            <Styled.Chip selected={medicines.includes("당뇨약")} onClick={handleChangeMedicines}>
              당뇨약
            </Styled.Chip>
            <Styled.Chip selected={medicines.includes("결핵약")} onClick={handleChangeMedicines}>
              결핵약
            </Styled.Chip>
          </div>
          <div className="line">
            <Styled.Chip selected={medicines.includes("고지혈증약")} onClick={handleChangeMedicines}>
              고지혈증약
            </Styled.Chip>
            <Styled.Chip selected={medicines.includes("알러지약")} onClick={handleChangeMedicines}>
              알러지약
            </Styled.Chip>
            <Styled.Chip selected={medicines.includes("심장질환약")} onClick={handleChangeMedicines}>
              심장질환약
            </Styled.Chip>
            <Styled.Chip selected={medicines.includes("담석약")} onClick={handleChangeMedicines}>
              담석약
            </Styled.Chip>
          </div>
        </Styled.Box>

        <Styled.Box>
          <div className="line">
            <span className="green">Q.</span>
            <span>지속적으로 먹는 약이 있나요? </span>
          </div>
          <div className="line">
            <Styled.Chip selected={continuousMedicines.length === 0} onClick={handleChangeContinuousMedicines}>
              해당사항 없음
            </Styled.Chip>
          </div>
          <div className="line">
            <Styled.Chip selected={continuousMedicines.includes("아스피린")} onClick={handleChangeContinuousMedicines}>
              아스피린
            </Styled.Chip>
            <Styled.Chip selected={continuousMedicines.includes("소염진통제")} onClick={handleChangeContinuousMedicines}>
              소염진통제
            </Styled.Chip>
            <Styled.Chip selected={continuousMedicines.includes("스테로이드")} onClick={handleChangeContinuousMedicines}>
              스테로이드
            </Styled.Chip>
          </div>
          <div className="line">
            <Styled.Chip selected={continuousMedicines.includes("항생제")} onClick={handleChangeContinuousMedicines}>
              항생제
            </Styled.Chip>
            <Styled.Chip selected={continuousMedicines.includes("제산제")} onClick={handleChangeContinuousMedicines}>
              제산제
            </Styled.Chip>
          </div>
        </Styled.Box>

        <Styled.Box>
          <div className="line">
            <span className="green">Q.</span>
            <span>이전에 수술을 받은 적이 있다면, 체크해주세요 </span>
          </div>
          <div className="line">
            <Styled.Chip selected={prevSurgery.length === 0} onClick={handleChangePrevSurgery}>
              해당사항 없음
            </Styled.Chip>
          </div>
          <div className="line">
            <Styled.Chip selected={prevSurgery.includes("암 수술")} onClick={handleChangePrevSurgery}>
              암 수술
            </Styled.Chip>
            <Styled.Chip selected={prevSurgery.includes("산부인과 시술 혹은 수술")} onClick={handleChangePrevSurgery}>
              산부인과 시술 혹은 수술
            </Styled.Chip>
            <Styled.Chip selected={prevSurgery.includes("뇌 수술")} onClick={handleChangePrevSurgery}>
              뇌 수술
            </Styled.Chip>
          </div>
          <div className="line">
            <Styled.Chip selected={prevSurgery.includes("복부 수술")} onClick={handleChangePrevSurgery}>
              복부 수술
            </Styled.Chip>
            <Styled.Chip selected={prevSurgery.includes("맹장염(충수돌기염) 수술")} onClick={handleChangePrevSurgery}>
              맹장염(충수돌기염) 수술
            </Styled.Chip>
          </div>
        </Styled.Box>
        <Styled.Button clickable={true} onClick={handleBtnClick}>
          정보 저장하기
        </Styled.Button>
      </Styled.Container>
    </>
  );
};

export default CollectInformation;
