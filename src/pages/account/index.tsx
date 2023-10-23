import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Layout from "src/components/layout";

const headerMap = {
  account: "마이페이지",
  announcement: "공지 사항",
  settings: "환경 설정",
  edit: "프로필 수정",
} as const;

type TPath = keyof typeof headerMap;

function Account() {
  const pathSegments = window.location.pathname.split("/").filter((segment) => segment);
  let path;

  if (pathSegments.length % 2 === 0) {
    // If even, take the last segment
    path = pathSegments[pathSegments.length - 1];
  } else {
    // If odd, take the second last segment (ignoring the ID)
    path = pathSegments[pathSegments.length - 2];
  }

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
