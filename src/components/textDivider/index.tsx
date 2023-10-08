import FlexBox from "../flexBox";
import { Line, Text } from "./index.style";

function TextDivider({ text, color, ...props }: { text: string; color?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <FlexBox gap="10px" justifyContent="center" alignItems="center" {...props}>
      <Line color={color} />
      <Text color={color}>{text}</Text>
      <Line color={color} />
    </FlexBox>
  );
}

export default TextDivider;
