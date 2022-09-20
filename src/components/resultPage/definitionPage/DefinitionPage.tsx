import styled from "styled-components";
import Title from "../common/Title";
import Description from "../common/Description";
import CauseBox from "./CauseBox";
import { IDefinePageProps } from "../../../interfaces/resultPage";

const Container = styled.section`
  padding-top: 5.6rem;
  padding-bottom: 13rem;
`;
const Contents = styled.section`
  margin: 2rem 2.4rem 0 2.4rem;
  width: calc(var(--vw, 1vw) * 100 - 4.8rem);
`;
const DescriptionBox = styled.section<{ top: number; bottom: number }>`
  margin-top: ${({ top }) => top}rem;
  margin-bottom: ${({ bottom }) => bottom}rem;
`;

const DefinitionPage = ({
  defineData: { title, definition, tag_flag, cause, cause_detail },
}: {
  defineData: IDefinePageProps;
}) => {
  return (
    <Container>
      <Contents>
        <Title text={title} />
        <DescriptionBox top={2} bottom={8}>
          {definition.map((text, idx) => (
            <section key={idx}>
              {text ? <Description text={text} /> : <br />}
            </section>
          ))}
        </DescriptionBox>
        <Title text="원인이 무엇인가요?" />
        {cause?.length === 2 && (
          <CauseBox cause_1={cause[0]} cause_2={cause[1]} />
        )}
        <DescriptionBox top={tag_flag === 1 ? 1.6 : 2} bottom={0}>
          {cause_detail.map((text, idx) => (
            <section key={idx}>
              <Description text={text} />
            </section>
          ))}
        </DescriptionBox>
      </Contents>
    </Container>
  );
};

export default DefinitionPage;
