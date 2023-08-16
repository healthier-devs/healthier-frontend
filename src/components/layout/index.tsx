import { HTMLAttributes, ReactNode } from "react";
import { Container } from "./index.style";

interface TLayoutProps extends HTMLAttributes<HTMLDivElement> {
  padding?: string;
  children: ReactNode;
}

function Layout({ padding, children, ...props }: TLayoutProps) {
  return (
    <Container padding={padding} {...props}>
      {children}
    </Container>
  );
}

export default Layout;
