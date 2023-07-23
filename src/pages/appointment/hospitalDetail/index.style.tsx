import { Body_2 } from "src/lib/fontStyle";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 22.8rem;
  background-color: ${({ theme }) => theme.color.grey_900};

  width: 100%;
  height: calc(100% - 22.8rem);

  z-index: 10000;
`;

export const Flex = styled.div<{ gap?: number; direction?: string; align?: string; justify?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? "row"};
  gap: ${({ gap }) => gap ?? 0}rem;
  align-items: ${({ align }) => align ?? "center"};
  justify-content: ${({ justify }) => justify ?? "center"};
`;

export const ContentContainer = styled(Flex)`
  padding: 2.4rem;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color.grey_100};
`;

export const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color.grey_100};
`;

export const Description = styled(Body_2)<{ color: string }>`
  display: inline-block;
  color: ${({ color }) => color};
`;

export const SubDescription = styled.p`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color.grey_500};
`;

export const Button = styled.div`
  width: 100%;
  padding: 1.4rem 6.2rem;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  cursor: pointer;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.color.blue};

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color.grey_100};
`;

export const DescriptionTag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: rgba(84, 100, 242, 0.18);
  padding: 0.5rem 1rem;

  color: ${({ theme }) => theme.color.sub_blue};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.05rem;

  margin-right: 0.6rem;
`;

export const Line = styled.div`
  height: 0.8rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grey_800};
`;

export const TagContainer = styled.div`
  display: -webkit-flexbox;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;

  gap: 0.6rem;
  margin-top: 0.6rem;
`;

export const Table = styled.table`
  width: calc(100vw - 4.8rem);
  margin-top: 0.6rem;
  border-collapse: collapse;

  thead {
    background-color: rgba(84, 100, 242, 0.08);
  }

  tbody {
    background-color: ${({ theme }) => theme.color.grey_850};
    border-radius: 0.6rem 0.6rem 0 0;
  }

  th,
  td {
    width: 50%;
    text-align: left;
    padding: 1rem 1.8rem;
  }
`;

export const EditButton = styled.div`
  cursor: pointer;

  border-radius: 0.8rem;
  padding: 0.8rem 1rem;
  background-color: ${({ theme }) => theme.color.blue};

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.05rem;
  color: ${({ theme }) => theme.color.grey_200};
`;
