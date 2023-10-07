import { HTMLAttributes } from "react";
import * as Styled from "./index.style";

export interface IRewardListItem extends HTMLAttributes<HTMLDivElement> {
  item: {
    rewardId: number;
    giftTitle: string;
    giftDescription: string;
    image: string;
    point: number;
  };
}

function RewardCard({ item, ...props }: IRewardListItem) {
  return (
    <Styled.ListItem key={item.rewardId} {...props}>
      <Styled.RewardImage src={item.image} />
      <Styled.ListItemContent>
        <Styled.ListItemTitle>{item.giftTitle}</Styled.ListItemTitle>
        <Styled.ListItemPoint>{item.giftDescription} </Styled.ListItemPoint>
      </Styled.ListItemContent>
    </Styled.ListItem>
  );
}

export default RewardCard;
