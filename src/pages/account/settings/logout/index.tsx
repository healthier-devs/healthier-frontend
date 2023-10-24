import { ChevronRightIcon } from "src/assets/icons/ChevronRightIcon";
import Dialog from "src/components/dialog";
import FlexBox from "src/components/flexBox";
import { useLogout } from "src/hooks/account/useLogout";
import useModal from "src/hooks/useModal";
import theme from "src/lib/theme";
import * as Styled from "../index.style";

function Logout() {
  const { modalRef, isOpenModal, openModal, closeModal } = useModal();
  const { logout } = useLogout();

  return (
    <>
      {isOpenModal && (
        <Dialog
          ref={modalRef}
          title="로그아웃 하시겠습니까?"
          description="정말 로그아웃 하시겠습니까?"
          onClickCancel={closeModal}
          onClickConfirm={() => {
            closeModal();
            logout();
          }}
          onClickBackDrop={closeModal}
        />
      )}
      <Styled.Box mb="1.8rem">
        <FlexBox alignItems="center" justifyContent="space-between" className="click" onClick={openModal}>
          <Styled.Typography className="title-2">로그아웃</Styled.Typography>
          <ChevronRightIcon stroke={theme.color.grey_500} strokeWidth={2} width={24} height={24} />
        </FlexBox>
      </Styled.Box>
    </>
  );
}

export default Logout;
