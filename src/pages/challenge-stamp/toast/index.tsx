import { ReactNode } from "react";
import * as Styled from "./index.style";

interface IToast {
  isVisible: boolean;
  text: ReactNode;
}

function Toast({ isVisible, text }: IToast) {
  return (
    <>
      {isVisible && (
        <Styled.Container>
          <Styled.Text>{text}</Styled.Text>
        </Styled.Container>
      )}
    </>
  );
}

export default Toast;
