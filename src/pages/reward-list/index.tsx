import ContentHeader from "src/components/contentHeader";
import theme from "src/lib/theme";
import * as Styled from "./index.style";

// TODO: api 연동 및 인터페이스 수정

interface IRewardListItem {
  rewardId: number;
  giftTitle: string;
  giftDescription: string;
  image: string;
  point: number;
}

const rewardItems: IRewardListItem[] = [
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
  return (
    <>
      <ContentHeader back={true} exit={false} label="리워드" style={{ backgroundColor: theme.color.grey_900 }} />
      <Styled.Container>
        <Styled.Title>
          챌린지에 도전해
          <br />
          다양한 리워드를 받아보세요
        </Styled.Title>

        <Styled.ListTitle style={{ marginTop: "3.2rem" }}>3000원 리워드 리스트</Styled.ListTitle>
        <Styled.ListContainer>
          {rewardItems
            .filter((item) => item.point === 3000)
            .map((item) => (
              <Styled.ListItem key={item.rewardId}>
                <Styled.RewardImage src={item.image} />
                <Styled.ListItemContent>
                  <Styled.ListItemTitle>{item.giftTitle}</Styled.ListItemTitle>
                  <Styled.ListItemPoint>{item.giftDescription} </Styled.ListItemPoint>
                </Styled.ListItemContent>
              </Styled.ListItem>
            ))}
        </Styled.ListContainer>

        <Styled.ListTitle style={{ marginTop: "5rem" }}>10000원 리워드 리스트</Styled.ListTitle>
        <Styled.ListContainer>
          {rewardItems
            .filter((item) => item.point === 10000)
            .map((item) => (
              <Styled.ListItem key={item.rewardId}>
                <Styled.RewardImage src={item.image} />
                <Styled.ListItemContent>
                  <Styled.ListItemTitle>{item.giftTitle}</Styled.ListItemTitle>
                  <Styled.ListItemPoint>{item.giftDescription} </Styled.ListItemPoint>
                </Styled.ListItemContent>
              </Styled.ListItem>
            ))}
        </Styled.ListContainer>
      </Styled.Container>
    </>
  );
}

export default RewardList;
