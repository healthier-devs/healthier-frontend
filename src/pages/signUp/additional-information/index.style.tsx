import styled from "styled-components";

export const Container = styled.div`
  width: inherit;
  padding: 0 2rem 12rem;
  box-sizing: border-box;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.color.grey_300};
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;
  letter-spacing: -0.3px;
`;

export const TextField = styled.input`
  padding: 0.2rem 0 0.9rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey_600};
  width: 100%;

  color: ${({ theme }) => theme.color.grey_400};
  font-size: 1.6rem;
  font-weight: 200;
  letter-spacing: -0.3px;

  &:focus {
    border-color: ${({ theme }) => theme.color.blue};
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.grey_600};
  }
`;
export const BirthDateWrapper = styled.div<{ flex: number }>`
  flex: ${({ flex }) => flex};
`;

export const GenderButton = styled.button<{ isSelected: boolean }>`
  width: 100%;
  padding: 1.4rem 0;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme.color.sub_blue : theme.color.grey_600)};

  background: ${({ theme, isSelected }) => (isSelected ? theme.color.sub_blue : "transparent")};
  color: ${({ theme, isSelected }) => (isSelected ? theme.color.blue : theme.color.grey_600)};

  font-size: 1.4rem;
  line-height: 150%;
  font-weight: 200;

  cursor: pointer;
`;

export const Chip = styled.div<{ isSelected: boolean }>`
  padding: 0.8rem 1rem;
  border-radius: 6rem;
  background: ${({ theme, isSelected }) => (isSelected ? theme.color.sub_blue : theme.color.grey_750)};

  margin-bottom: 0.8rem;

  cursor: pointer;

  .health-interest-text {
    color: ${({ theme, isSelected }) => (isSelected ? theme.color.blue : theme.color.grey_300)};
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 100%;
  }
`;

export const HealthInterestDescription = styled.div`
  margin-top: 0.4rem;

  .health-interest-description {
    color: ${({ theme }) => theme.color.grey_500};
    font-size: 1.3rem;
    font-weight: 200;
    line-height: 150%;
    letter-spacing: -0.5px;
  }
`;
