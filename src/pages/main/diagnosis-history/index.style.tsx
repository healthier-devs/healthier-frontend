import styled from "styled-components";

export const Chip = styled.div`
  background: rgba(84, 100, 242, 0.2);

  padding: 4px 8px;
  border-radius: 8px;

  font-size: 1.2rem;
  font-weight: 200;
  color: ${({ theme }) => theme.color.sub_blue};
`;
export const Box = styled.div`
  padding: 2rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.color.grey_800};

  margin-top: 1.2rem;

  .view-history {
    color: ${({ theme }) => theme.color.grey_200};
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 150%;
  }
`;
