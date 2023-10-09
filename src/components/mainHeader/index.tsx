import imageUrl from "src/data/image_url";
import HeaderContainer from "../headerContainer";
import { Container } from "./index.style";

interface IMainHeader {
  onClickLogo?: () => void;
}

const MainHeader = ({ onClickLogo }: IMainHeader) => {
  return (
    <HeaderContainer>
      <Container>
        <div onClick={onClickLogo}>
          <img className="logo" alt="logo" src={imageUrl.logo} height={24} />
        </div>
      </Container>
    </HeaderContainer>
  );
};

export default MainHeader;
