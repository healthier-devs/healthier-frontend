import { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { Container } from "./index.style";

interface TLayoutProps extends HTMLAttributes<HTMLDivElement> {
  padding?: string;
  children: ReactNode;
}

const Layout = forwardRef<HTMLDivElement, TLayoutProps>(function Layout({ padding, children, ...props }, ref) {
  return (
    <Container padding={padding} {...props} ref={ref}>
      {children}
    </Container>
  );
});

export default Layout;
