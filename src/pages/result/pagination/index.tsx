import { useNavigate } from "react-router-dom";
import RoundButton from "src/components/roundButton";
import * as Styled from "./index.style";

interface IPaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  departments: string[];
  count: number;
}

function Pagination({ page, count, departments }: IPaginationProps) {
  const navigate = useNavigate();

  return (
    <Styled.RootContainer>
      {page === count ? (
        <Styled.ReserveButtonWrapper>
          <RoundButton
            onClick={() =>
              navigate("/appointment", {
                state: {
                  departments,
                },
              })
            }
          >
            병원 예약하기
          </RoundButton>
        </Styled.ReserveButtonWrapper>
      ) : (
        <Styled.PaginationWrapper>
          <Styled.ButtonsContainer>
            {[1, 2, 3, 4, 5].slice(0, count).map((index) => (
              <Styled.ButtonWrapper key={index}>
                <Styled.Button isSelected={page === index}>
                  <span>{index}</span>
                </Styled.Button>
              </Styled.ButtonWrapper>
            ))}
          </Styled.ButtonsContainer>
        </Styled.PaginationWrapper>
      )}
    </Styled.RootContainer>
  );
}

export default Pagination;
