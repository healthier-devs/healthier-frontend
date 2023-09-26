import { Link } from "react-router-dom";
import styled from "styled-components";
import FlexBox from "../flexBox";

function Footer() {
  return (
    <Container>
      <FlexBox gap="8px" mb="1.6rem" alignItems="center">
        <Link to="/">
          <Typography className="body1">회사소개</Typography>
        </Link>
        <Divider />
        <Link to="/">
          <Typography className="body1">개인정보 처리방침</Typography>
        </Link>
        <Divider />
        <Link to="/">
          <Typography className="body1">이용약관</Typography>
        </Link>
      </FlexBox>
      <Box>
        <Typography className="body2">
          상호명: 헬시어(Healthier)
          {"\n"}
          대표: 정설아
          {"\n"}
          주소: (03777) 서울특별시 서대문구 연세로2나길 61
          {"\n"}
          사업자등록번호 315-61-00596
          {"\n"}
          고객센터 <span>|</span> Email: be@healthier.bio Tel: 0504-0803-7188
          {"\n"}
          Copyright 2023 헬시어(Healthier). All right reserved
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  background: ${({ theme }) => theme.color.grey_750};
  margin-top: 10rem;

  padding: 3rem 2.4rem calc(10.9rem + 3rem);
`;

const Divider = styled.div`
  height: 1.4rem;
  width: 1px;
  background: ${({ theme }) => theme.color.grey_600};
`;

const Typography = styled.p`
  font-weight: 200;

  &.body1 {
    color: ${({ theme }) => theme.color.grey_400};
    font-size: 1.4rem;
    line-height: 150%;
  }

  &.body2 {
    color: ${({ theme }) => theme.color.grey_500};
    font-size: 1.3rem;
    line-height: 160%;
    white-space: pre-line;
  }

  & > span {
    color: ${({ theme }) => theme.color.grey_600};
  }
`;

const Box = styled.div`
  margin-bottom: 38px;
`;
