import { Container as Layout } from "src/components/layout/index.style";
import styled from "styled-components";

export const RootContainer = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  height: 100%;

  background: radial-gradient(305.24% 173.78% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%), #131416;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Dialog = styled.div`
  text-align: center;
`;
export const Message = styled.p`
  font-size: 2.4rem;
  line-height: 1.4em;
  font-weight: 300;

  color: ${({ theme }) => theme.color.grey_200};
  text-align: center;
  white-space: pre-line;

  margin-bottom: 3rem;
`;

export const SubMessage = styled(Message)`
  color: ${({ theme }) => theme.color.grey_400};
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 200;
  line-height: 150%; /* 24px */
  letter-spacing: -0.3px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const EmptyImage = styled.img`
  width: 14rem;
  padding: 4.8rem 5.9rem;
  margin-bottom: 1.4rem;
`;

export const EmptyImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: fit-content;
`;
