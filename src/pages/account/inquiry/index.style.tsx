import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LineDivider = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.color.grey_800};
`;

export const CategoryButton = styled.div`
  width: 100%;
  height: 7.2rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.4rem;
  box-sizing: border-box;
  align-items: center;

  div {
    color: ${({ theme }) => theme.color.blue_500};
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 24px;
  }
  button {
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.color.grey_700};
    padding: 0.8rem 1.2rem;
    color: ${({ theme }) => theme.color.grey_300};
    font-weight: 200;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 2.4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-weight: 200;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.grey_300};
  gap: 2rem;

  .contentTitle {
    width: 100%;
    height: 2.4rem;
    margin-top: -1rem;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey_300};
    padding: 0.8rem 0.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.grey_200};
  }

  .contentValue {
    width: 100%;
    height: 21rem;
    background-color: transparent;
    resize: none;
    border-radius: 1.6rem;
    padding: 2rem;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.color.grey_500};
    font-size: 1.4rem;
    letter-spacing: -0.3px;
    line-height: 160%;
    color: ${({ theme }) => theme.color.grey_200};
  }
`;

export const InquiryPicture = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    color: ${({ theme }) => theme.color.grey_600};
    font-size: 1.4rem;
    font-weight: 200;
    line-height: 150%;
    letter-spacing: -0.3px;
  }
  .pictureDiv {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
  }
  #fileSelector {
    display: none;
  }
  .fileImg {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 8px;
  }
  .filePreviewContainer {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
  }
  .filePreview {
    position: relative;
  }
  .deleteButton {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    background-color: ${({ theme }) => theme.color.grey_800};
    border-radius: 50%;
    color: ${({ theme }) => theme.color.grey_300};
  }
`;

export const Notifier = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.grey_750};
  color: ${({ theme }) => theme.color.grey_400};
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.8rem;
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 200;
  line-height: 150%; /* 21px */
  letter-spacing: -0.3px;

  .blue {
    color: ${({ theme }) => theme.color.blue_500};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 5.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.blue_500};
  border-radius: 3rem;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 2.4rem;
  &:disabled {
    background-color: ${({ theme }) => theme.color.grey_500};
  }
`;

export const InquiryCategoryModal = styled.div`
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  height: 53rem;
  padding: 3.2rem 2.4rem;
  background-color: ${({ theme }) => theme.color.grey_700};
  color: ${({ theme }) => theme.color.grey_200};
  font-family: Spoqa Han Sans Neo;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.3px;
  border-radius: 2.4rem 2.4rem 0 0;

  .modalTitle {
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.3px;
  }

  .categoryList {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .categoryItem {
    width: 100%;
    display: flex;
    color: ${({ theme }) => theme.color.grey_400};
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    justify-content: space-between;
  }
  .selected {
    color: ${({ theme }) => theme.color.white};
    font-weight: 500;
  }
`;
