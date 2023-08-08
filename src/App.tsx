import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";
import {
  Diagnosis,
  MyDiagnosis,
  Information,
  MainPage,
  ResultPage,
  SymptomPage,
  SymptomTypePage,
  DiagnosisList,
  SignUp,
  Appointment,
  Error,
  Test,
  InformationQR,
  SymptomTypeQR,
  CompleteQR,
  IndexQR,
} from "./pages";
import { useAppSelector } from "./state";

const handleResize = () => {
  const screenRatio = 0.7;
  const vh = window.innerHeight * 0.01;
  const vw = Math.min(window.innerWidth * 0.01, vh * screenRatio);

  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};

function App() {
  const { authenticated } = useAppSelector((state) => state.auth);
  const { reset } = useQueryErrorResetBoundary();

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGoogleAnalytics();

  return (
    <Main>
      <Container>
        <ErrorBoundary FallbackComponent={Error} onReset={reset}>
          <Routes>
            <Route path="/" element={authenticated ? <MyDiagnosis /> : <MainPage />} />
            <Route path="/info" element={<Information />} />
            <Route path="/result-list" element={<DiagnosisList />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
            <Route path="/symptom" element={<SymptomPage />} />
            <Route path="/symptom-type" element={<SymptomTypePage />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/qr" element={<IndexQR />} />
            <Route path="/qr/info" element={<InformationQR />} />
            <Route path="/qr/symptom-type" element={<SymptomTypeQR />} />
            <Route path="/qr/complete" element={<CompleteQR />} />
            <Route path="/test" element={<Test />} />
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
