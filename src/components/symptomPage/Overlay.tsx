import styled, { keyframes } from "styled-components";
import theme from "../../lib/theme";
import RoundButton from "../buttons/RoundButton";
import { IOverlayProps } from "../../interfaces/symptomPage";
import { regions } from "../../pages/SymptomPage";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../state";
import { setSite } from "../../state/userSlice";
import { Body_3, Heading_3 } from "../../lib/fontStyle";

const OverlaySection = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background: linear-gradient(
    180deg,
    rgba(19, 20, 22, 0) 0%,
    rgba(19, 20, 22, 0) 78.12%,
    #131416 100%
  );
`;

const ButtonDiv = styled.div`
  width: calc(100vw - 4rem);
  height: 35vh;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  padding-bottom: 2rem;
`;

const PartAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const PartDiv = styled.div`
  height: calc(var(--vh, 1vh) * 35);
  width: 45vh;

  position: absolute;
  bottom: calc(var(--vh, 1vh) * 33);

  display: grid;
  grid-template-columns: 1fr 1.8fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  justify-items: center;
  align-items: center;

  animation: ${PartAnimation} 0.6s ease-in-out both;
`;

const PlaceHolderDiv = styled.div`
  height: 45vh;
`;

const TitleDiv = styled.div`
  width: 100vw;
  height: 20vh;

  padding-top: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled(Heading_3)`
  color: white;
  letter-spacing: -0.025rem;
  margin-left: 2.4rem;
`;

const SubTitle = styled(Body_3)`
  letter-spacing: -0.05rem;

  margin: 0.8rem 0 0 2.4rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.green};
  cursor: pointer;
`;

const RotateButton = styled.button<{ toggle: boolean }>`
  height: 5.2rem;
  width: 5.2rem;

  margin-bottom: 2rem;

  background-color: ${({ toggle, theme }) =>
    toggle ? theme.color.sub_blue : "rgba(0, 0, 0, 0)"};
  color: ${({ toggle, theme }) =>
    toggle ? theme.color.blue : theme.color.grey_500};
  border: ${({ toggle }) => (toggle ? "none" : "solid")};
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.grey_500};

  border-radius: 100%;
  cursor: pointer;

  font-size: 1.6rem;
  font-weight: ${({ toggle }) => (toggle ? "600" : "300")};
`;

const PartButton = styled.button<{ toggle: boolean }>`
  padding: 0.6rem 1rem;

  color: ${({ toggle, theme }) => (toggle ? "white" : theme.color.blue)};
  background-color: ${({ toggle, theme }) =>
    toggle ? theme.color.blue : theme.color.grey_900};

  border: solid 0.1rem;
  border-color: ${({ theme }) => theme.color.blue};
  border-radius: 4rem;
  border-width: 1px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1.3rem;
`;

const particles = ["", "???", "???", "???", "???", "???", "???", "???", "???", "???"];

const Overlay = ({ view, setView, menu, setMenu }: IOverlayProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNext = (site: number) => {
    dispatch(setSite(site));
    navigate("/diagnosis", { state: "headache" });
  };

  return (
    <OverlaySection>
      <TitleDiv>
        {menu ? (
          <Title>
            <span style={{ color: theme.color.green }}>??????</span>??????
            <br />{" "}
            <span style={{ color: theme.color.green }}>{regions[menu]}</span>
            {particles[menu] + " "}
            ???????????????
          </Title>
        ) : (
          <>
            <Title>
              ?????? ????????? <br />
              ??????????????????
            </Title>
            <SubTitle onClick={() => handleNext(8)}>
              ????????? ????????? ??????????????? &#62;
            </SubTitle>
          </>
        )}
      </TitleDiv>
      <PlaceHolderDiv />
      {view ? (
        <PartDiv>
          <div></div>
          <PartButton
            toggle={menu === 8}
            onClick={() => {
              setMenu(8);
            }}
          >
            ?????? ??????
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 7}
            onClick={() => {
              setMenu(7);
            }}
          >
            ?????????
          </PartButton>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <PartButton
            toggle={menu === 9}
            onClick={() => {
              setMenu(9);
            }}
          >
            ??????
          </PartButton>
        </PartDiv>
      ) : (
        <PartDiv>
          <div></div>
          <PartButton
            toggle={menu === 8}
            onClick={() => {
              setMenu(8);
            }}
          >
            ?????? ??????
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 4}
            onClick={() => {
              setMenu(4);
            }}
          >
            ??? ??????
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 2}
            onClick={() => {
              setMenu(2);
            }}
          >
            ????????? ???
          </PartButton>
          <PartButton
            toggle={menu === 1}
            onClick={() => {
              setMenu(1);
            }}
          >
            ????????????
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 3}
            onClick={() => {
              setMenu(3);
            }}
          >
            ???
          </PartButton>
          <PartButton
            toggle={menu === 6}
            onClick={() => {
              setMenu(6);
            }}
          >
            ???
          </PartButton>
          <div></div>
          <PartButton
            toggle={menu === 5}
            onClick={() => {
              setMenu(5);
            }}
          >
            ??? ??????
          </PartButton>
        </PartDiv>
      )}

      <ButtonDiv>
        <RotateButton
          toggle={view === 0}
          onClick={() => {
            setView(0);
            setMenu(0);
          }}
        >
          ???
        </RotateButton>
        <RotateButton
          toggle={view === 1}
          onClick={() => {
            setView(1);
            setMenu(0);
          }}
        >
          ???
        </RotateButton>
        <section onClick={() => menu && handleNext(menu)}>
          <RoundButton
            outline="none"
            backgroundColor={menu ? theme.color.green : theme.color.grey_750}
            color={menu ? theme.color.grey_900 : theme.color.grey_500}
            text={"?????? ????????????"}
          />
        </section>
      </ButtonDiv>
    </OverlaySection>
  );
};

export default Overlay;
