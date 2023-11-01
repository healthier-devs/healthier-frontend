import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
`;

export const Header = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.color.grey_200};
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 140%;
  border-bottom: 5rem;
  .bold {
    font-weight: 500;
  }
`;

export const Box = styled.div`
  width: 100%;
  line-height: 150%;
  font-size: 1.6rem;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .line {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
    .green {
      color: ${({ theme }) => theme.color.secondary_green};
      font-size: 1.8rem;
      font-weight: 500;
    }
    .blue {
      color: ${({ theme }) => theme.color.blue};
    }
    .sub {
      font-size: 1.4rem;
    }
  }
`;

export const Chip = styled.div<{ selected: boolean }>`
  background-color: ${({ theme, selected }) => (selected === true ? theme.color.blue : theme.color.grey_750)};
  color: ${({ theme, selected }) => (selected === true ? theme.color.blue_50 : theme.color.grey_300)};
  border-radius: 60px;
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 100%;
`;

export const SmokeBox = styled.div<{ clickable: boolean }>`
  width: 100%;
  height: 5.6rem;
  display: flex;
  border-radius: 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  background-color: ${({ theme }) => theme.color.grey_800};
  filter: ${({ clickable }) => (clickable ? "none" : "brightness(60%)")};
`;
export const SmokeInput = styled.input`
  width: 6rem;
  padding: 0.6rem 0;
  text-align: center;
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.color.grey_600};
  color: ${({ theme }) => theme.color.grey_600};
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 150%;
  letter-spacing: -0.3px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.grey_300};
  }
`;

export const Button = styled.div<{ clickable: boolean }>`
  width: 100%;
  height: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2.3rem;
  background-color: ${({ theme }) => theme.color.grey_650};
  color: ${({ theme }) => theme.color.grey_500};
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 150%;
  box-sizing: border-box;
  border-radius: 30px;
`;
