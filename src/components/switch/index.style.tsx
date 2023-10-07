import styled from "styled-components";

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  height: 100%;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 1;

  left: -100%;
  width: 300%;
`;

export const Container = styled.div`
  width: 40px;
  height: 20px;

  display: inline-flex;
  position: relative;
  z-index: 0;
`;
