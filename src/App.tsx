import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { useAutoLogin } from "./hooks/account/useAutoLogin";
import { useFCMToken } from "./hooks/account/useFCMToken";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";
import * as Pages from "./pages";
import { getCookie } from "./utils/cookies";
import { handleResizeWindow } from "./utils/window";

function App() {
  const { reset } = useQueryErrorResetBoundary();
  const accessToken = getCookie("accessToken");

  useGoogleAnalytics();
  useAutoLogin(accessToken);
  useFCMToken();

  useEffect(() => {
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <Container>
      <ErrorBoundary FallbackComponent={Pages.Error} onReset={reset}>
        <Routes>
          <Route path="/" element={<Pages.Main />} />
          <Route path="/info" element={<Pages.Information />} />
          <Route path="/result-list" element={<Pages.DiagnosisList />} />
          <Route path="/result" element={<Pages.ResultPage />} />
          <Route path="/diagnosis" element={<Pages.Diagnosis />} />
          <Route path="/symptom" element={<Pages.SymptomPage />} />
          <Route path="/symptom-onboard" element={<Pages.SymptomOnboard />} />
          <Route path="/collect-symptom" element={<Pages.CollectInformation />} />
          <Route path="/symptom-type" element={<Pages.SymptomTypePage />} />
          <Route path="/appointment" element={<Pages.Appointment />} />
          <Route path="/onboard" element={<Pages.Onboard />} />

          <Route path="/signup" element={<Pages.SignUp />}>
            <Route index element={<Navigate to="/signup/step1" replace />} />
            <Route path="/signup/step1" element={<Pages.TermsAgreement />} />
            <Route path="/signup/step2" element={<Pages.Email />} />
            <Route path="/signup/step3" element={<Pages.Password />} />
            <Route path="/signup/step4" element={<Pages.SignUpAdditionalInformation />} />
          </Route>
          <Route path="/signup/complete" element={<Pages.SignUpComplete />} />
          <Route path="/signup/error" element={<Pages.SignUpError />} />
          <Route path="/signup/authorization" element={<Pages.Authorization />} />

          <Route path="/account" element={<Pages.Account />}>
            <Route index element={<Pages.AccountIndex />} />
            <Route path="/account/announcement" element={<Pages.AccountAnnouncement />} />
            <Route path="/account/diagRecord" element={<Pages.DiagnoseRecord />} />
            <Route path="/account/reward" element={<Pages.Reward />} />
            <Route path="/account/announcement/:id" element={<Pages.AnnouncementDetail />} />
            <Route path="/account/inquiry" element={<Pages.Inquiry />} />
            <Route path="/account/settings" element={<Pages.AccountSettings />} />
            <Route path="/account/edit" element={<Pages.AccountEdit />} />
            <Route path="/account/edit/password" element={<Pages.AccountResetPassword />} />
            <Route path="/account/healthInfoModify" element={<Pages.ModifyInformation />} />
            <Route path="/account/signout" element={<Pages.SignOut />} />
          </Route>

          <Route path="/login" element={<Pages.Login />} />

          <Route path="/qr" element={<Pages.IndexQR />} />
          <Route path="/qr/info" element={<Pages.InformationQR />} />
          <Route path="/qr/symptom-type" element={<Pages.SymptomTypeQR />} />
          <Route path="/qr/complete" element={<Pages.CompleteQR />} />
          <Route path="/challenge/stamp/:id" element={<Pages.ChallengeStamp />} />
          <Route path="/challenge-list" element={<Pages.ChallengeList />} />
          <Route path="/challenge/reward" element={<Pages.Reward />} />
          <Route path="/challenge/reward/list" element={<Pages.RewardList />} />
          <Route path="/challenge/reward/reception" element={<Pages.RewardReception />} />
          <Route path="/challenge/reward/information" element={<Pages.RewardInformation />} />
          <Route path="/challenge/:id" element={<Pages.ChallengeDetail />} />
          <Route path="/my-challenge" element={<Pages.MyChallenge />} />
          <Route path="/test" element={<Pages.Test />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </ErrorBoundary>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  @media (min-width: 500px) {
    width: calc(var(--vw, 1vw) * 100);
  }

  height: 100%;
  margin: 0 auto;
`;
