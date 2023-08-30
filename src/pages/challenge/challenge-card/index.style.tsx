import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.color.grey_850};
  padding: 2rem 1.8rem 1.6rem;
  border-radius: 0.8rem 0.8rem 0 0;
`;

export const DescriptionContainer = styled.div`
  background: rgba(84, 100, 242, 0.18);
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
  gap: 0.6rem;
  margin-top: 1.2rem;
`;

export const Tag = styled.div`
  background: ${({ theme }) => theme.color.grey_750};
  color: ${({ theme }) => theme.color.grey_300};

  display: inline-block;

  padding: 0.8rem 1.2rem;
  border-radius: 6rem;

  font-size: 1.2rem;
  font-weight: 200;
`;

export const Description = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.color.grey_400};

  .highlight {
    color: ${({ theme }) => theme.color.blue_500};
  }
`;
