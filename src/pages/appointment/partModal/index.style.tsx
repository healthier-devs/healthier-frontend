import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);

  z-index: 10000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxContainer = styled.div`
  border-radius: 0.8rem;
  width: 32rem;
  padding: 2rem 1.6rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.color.grey_850};
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.6rem;
  row-gap: 1.4rem;

  height: 28.2rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  margin: 2.4rem 0 1.6rem 0;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_200};
  margin-top: 2rem;
`;

export const Card = styled.div<{ selected: boolean }>`
  width: 9.2rem;
  height: 6rem;
  border-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, selected }) => (selected ? theme.color.sub_blue : theme.color.grey_800)};

  font-size: 1.4rem;
  font-style: normal;
  font-weight: ${({ selected }) => (selected ? 300 : 200)};
  line-height: 150%;
  letter-spacing: -0.03rem;
  color: ${({ theme, selected }) => (selected ? theme.color.blue : theme.color.grey_400)};

  white-space: pre-line;
  text-align: center;
`;
