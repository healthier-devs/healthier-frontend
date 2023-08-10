import { Body_1, Body_2 } from "src/lib/fontStyle";
import styled from "styled-components";
import { RootContainer } from "../lib/index.style";

export const Container = styled(RootContainer)`
  padding-top: 5.6rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
`;

export const DescriptionBox = styled.div<{ top: number; bottom: number }>`
  margin-top: ${({ top }) => top}rem;
  margin-bottom: ${({ bottom }) => bottom}rem;
`;

export const KeySymptomContainer = styled.div`
  margin-top: 3rem;
`;

export const SymptomText = styled(Body_1)`
  font-weight: 300;
  color: ${({ theme }) => theme.color.grey_300};

  margin-bottom: 1.2rem;
`;

export const Description = styled(Body_2)`
  color: ${({ theme }) => theme.color.grey_400};
  font-weight: 100;

  white-space: pre-line;
`;

export const CauseTagsContainer = styled.div<{ marginBottom: string }>`
  display: flex;
  gap: 1rem;

  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

export const CauseTagBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  width: 100%;

  padding: 1.4rem 1.8rem;
  border-radius: 0.8rem;

  background: #1e2127;
`;

export const CauseTag = styled.div<{ variant: "primary" | "secondary" }>`
  padding: 0.8rem 1rem;
  border-radius: 10rem;

  font-size: 1.3rem;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.color.grey_200};
  background: ${({ variant, theme }) => (variant === "primary" ? theme.color.blue : theme.color.sub_blue_2)};
`;

export const CauseText = styled.p`
  font-size: 1.5rem;
  font-weight: 100;
  line-height: 150%;

  color: ${({ theme }) => theme.color.grey_300};

  white-space: pre-line;
  text-align: center;
`;
