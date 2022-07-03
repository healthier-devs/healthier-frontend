import styled from "styled-components";
import Description from "../common/Description";

const Background = styled.section<{ idx: number }>`
  display: flex;
  background-color: ${({ theme, idx }) =>
    idx % 2 === 0 ? theme.color.grey_800 : "transparent"};
`;
const Icon = styled.section`
  margin-top: 2.6rem;
  margin-left: 2.4rem;

  //width: 2.3rem;
  //height: 3.3rem;
  font-size: 2.3rem;
`;
const Contents = styled.section`
  padding: 1.6rem 2.4rem 1.6rem 1.6rem;
  width: calc(100vw - 4.8rem);
`;
const Title = styled.section`
  line-height: 150%;
  font-size: 1.6rem;

  color: ${({ theme }) => theme.color.grey_300};

  font-weight: bolder;

  margin-bottom: 0.2rem;
`;

const LifeComponent = ({
  idx,
  icon,
  title,
  content,
}: {
  idx: number;
  icon: string;
  title: string;
  content: string;
}) => {
  return (
    <Background idx={idx}>
      <Icon>{icon}</Icon>
      <Contents>
        <Title>{title}</Title>
        <Description text={content} />
      </Contents>
    </Background>
  );
};

export default LifeComponent;