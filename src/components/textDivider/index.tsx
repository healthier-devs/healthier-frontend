import FlexBox from "../flexBox";
import { Line, Text } from "./index.style";

function TextDivider({ text, ...props }: { text: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <FlexBox gap="10px" justifyContent="center" alignItems="center" {...props}>
      <Line />
      <Text>{text}</Text>
      <Line />
    </FlexBox>
  );
}

export default TextDivider;
