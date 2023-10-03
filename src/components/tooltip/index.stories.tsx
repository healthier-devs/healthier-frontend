import { Meta } from "@storybook/react";
import Tooltip from ".";

export default {
  component: Tooltip,
  title: "Tooltip",
  argTypes: {
    children: {
      description: "툴팁 텍스트",
    },
    position: {
      description: "화살표 위치",
    },
  },
} as Meta;

export const Default = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "white",
        padding: "100px",
      }}
    >
      <div style={{ position: "relative" }}>
        <div style={{ width: "86px", height: "86px", borderRadius: "50%", backgroundColor: "grey" }} />
        <Tooltip>부활티켓을 사용해보세요</Tooltip>
      </div>
    </div>
  );
};

export const CenterTooltip = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "white",
        padding: "100px",
      }}
    >
      <div style={{ position: "relative" }}>
        <div style={{ width: "86px", height: "86px", borderRadius: "50%", backgroundColor: "grey" }} />
        <Tooltip position="center">부활티켓을 사용해보세요</Tooltip>
      </div>
    </div>
  );
};

export const RightTooltip = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "white",
        padding: "100px",
      }}
    >
      <div style={{ position: "relative" }}>
        <div style={{ width: "86px", height: "86px", borderRadius: "50%", backgroundColor: "grey" }} />
        <Tooltip position="right">부활티켓을 사용해보세요</Tooltip>
      </div>
    </div>
  );
};
