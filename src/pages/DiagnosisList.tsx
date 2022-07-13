import { useState } from "react";
import styled from "styled-components";
import RoundButton from "../components/buttons/RoundButton";
import MainHeader from "../components/header/MainHeader";
import ListComponent from "../components/diagnosisListPage/ListComponent";
import theme from "../lib/theme";
import { useNavigate } from "react-router-dom";
import { Body_2, Description, Heading_3 } from "../lib/fontStyle";
import { useEffect } from "react";
import axios from "axios";
import { IDiagnosisList } from "../interfaces/component";

const Container = styled.section`
  padding-top: 9.6rem;
`;
const ButtonBox = styled.section`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;

  padding: 10.4rem 2rem 3rem 2rem;

  background: linear-gradient(
    180deg,
    rgba(19, 20, 22, 0) 0%,
    rgba(19, 20, 22, 0.947917) 78.12%,
    #131416 100%
  );
`;
const Title = styled(Heading_3)`
  color: ${({ theme }) => theme.color.grey_200};

  margin: 4rem 2.4rem 0 2.4rem;
`;
const DescriptionBox = styled(Description)`
  text-align: end;

  color: ${({ theme }) => theme.color.grey_500};

  margin-bottom: 1.2rem;
  margin-right: 2.4rem;
`;
const Highlight = styled.span<{ type: string }>`
  color: ${({ theme, type }) =>
    type === "title" ? theme.color.green : theme.color.sub_green};
`;
const List = styled.section`
  margin: 0 2.4rem 10rem 2.4rem;
`;
const EmptyContainer = styled.section`
  padding-top: 12.5rem;
`;
const EmptyText = styled(Body_2)`
  text-align: center;
  color: ${({ theme }) => theme.color.grey_400};
`;

const DiagnosisList = () => {
  const navigate = useNavigate();
  const [diagnosisList, setDiagnosisList] = useState<IDiagnosisList[]>([]);

  useEffect(() => {
    // axios.get("http://localhost:3000/api/diagnosis/sleepdisorder/list").then();
    setDiagnosisList([
      {
        result_log_id: "1",
        name: "일주기 리듬 수면 장애",
        date: "6/25",
        photo: "/images/list_component.png",
      },
      {
        result_log_id: "2",
        name: "일주기 리듬 수면 장애",
        date: "6/27",
        photo: "/images/list_component.png",
      },
      {
        result_log_id: "3",
        name: "일주기 리듬 수면 장애",
        date: "7/5",
        photo: "/images/list_component.png",
      },
    ]);
  }, []);

  return (
    <Container>
      <MainHeader />
      {diagnosisList.length === 0 ? (
        <>
          <Title>
            빠른 진단으로
            <br /> 내 몸의 정확한 증상을
            <br />
            알아보세요!
          </Title>
          <EmptyContainer>
            <EmptyText>진단 내역이 없어요</EmptyText>
          </EmptyContainer>
        </>
      ) : (
        <>
          <Title>
            <Highlight type="title">홍길동님</Highlight>이 저장한
            <br /> 진단 내역이에요
          </Title>
          <DescriptionBox>
            <Highlight type="description">3개</Highlight>의 진단내역
          </DescriptionBox>
          <List>
            {diagnosisList.map((diag) => (
              <ListComponent key={diag.result_log_id} diagnosis={diag} />
            ))}
          </List>
        </>
      )}
      <ButtonBox>
        <section onClick={() => navigate("/diagnosis")}>
          <RoundButton
            outline="none"
            backgroundColor={theme.color.green}
            color={theme.color.grey_900}
            text="빠른 진단 시작하기"
          />
        </section>
      </ButtonBox>
    </Container>
  );
};

export default DiagnosisList;