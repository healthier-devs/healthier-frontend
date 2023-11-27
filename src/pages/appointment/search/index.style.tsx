import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 15.8rem);
  position: absolute;
  z-index: 5000;

  background-color: ${({ theme }) => theme.color.grey_900};
  padding-top: 15.8rem;
`;

export const Container = styled.div`
  z-index: 9999;
  position: absolute;
  left: 2rem;
  top: 4.8rem;
  width: calc(100% - 4rem);
`;

export const InputContainer = styled.div<{ isFocus: boolean }>`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 1.4rem 1.8rem;
  border-radius: 3rem;

  background: ${({ theme }) => theme.color.grey_850};
  border: 1px solid ${({ theme, isFocus }) => (isFocus ? theme.color.blue : theme.color.grey_850)};
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;

  color: ${({ theme }) => theme.color.grey_400};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.03rem;

  ::placeholder {
    color: ${({ theme }) => theme.color.grey_600};
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1.6rem 2.4rem 0 2.4rem;

  .sort {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
    letter-spacing: -0.03rem;
    color: ${({ theme }) => theme.color.grey_500};
  }

  .filter-tags {
    display: flex;
    gap: 0.8rem;
  }
`;
