import { useNavigate } from "react-router-dom";

function TermsAgreement() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() =>
          navigate("/signup/email", {
            state: { isAgree: true },
          })
        }
      >
        동의하고 계속하기
      </button>
    </div>
  );
}

export default TermsAgreement;
