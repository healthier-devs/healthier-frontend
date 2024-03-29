import { HTMLAttributes } from "react";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import * as Styled from "./index.style";

interface IChallengeCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  days?: number;
  remainDays?: number;
  isSuccessChallenge?: boolean;
  percent?: number;
  status: "PROGRESS-SUCCESS" | "PROGRESS-NOTHING" | "FINISH-SUCCESS" | "FINISH-FAILURE";
}

function ChallengeCard({ name, days, remainDays, isSuccessChallenge, percent, status, onClick }: IChallengeCardProps) {
  const isProgress = status.startsWith("PROGRESS");

  return (
    <Styled.Container onClick={onClick}>
      <Styled.CardContainer isBorderRadius={status !== "PROGRESS-NOTHING"}>
        <Styled.TitleContainer>
          <Styled.Title>{name}</Styled.Title>
          <ChevronRightIcon stroke="#787C83" strokeWidth={2} />
        </Styled.TitleContainer>

        <Styled.TagContainer>
          <Styled.Tag status={status}>
            {status === "FINISH-SUCCESS" ? (
              "도전 성공"
            ) : status === "FINISH-FAILURE" ? (
              "도전 실패"
            ) : (
              <>
                <span className="highlight">{days}일째</span> 도전
              </>
            )}
          </Styled.Tag>
          <Styled.Description>
            {isProgress
              ? `챌린지 완료까지 ${remainDays}일 남았어요`
              : `${percent}%로 챌린지를 ${isSuccessChallenge ? "성공" : "실패"}했어요`}
          </Styled.Description>
        </Styled.TagContainer>
      </Styled.CardContainer>

      {status === "PROGRESS-NOTHING" && (
        <Styled.DescriptionContainer>
          <Styled.BottomDescription>
            아직 <span className="highlight">오늘의 챌린지</span>를 인증하지 않았어요!
          </Styled.BottomDescription>
        </Styled.DescriptionContainer>
      )}
    </Styled.Container>
  );
}

export default ChallengeCard;
