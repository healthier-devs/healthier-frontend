import { Body_4 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Title = styled(Body_4)`
  color: ${({ theme }) => theme.color.grey_300};

  margin-bottom: 0.8rem;
`;

export const SelectBox = styled.select<{ isSelected: boolean }>`
  cursor: pointer;
  background: transparent;

  width: 100%;

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.color.grey_600};
  outline: none;

  padding: 1.4rem 1.6rem;

  color: ${({ theme, isSelected }) => (isSelected ? theme.color.grey_300 : theme.color.grey_600)};
  appearance: none;

  font-size: 1.5rem;
  line-height: 150%;

  background-image: url("/images/informationPage/dropdown.svg");
  background-position: right 1.6rem center;
  background-repeat: no-repeat;

  :focus {
    border: 0.1rem solid ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.blue};

    background-image: url("/images/informationPage/dropdown_active.svg");
    background-position: right 1.6rem center;
    background-repeat: no-repeat;
  }
`;
