import classNames from "classnames";
import { PRIVACY_POLICY } from "src/data/member_agreement";
import ContentHeader from "../contentHeader";
import FlexBox from "../flexBox";
import * as Styled from "./index.style";

interface IPrivacyPolicy {
  closeModal: () => void;
}
function Table() {
  return <table></table>;
}

export default function PrivacyPolicy({ closeModal }: IPrivacyPolicy) {
  return (
    <Styled.RootContainer>
      <ContentHeader label="개인정보 처리방침" back={false} exit={true} exitCallback={closeModal} />
      <Styled.Container>
        <Styled.TitleWrapper>
          <Styled.Decorator />
          <Styled.Title>개인정보 처리방침</Styled.Title>
        </Styled.TitleWrapper>

        <FlexBox flexDirection="column" gap="20px">
          {PRIVACY_POLICY.map(({ title, contents }, idx) => (
            <div key={idx}>
              {title && <Styled.SubTitle>{title}</Styled.SubTitle>}
              <FlexBox flexDirection="column" gap="6px">
                {contents.map(({ text, listType, isTable, indentation, isBackground }, idx2) =>
                  isTable ? (
                    <Table key={idx2} />
                  ) : (
                    <Styled.Typography
                      key={idx2}
                      className={classNames({
                        "list-type": listType,
                        [`indentation-${indentation}`]: true,
                        background: isBackground,
                      })}
                    >
                      {text}
                    </Styled.Typography>
                  )
                )}
              </FlexBox>
            </div>
          ))}
        </FlexBox>
      </Styled.Container>
    </Styled.RootContainer>
  );
}
