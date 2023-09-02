import { Outlet } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";

function SignUp() {
  return (
    <>
      <ContentHeader back exit></ContentHeader>
      <Layout style={{ width: "inherit" }}>
        <Outlet />
      </Layout>
    </>
  );
}

export default SignUp;
