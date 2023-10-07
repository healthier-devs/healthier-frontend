import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";

const headerMap = {
  account: "마이페이지",
  announcement: "공지 사항",
  settings: "환경 설정",
} as const;

type TPath = keyof typeof headerMap;

function Account() {
  const [path] = window.location.pathname.split("/").slice(-1);
  const navigate = useNavigate();

  return (
    <>
      <ContentHeader back backCallback={() => navigate(-1)} exit={false} label={headerMap[path as TPath]} />
      <Layout style={{ width: "inherit" }}>
        <Outlet />
      </Layout>
    </>
  );
}

export default Account;
