import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import RewardCard from "src/components/rewardCard";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

// TODO: api 연동 및 인터페이스 수정

const rewardItems = [
  {
    rewardId: 0,
    giftTitle: "배달의 민족",
    giftDescription: "3000원 상품권",
    image: "",
    point: 3000,
  },
  {
    rewardId: 1,
    giftTitle: "배달의 민족",
    giftDescription: "3000원 상품권",
    image: "",
    point: 3000,
  },
  {
    rewardId: 2,
    giftTitle: "배달의 민족",
    giftDescription: "3000원 상품권",
    image: "",
    point: 3000,
  },
  {
    rewardId: 3,
    giftTitle: "배달의 민족",
    giftDescription: "3000원 상품권",
    image: "",
    point: 3000,
  },
  {
    rewardId: 4,
    giftTitle: "배달의 민족",
    giftDescription: "3000원 상품권",
    image: "",
    point: 3000,
  },
  {
    rewardId: 5,
    giftTitle: "네이버페이",
    giftDescription: "10000원 상품권",
    image: "",
    point: 10000,
  },
  {
    rewardId: 6,
    giftTitle: "네이버페이",
    giftDescription: "10000원 상품권",
    image: "",
    point: 10000,
  },
  {
    rewardId: 7,
    giftTitle: "네이버페이",
    giftDescription: "10000원 상품권",
    image: "",
    point: 10000,
  },
  {
    rewardId: 8,
    giftTitle: "네이버페이",
    giftDescription: "10000원 상품권",
    image: "",
    point: 10000,
  },
];

function RewardList() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/challenge/reward");
    }
  }, []);

  const handleClickReward = () => {
    if (state === "all") {
      return;
    }

    navigate("/challenge/reward/reception");
  };

  return (
    <>
      <ContentHeader back={true} exit={false} label="리워드" style={{ backgroundColor: theme.color.grey_900 }} />
      <Styled.Container>
        <Styled.Title>
          {state === "all" ? (
            <>
              챌린지에 도전해
              <br />
              다양한 리워드를 받아보세요
            </>
          ) : state === "midterm" ? (
            <>
              Midterm 리워드를
              <br />
              선택해주세요
            </>
          ) : (
            <>
              Final 리워드를
              <br />
              선택해주세요
            </>
          )}
        </Styled.Title>

        {state !== "final" && (
          <div style={{ marginTop: "3.2rem" }}>
            {state !== "midterm" && <Styled.ListTitle>3000원 리워드 리스트</Styled.ListTitle>}
            <Styled.ListContainer>
              {rewardItems
                .filter((item) => item.point === 3000)
                .map((item) => (
                  <RewardCard key={item.rewardId} item={item} onClick={handleClickReward} />
                ))}
            </Styled.ListContainer>
          </div>
        )}

        {state !== "midterm" && (
          <div style={{ marginTop: "5rem" }}>
            {state !== "final" && <Styled.ListTitle>10000원 리워드 리스트</Styled.ListTitle>}
            <Styled.ListContainer>
              {rewardItems
                .filter((item) => item.point === 10000)
                .map((item) => (
                  <RewardCard key={item.rewardId} item={item} onClick={handleClickReward} />
                ))}
            </Styled.ListContainer>
          </div>
        )}
      </Styled.Container>
    </>
  );
}

export default RewardList;
