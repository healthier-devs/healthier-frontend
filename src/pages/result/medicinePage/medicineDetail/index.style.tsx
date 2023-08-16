import styled from "styled-components";

export const Contents = styled.div`
  margin-top: 2.2rem;

  .sub-title {
    font-size: 1.6rem;
    line-height: 150%;
    font-weight: 300;

    color: ${({ theme }) => theme.color.grey_200};

    margin-bottom: 0.2rem;
  }

  .mb-8 {
    margin-bottom: 0.8rem;
  }
`;
