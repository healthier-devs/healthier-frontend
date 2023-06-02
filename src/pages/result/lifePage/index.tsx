import LifeComponent from "../lifeComponent";
import Title from "src/components/title";
import { ILifeProps } from "src/interfaces/resultPage";
import preventionTypes from "src/data/prevention_types";
import { Container } from "./index.style";

const LifePage = ({ lifestyle, type }: { lifestyle: ILifeProps[]; type: string | number }) => {
  return (
    <Container>
      <section className="title-box">
        <Title text={`생활습관으로\n증상을 ${typeof type === "string" && preventionTypes.includes(type) ? "예방" : "개선"}해보아요`} />
      </section>
      {lifestyle.map((life, idx) => (
        <LifeComponent key={idx} idx={idx} icon={life.emoji} title={life.title} content={life.detail} />
      ))}
    </Container>
  );
};

export default LifePage;
