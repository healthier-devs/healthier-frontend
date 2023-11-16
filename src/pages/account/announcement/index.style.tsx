import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
`;

export const AnnouncementItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem;
  justify-content: center;
  padding: 1.6rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey_750};
  .mainTitle {
    font-size: 1.6rem;
    font-weight: 200;
    margin-bottom: 1.6rem;
  }
  .dateText {
    color: ${({ theme }) => theme.color.grey_600};
    font-size: 1.3rem;
    font-weight: 200;
    line-height: 150%;
  }
`;

export const ObservedDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: red;
`;
