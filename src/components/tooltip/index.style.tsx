import styled from "styled-components";

export const Wrapper = styled.div<{ position: "left" | "center" | "right" }>`
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ position }) =>
    position === "left" ? `translate(0, -100%);` : position === "center" ? "translate(-20%, -100%)" : "translate(-40%, -100%)"};
  padding-bottom: 1.2rem;

  display: inline-block;

  ::after {
    border-bottom: 8px solid ${({ theme }) => theme.color.grey_650};
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;

    content: "";
    height: 0;
    width: 0;
    right: ${({ position }) => (position === "left" ? "70%" : position === "center" ? "50%" : "30%")};
    position: absolute;
    transform: rotate(180deg) ${({ position }) => `translate(${position === "left" ? "-30%" : position === "center" ? "-50%" : "-70%"}, 0)`};
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 0.2rem;

  padding: 0.8rem 0.6rem 0.8rem 1.2rem;
  background-color: ${({ theme }) => theme.color.grey_650};
  border-radius: 0.8rem;

  white-space: pre;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: -0.006rem;
  color: ${({ theme }) => theme.color.grey_100};
`;
