import { Heading_5 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.grey_800};
  border-radius: 0.8rem;

  padding: 1.8rem 2rem;

  cursor: pointer;

  & + & {
    margin-top: 1rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;

  gap: 1rem;
`;

export const Title = styled(Heading_5)`
  color: ${({ theme }) => theme.color.grey_200};
`;

export const Chip = styled.div<{ variant: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.4rem 0.8rem;

  border-radius: 0.8rem;

  background: ${({ variant }) => (variant === "치료" ? "rgba(157, 167, 242, 0.30)" : "rgba(230, 250, 175, 0.25)")};
  color: ${({ variant, theme }) => (variant === "치료" ? theme.color.blue_100 : theme.color.green_300)};

  font-size: 1.2rem;
  font-weight: 200;
`;

export const Contents = styled.div`
  margin-top: 0.8rem;
`;
