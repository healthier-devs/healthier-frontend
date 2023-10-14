import { AxiosError } from "axios";
import { forwardRef } from "react";
import { Auth } from "src/api/auth";
import LoginModal from "src/components/loginModal";
import { IKakaoToken, IMainModal } from "src/interfaces/modal";
import { useAppDispatch } from "src/state";
import { Title } from "./index.style";

const Kakao = (window as any).Kakao;

const MainModal = forwardRef<HTMLDivElement, IMainModal>(function MainModal({ closeModal }, ref) {
  const dispatch = useAppDispatch();

  const kakaoLogin = () => {
    Kakao.Auth.login({
      scope: "account_email",
      success: async function (resToken: IKakaoToken) {
        try {
          const headers = await Auth.login(resToken.access_token);
          const token = headers.authorization.slice(7);
        } catch (error) {
          if ((error as AxiosError).code === "ERR_BAD_REQUEST") {
            alert("이메일 사용 동의가 필요합니다");
          } else {
            alert("내부 서버 오류, 다시 시도해주세요");
          }
        } finally {
          closeModal();
        }
      },
      fail: function () {
        alert("로그인 에러, 다시 시도해주세요");
      },
    });
  };

  return (
    <LoginModal
      ref={ref}
      title={
        <Title>
          로그인을 하면
          <br />
          <span className="highlight">나의 건강기록장</span>을 이용할 수 있어요
        </Title>
      }
      continueText="괜찮아요, 비회원으로 이용할게요"
      handleLogin={kakaoLogin}
      handleContinue={closeModal}
      closeModal={closeModal}
    />
  );
});

export default MainModal;
