import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.grey_800};
  padding: 3.2rem 2.4rem 9rem;
  .mainTitle {
    font-size: 1.6rem;
    line-height: 160%;
    font-weight: 200;
    color: ${({ theme }) => theme.color.grey_300};
    margin-bottom: 1.2rem;
  }
  .subTitle {
    font-size: 1.3rem;
    font-weight: 100;
    list-style: disc;
    list-style-position: inside;
    line-height: 170%;
    color: ${({ theme }) => theme.color.grey_400};
  }
`;
