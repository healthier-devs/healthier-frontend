import { HTMLAttributes } from "react";
import { IRewards } from "src/interfaces/rewards";
import * as Styled from "./index.style";

export interface IRewardListItem extends HTMLAttributes<HTMLDivElement> {
  item: IRewards;
}

function RewardCard({ item, ...props }: IRewardListItem) {
  return (
    <Styled.ListItem key={item.rewardId} {...props}>
      <Styled.RewardImage src={item.imageUrl} />
      <Styled.ListItemContent>
        <Styled.ListItemTitle>{item.displayName}</Styled.ListItemTitle>
        <Styled.ListItemPoint>{item.displayName} </Styled.ListItemPoint>
      </Styled.ListItemContent>
    </Styled.ListItem>
  );
}

export default RewardCard;
