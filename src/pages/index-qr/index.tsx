import { useNavigate } from "react-router-dom";
import NoteWithMagnifier from "src/assets/images/NoteWithMagnifier";
import Loading from "src/components/loading";
import RoundButton from "src/components/roundButton";
import useHospitalId from "src/hooks/useHospitalId";
import theme from "src/lib/theme";

function IndexQR() {
  const { hospitalId, dispatchHospitalId } = useHospitalId();
  const navigate = useNavigate();

  const handleClickNextButton = () => {
    dispatchHospitalId();
    navigate(`/qr/info?hospitalId=${hospitalId}`);
  };

  return (
    <>
      <Loading
        titleTexts={[
          { text: "안녕하세요\n" },
          { text: "간편 문진서비스 ", style: { fontWeight: 500 } },
          { text: "헬시어", style: { fontWeight: 500, color: theme.color.green } },
          { text: "입니다" },
        ]}
        subTitle={"더 정확하고 자세한 진료를 위해\n다음 문진을 진행해주세요."}
        illustration={<NoteWithMagnifier style={{ width: "77%" }} />}
      />
      <div style={{ position: "fixed", bottom: 0, padding: "0 2rem 3.4rem 2rem" }}>
        <RoundButton onClick={handleClickNextButton}>문진 시작하기</RoundButton>
      </div>
    </>
  );
}

export default IndexQR;
