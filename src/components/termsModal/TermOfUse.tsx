import { TERM_OF_USE } from "src/data/member_agreement";
import ContentHeader from "../contentHeader";
import FlexBox from "../flexBox";
import * as Styled from "./index.style";

interface ITermOfUse {
  closeModal: () => void;
}

export default function TermOfUse({ closeModal }: ITermOfUse) {
  return (
    <Styled.RootContainer>
      <ContentHeader label="회원 이용 약관" back={false} exit={true} exitCallback={closeModal} />
      <Styled.Container>
        <Styled.TitleWrapper>
          <Styled.Decorator />
          <Styled.Title>헬시어 회원 이용약관</Styled.Title>
        </Styled.TitleWrapper>

        <FlexBox flexDirection="column" gap="20px">
          {TERM_OF_USE.map(({ title, contents }, idx) => (
            <div key={idx}>
              <Styled.SubTitle>{title}</Styled.SubTitle>
              <FlexBox flexDirection="column" gap="6px">
                {contents.map(({ text, indentation }, idx2) => (
                  <Styled.Typography key={idx2} className={`indentation-${indentation}`}>
                    {text}
                  </Styled.Typography>
                ))}
              </FlexBox>
            </div>
          ))}
        </FlexBox>
      </Styled.Container>
    </Styled.RootContainer>
  );
}
