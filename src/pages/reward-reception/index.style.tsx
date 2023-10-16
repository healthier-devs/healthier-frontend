import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5.6rem;
  width: 100%;
  box-sizing: border-box;
`;

export const RewardImageContainer = styled.div`
  height: 25.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.grey_850};
`;

export const RewardImage = styled.img`
  width: 27.8rem;
  height: 17.6rem;

  border-radius: 2rem;
`;

export const ContentContainer = styled.div`
  margin: 3rem 2.4rem;
`;

export const Line = styled.div`
  height: 0.06rem;
  width: 100%;

  background-color: ${({ theme }) => theme.color.grey_750};

  margin: 1.4rem 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_200};
`;

export const Point = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.blue_500};
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const DescriptionText = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.grey_400};
`;

export const DetailText = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.03rem;

  color: ${({ theme }) => theme.color.sub_blue};
`;

export const DottedLine = styled.div`
  height: 1px;
  background-image: ${({ theme }) => `linear-gradient(to right, ${theme.color.grey_600} 33%, transparent 0%)`};
  background-position: bottom;
  background-size: 6px 8px;
  background-repeat: repeat-x;
  flex: 1;

  margin: 0 1.6rem;
`;

export const DescriptionBox = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 1rem;
  }
`;

export const BottomCTA = styled.div`
  position: fixed;
  bottom: 3.4rem;
  width: calc(var(--vw, 1vw) * 100);
  box-sizing: border-box;

  padding: 0 2rem;
`;
