import { forwardRef, ReactNode } from "react";
import RoundButton from "src/components/roundButton";
import { useGetMyChallenges } from "src/hooks/challenge/useGetMyChallenges";
import theme from "src/lib/theme";
import { useAppSelector } from "src/state";
import * as Styled from "./index.style";

interface IChallengeModalProps {
  title: ReactNode;
  description: ReactNode;
  subDescription: ReactNode;
  cancelText: string;
  confirmText: string;
  onClickCancel: () => void;
  onClickConfirm: () => void;
}

const ChallengeModal = forwardRef<HTMLDivElement, IChallengeModalProps>(function ChallengeModal(
  { title, description, subDescription, cancelText, confirmText, onClickCancel, onClickConfirm },
  ref
) {
  const { authenticated } = useAppSelector((state) => state.auth);
  const { myChallengesData } = useGetMyChallenges({ status: "PROGRESS", authenticated });

  return (
    <Styled.Wrapper>
      <Styled.Container ref={ref}>
        <Styled.Space height={4} />
        <Styled.Title>{title}</Styled.Title>

        <Styled.Space height={0.8} />
        <Styled.Description>{description}</Styled.Description>

        <Styled.Space height={2.4} />
        <Styled.Image className="image" alt="login" src="/images/challenge/modal-icon.png" />
        <Styled.Space height={1.4} />

        <Styled.Description style={{ color: theme.color.grey_200 }}>
          {subDescription} <span style={{ color: theme.color.blue }}>{myChallengesData?.count ?? 0}/3</span>
        </Styled.Description>

        <Styled.Space height={1.4} />

        <RoundButton onClick={onClickConfirm} fontSize={1.5} style={{ width: "29.2rem" }}>
          {confirmText}
        </RoundButton>
        <Styled.Space height={1.2} />
        <RoundButton
          onClick={onClickCancel}
          backgroundColor={theme.color.green}
          color={theme.color.grey_900}
          fontSize={1.5}
          style={{ width: "29.2rem" }}
        >
          {cancelText}
        </RoundButton>

        <Styled.Space height={2} />
      </Styled.Container>
    </Styled.Wrapper>
  );
});

export default ChallengeModal;
