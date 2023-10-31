import styled from "styled-components";

export const Typography = styled.p`
  font-size: 14px;
  font-weight: 200;
  line-height: 130%;
  letter-spacing: -0.5px;

  &.grey-300 {
    color: ${({ theme }) => theme.color.grey_300};
  }

  &.grey-400 {
    color: ${({ theme }) => theme.color.grey_400};
  }

  .highlight {
    color: ${({ theme }) => theme.color.red_600};

    font-size: 14px;
    font-weight: 300;
  }
`;

export const Card = styled.div`
  padding: 20px 18px 16px 18px;
  border-radius: 8px;

  background: ${({ theme }) => theme.color.grey_850};
  cursor: pointer;
`;

export const CardTitle = styled.p`
  color: ${({ theme }) => theme.color.grey_200};

  font-size: 18px;
  font-weight: 300;
  line-height: 140%;
`;

export const DayChip = styled.div`
  background: ${({ theme }) => theme.color.grey_750};

  padding: 8px 10px;
  border-radius: 100px;

  .chip-text {
    color:${({ theme }) => theme.color.grey_300};
    font-size: 12px;
    font-weight: 200;
    line-height: 100%;
    letter-spacing: -0.5px;s
  }

  .highlight{
    color:${({ theme }) => theme.color.green_500};
  }
`;
