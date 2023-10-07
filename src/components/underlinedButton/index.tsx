import { Button } from "./index.style";

function UnderlinedButton({ text, ...props }: { text: string } & React.HTMLAttributes<HTMLButtonElement>) {
  return <Button {...props}>{text}</Button>;
}

export default UnderlinedButton;
