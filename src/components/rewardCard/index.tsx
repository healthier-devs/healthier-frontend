import * as Styled from "./index.style";

export interface IRewardListItem {
  item: {
    rewardId: number;
    giftTitle: string;
    giftDescription: string;
    image: string;
    point: number;
  };
}

function RewardCard({ item }: IRewardListItem) {
  return (
    <Styled.ListItem key={item.rewardId}>
      <Styled.RewardImage src={item.image} />
      <Styled.ListItemContent>
        <Styled.ListItemTitle>{item.giftTitle}</Styled.ListItemTitle>
        <Styled.ListItemPoint>{item.giftDescription} </Styled.ListItemPoint>
      </Styled.ListItemContent>
    </Styled.ListItem>
  );
}

export default RewardCard;
