import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { RootContainer, Container, BackButton, ExitButton } from "./index.style";

export interface IContentHeader extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  back: boolean;
  exit: boolean;
  backCallback?: () => void;
  exitCallback?: () => void;
  borderBottom?: boolean;
}

const ContentHeader = ({ label = "", back, exit, backCallback, exitCallback, borderBottom = true, ...props }: IContentHeader) => {
  const navigate = useNavigate();

  return (
    <RootContainer borderBottom={borderBottom} {...props}>
      <Container>
        <BackButton visible={back} onClick={() => (backCallback ? backCallback() : navigate(-1))}>
          {back && <img alt="back" src="/images/header/back.svg" width={32} height={32} />}
        </BackButton>
        <section className="title">{label}</section>
        <ExitButton visible={exit} onClick={() => exitCallback && exitCallback()}>
          {exit && <img alt="exit" src="/images/header/exit.svg" width={32} height={32} />}
        </ExitButton>
      </Container>
    </RootContainer>
  );
};

export default ContentHeader;
