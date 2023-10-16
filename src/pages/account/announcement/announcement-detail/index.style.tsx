import styled from "styled-components";

export const Container = styled.div`
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 150%;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey_750};
  .titleText {
    color: ${({ theme }) => theme.color.grey_200};
    font-weight: 300;
    font-size: 1.8rem;
  }
  .dateText {
    color: ${({ theme }) => theme.color.grey_600};
    font-weight: 200;
    font-size: 1.3rem;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 150%;
  font-size: 1.4rem;
  font-weight: 200;
  color: ${({ theme }) => theme.color.grey_400};
`;

export const NumList = styled.li`
  list-style-type: decimal;
  margin-left: 1.6rem;
  margin-bottom: 1.6rem;
`;

export const DotList = styled.li`
  list-style-type: disc;
  margin-bottom: 1.6rem;
  margin-left: 1.6rem;
`;

export const HighlightedText = styled.span`
  font-weight: 500;
`;
