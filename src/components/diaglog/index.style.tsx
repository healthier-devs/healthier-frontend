import { Heading_5, Body_4 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  inset: 0;

  display: flex;
`;

export const BackDrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;

  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  border-radius: 12px;
  background: ${({ theme }) => theme.color.grey_850};

  margin: auto;
`;

export const TitleContainer = styled.div`
  padding: 3.2rem 2.6rem 2.8rem;
`;

export const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
  margin-bottom: 8px;
`;

export const Description = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_400};
`;

export const Button = styled.button<{ borderRight?: boolean }>`
  background: transparent;
  cursor: pointer;
  flex: 1;
  padding: 1.4rem 0;

  border-top: 0.6px solid ${({ theme }) => theme.color.grey_700};
  border-right: ${({ theme, borderRight }) => borderRight && `0.6px solid ${theme.color.grey_700}`};

  span {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.2rem;
    letter-spacing: -0.4px;
    color: ${({ theme }) => theme.color.grey_400};
  }

  .confirm {
    color: ${({ theme }) => theme.color.grey_100};
  }
`;
