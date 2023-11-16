import React from "react";
import * as Styled from "../index.style";

export const highlightText = (line: string) => {
  const parts = line.split("^");

  return parts.map((part, pIndex) => {
    if (pIndex % 2 === 1) {
      return <Styled.Highlighted key={pIndex}>{part}</Styled.Highlighted>;
    } else {
      return part;
    }
  });
};

export const processText = (text?: string) => {
  const output: React.ReactNode[] = [];

  if (typeof text !== "string") {
    return output;
  }

  const sections = text.split("%");

  sections.forEach((section) => {
    if (section.includes("&")) {
      const listItems = section.split("&")[1].split("\n");
      const frame = (
        <Styled.Frame key={section} mb="1.2rem" px="1.6rem">
          {listItems.map((item, index) => {
            if (item.includes("$")) {
              const parts = item.split("$");

              return (
                <Styled.FrameText key={index} color="200" lineHeight="180%" fontSize="1.4rem" fontWeight="200">
                  {parts.map((part, pIndex) => {
                    if (pIndex % 2 === 1) {
                      return <Styled.SubText key={pIndex}>{part}</Styled.SubText>;
                    } else {
                      return part;
                    }
                  })}
                </Styled.FrameText>
              );
            }

            return (
              <Styled.FrameText key={index} color="200" lineHeight="180%" fontSize="1.4rem" fontWeight="200">
                {item.split("^").map((part, pIndex) => {
                  if (pIndex % 2 === 1) {
                    return <Styled.Highlighted key={pIndex}>{part}</Styled.Highlighted>;
                  } else {
                    return part;
                  }
                })}
              </Styled.FrameText>
            );
          })}
        </Styled.Frame>
      );

      output.push(frame);
    } else {
      const lines = section.split("\n");
      const typography = (
        <Styled.Typography key={section} lineHeight="160%" color="300" mb="1.2rem">
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              {highlightText(line)}
              {index !== lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Styled.Typography>
      );

      output.push(typography);
    }
  });

  return output;
};
