import { Outlet, useNavigate } from "react-router-dom";
import ContentHeader from "src/components/contentHeader";
import Dialog from "src/components/dialog";
import Layout from "src/components/layout";
import useModal from "src/hooks/useModal";

function SignUp() {
  const backDialog = useModal();
  const exitDialog = useModal();

  const navigate = useNavigate();
  const [path] = window.location.pathname.split("/").slice(-1);

  const handleClickBackButton = () => {
    if (path === "password") {
      navigate(-1);

      return;
    }

    backDialog.openModal();
  };

  return (
    <>
      {backDialog.isOpenModal && (
        <Dialog
          ref={backDialog.modalRef}
          title="이전 화면으로 돌아가시겠어요?"
          description="돌아가면 약관동의부터 다시 시작돼요."
          onClickCancel={backDialog.closeModal}
          onClickConfirm={() => {
            backDialog.closeModal();
            navigate("/signup");
          }}
        />
      )}
      {exitDialog.isOpenModal && (
        <Dialog
          ref={backDialog.modalRef}
          title="회원가입을 중단하실건가요?"
          description="진행 중인 내용은 저장되지 않습니다."
          onClickCancel={backDialog.closeModal}
          onClickConfirm={() => {
            backDialog.closeModal();
            navigate("/");
          }}
        />
      )}
      <ContentHeader back exit backCallback={handleClickBackButton} exitCallback={backDialog.openModal}></ContentHeader>
      <Layout style={{ width: "inherit" }}>
        <Outlet />
      </Layout>
    </>
  );
}

export default SignUp;
