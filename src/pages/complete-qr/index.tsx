import NoteWithMagnifier from "src/assets/images/NoteWithMagnifier";
import Loading from "src/components/loading";

function CompleteQR() {
  return (
    <Loading
      titleTexts={[
        {
          text: "의사 선생님께 증상",
          style: {
            fontWeight: 500,
          },
        },
        {
          text: "에 대한\n상세한 정보를 전달했어요",
        },
      ]}
      subTitle={"진료실&검사실로 안내해드릴 예정이니\n잠시만 대기해주세요"}
      illustration={<NoteWithMagnifier style={{ width: "77%" }} />}
    />
  );
}

export default CompleteQR;
