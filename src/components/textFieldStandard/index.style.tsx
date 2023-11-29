import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Input = styled.input<{ isError: boolean }>`
  padding: 0 0 0.8rem 0;
  font-size: 20px;
  line-height: 1.25em;
  font-weight: 200;
  color: ${({ theme }) => theme.color.grey_300};
  flex-grow: 1;
  flex-shrink: 0;

  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey_600};
  border-radius: 0;

  &:focus {
    border-bottom: 1px solid ${({ isError, theme }) => (isError ? theme.color.red : "#5464f2")};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.grey_600};
    font-size: 1.8rem;
    /* font-height: 1.27em; */
    font-weight: 200;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Label = styled.label`
  font-size: 1.3rem;
  line-height: 1.5em;
  color: ${({ theme }) => theme.color.grey_300};
  font-weight: 300;
  margin-bottom: 1.2rem;
`;

export const HelperText = styled.p`
  margin-top: 0.8rem;

  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.red_600};
`;
