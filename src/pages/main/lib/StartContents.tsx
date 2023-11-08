import { Link } from "react-router-dom";
import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import styled from "styled-components";

interface IStartContents {
  text: string;
  buttonText: string;
  buttonHref: string;
}

function StartContents({ text, buttonText, buttonHref }: IStartContents) {
  return (
    <Box>
      <Text>{text}</Text>
      <Button>
        <Link to={buttonHref}>
          <span className="text">{buttonText}</span>
        </Link>
        <ChevronRightIcon strokeWidth={2} />
      </Button>
    </Box>
  );
}

export default StartContents;

const Box = styled.div`
  padding-top: 2px;

  padding: 20px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.grey_600};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.color.grey_400};

  font-size: 14px;
  font-weight: 200;
  line-height: 160%;

  white-space: pre-line;
  text-align: center;

  margin-bottom: 14px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;

  margin: 0 auto;
  padding: 10px 14px 10px 16px;

  background: ${({ theme }) => theme.color.blue};
  border-radius: 60px;

  .text {
    color: #fff;

    font-size: 13px;
    font-weight: 300;
    line-height: 100%;

    margin-right: 2px;
  }
`;
