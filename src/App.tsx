import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";
import * as Pages from "./pages";
import { handleResizeWindow } from "./utils/window";

function App() {
  const { reset } = useQueryErrorResetBoundary();

  useEffect(() => {
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useGoogleAnalytics();

  return (
    <Main>
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
            <Route path="/signup" element={<Pages.SignUp />} />
            <Route path="/qr" element={<Pages.IndexQR />} />
            <Route path="/qr/info" element={<Pages.InformationQR />} />
            <Route path="/qr/symptom-type" element={<Pages.SymptomTypeQR />} />
            <Route path="/qr/complete" element={<Pages.CompleteQR />} />
            <Route path="/test" element={<Pages.Test />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </ErrorBoundary>
      </Container>
    </Main>
  );
}

export default App;

const Main = styled.main`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);

  display: flex;
  flex: 1;
  flex-shrink: 0;
  justify-content: center;
  align-items: flex-start;

  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none !important;
  }
`;

const Container = styled.div`
  width: 100vw;
  @media (min-width: 500px) {
    width: calc(var(--vw, 1vw) * 100);
  }

  height: 100%;
`;
