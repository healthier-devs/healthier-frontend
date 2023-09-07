import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Dialog from "src/components/diaglog";
import Layout from "src/components/layout";

function SignUp() {
  const [isDialogOpen, setIsDialogOpen] = useState({
    back: false,
    exit: false,
  });
  const navigate = useNavigate();
  const [path] = window.location.pathname.split("/").slice(-1);

  const closeDialog = () => {
    setIsDialogOpen({ back: false, exit: false });
  };

  const handleClickBackButton = () => {
    if (path === "password") {
      navigate(-1);

      return;
    }

    setIsDialogOpen({ ...isDialogOpen, back: true });
  };

  return (
    <>
      {isDialogOpen.back && (
        <Dialog
          title="이전 화면으로 돌아가시겠어요?"
          description="돌아가면 약관동의부터 다시 시작돼요."
          onClickBackDrop={closeDialog}
          onClickCancel={closeDialog}
          onClickConfirm={() => {
            closeDialog();
            navigate("/signup");
          }}
        />
      )}
      {isDialogOpen.exit && (
        <Dialog
          title="회원가입을 중단하실건가요?"
          description="진행 중인 내용은 저장되지 않습니다."
          onClickBackDrop={closeDialog}
          onClickCancel={closeDialog}
          onClickConfirm={() => {
            closeDialog();
            navigate("/");
          }}
        />
      )}
      <ContentHeader
        back
        exit
        backCallback={handleClickBackButton}
        exitCallback={() => {
          setIsDialogOpen({ ...isDialogOpen, exit: true });
        }}
      ></ContentHeader>
      <Layout style={{ width: "inherit" }}>
        <Outlet />
      </Layout>
    </>
  );
}

export default SignUp;
