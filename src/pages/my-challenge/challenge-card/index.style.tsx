import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

export const CardContainer = styled.div<{ isBorderRadius: boolean }>`
  background-color: ${({ theme }) => theme.color.grey_850};
  padding: 2rem 1.8rem 1.6rem;
  border-radius: ${({ isBorderRadius }) => (isBorderRadius ? "0.8rem" : "0.8rem 0.8rem 0 0")};
`;

export const DescriptionContainer = styled.div`
  background: rgba(255, 128, 94, 0.18);
  padding: 1.4rem 1.8rem;
  border-radius: 0 0 0.8rem 0.8rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Title = styled.h1`
  flex: 1;

  font-size: 1.8rem;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.3px;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const Icon = styled.div`
  font-size: 1.8rem;
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.2rem;
`;

export const Tag = styled.div<{ status: "PROGRESS-SUCCESS" | "PROGRESS-NOTHING" | "FINISH-SUCCESS" | "FINISH-FAILURE" }>`
  background: ${({ theme, status }) =>
    status === "FINISH-SUCCESS"
      ? "rgba(84, 100, 242, 0.50)"
      : status === "FINISH-FAILURE"
      ? "rgba(255, 108, 69, 0.50)"
      : theme.color.grey_750};

  color: ${({ theme, status }) =>
    status === "FINISH-SUCCESS" ? theme.color.blue_50 : status === "FINISH-FAILURE" ? theme.color.red_50 : theme.color.grey_300};

  display: inline-block;

  padding: 0.8rem 1.2rem;
  border-radius: 6rem;

  font-size: 1.2rem;
  font-weight: 200;

  .highlight {
    color: ${({ theme }) => theme.color.green};
  }
`;

export const Description = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.color.grey_400};
`;

export const BottomDescription = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.color.grey_300};

  .highlight {
    font-weight: 400;
    color: ${({ theme }) => theme.color.red_600};
  }
`;
