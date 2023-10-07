import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";
import * as Pages from "./pages";
import { useAppDispatch } from "./state";
import { clearHospitalId } from "./state/diagnoseSlice";
import { handleResizeWindow } from "./utils/window";

function App() {
  const dispatch = useAppDispatch();
  const { reset } = useQueryErrorResetBoundary();

  useEffect(() => {
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    dispatch(clearHospitalId());
  }, [dispatch]);

  useGoogleAnalytics();

  return (
    <Container>
      <ErrorBoundary FallbackComponent={Pages.Error} onReset={reset}>
        <Routes>
          <Route path="/" element={<Pages.MainPage />} />
          <Route path="/info" element={<Pages.Information />} />
          <Route path="/result-list" element={<Pages.DiagnosisList />} />
          <Route path="/result" element={<Pages.ResultPage />} />
          <Route path="/diagnosis" element={<Pages.Diagnosis />} />
          <Route path="/symptom" element={<Pages.SymptomPage />} />
          <Route path="/symptom-type" element={<Pages.SymptomTypePage />} />
          <Route path="/appointment" element={<Pages.Appointment />} />

          <Route path="/signup" element={<Pages.SignUp />}>
            <Route index element={<Navigate to="/signup/agreement" replace />} />
            <Route path="/signup/agreement" element={<Pages.TermsAgreement />} />
            <Route path="/signup/email" element={<Pages.Email />} />
            <Route path="/signup/password" element={<Pages.Password />} />
          </Route>
          <Route path="/signup/complete" element={<Pages.SignUpComplete />} />
          <Route path="/signup/error" element={<Pages.SignUpError />} />

          <Route path="/account" element={<Pages.Account />}>
            <Route index element={<Pages.AccountIndex />} />
          </Route>

          <Route path="/login" element={<Pages.Login />} />

          <Route path="/qr" element={<Pages.IndexQR />} />
          <Route path="/qr/info" element={<Pages.InformationQR />} />
          <Route path="/qr/symptom-type" element={<Pages.SymptomTypeQR />} />
          <Route path="/qr/complete" element={<Pages.CompleteQR />} />
          <Route path="/challenge/stamp/:id" element={<Pages.ChallengeStamp />} />
          <Route path="/challenge-list" element={<Pages.ChallengeList />} />
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
