import { useRef } from "react";
import Layout from "src/components/layout";
import MainHeader from "src/components/mainHeader";
import NavigationBar from "src/components/navigationBar";
import { useAppSelector } from "src/state";
// import Advertisement from "./advertisement";
import Challenges from "./challenges";
import DiagnosisHistory from "./diagnosis-history";
import Hospitals from "./hospitals";
import Symptoms from "./symptoms";

function Main() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { authenticated } = useAppSelector((state) => state.auth);

  return (
    <>
      <MainHeader onClickLogo={() => mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })} />
      <Layout padding="5.6rem 0 12rem" ref={mainRef}>
        {/* <Advertisement /> */}
        <Symptoms authenticated={authenticated} />
        <Hospitals />
        <Challenges authenticated={authenticated} />
        <DiagnosisHistory authenticated={authenticated} />
      </Layout>
      <NavigationBar menu="home" />
    </>
  );
}

export default Main;
