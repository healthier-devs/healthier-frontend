import moment from "moment";
import { useParams } from "react-router-dom";
import { useGetAnnouncementById } from "src/hooks/mypage/useGetAnnouncementById";
import * as Styled from "./index.style";

const highlightText = (line: string) => {
  if (line.includes("^")) {
    const frame = line.split("^").map((part, pIndex) => {
      if (pIndex === 1) {
        return <Styled.HighlightedText key={pIndex}>{part}</Styled.HighlightedText>;
      } else {
        return <>{part}</>;
      }
    });

    return frame;
  } else {
    return (
      <>
        {line}
        <br />
      </>
    );
  }
};

const processText = (text?: string) => {
  const output: React.ReactNode[] = [];

  if (typeof text !== "string") {
    return output;
  }

  const lines = text.split("&");

  const newLine = lines.map((line, lIndex) => {
    if (lIndex % 2 === 1) {
      return (
        <ul key={`lLine-${lIndex}`}>
          {line.split("\n").map((item, index) => (
            <Styled.NumList key={`line-${index}`}>{highlightText(item)}</Styled.NumList>
          ))}
        </ul>
      );
    } else if (line.includes("%")) {
      const dotLine = line.split("%");

      return dotLine.map((dotItem, dIndex) => {
        if (dIndex % 2 === 1) {
          return dotItem.split("\n").map((item, index) => <Styled.DotList key={`line-${index}`}>{highlightText(item)}</Styled.DotList>);
        } else {
          return dotItem.split("\n").map((item) => highlightText(item));
        }
      });
    }

    return line.split("\n").map((item) => highlightText(item));
  });

  output.push(newLine);

  return output;
};

const AnnouncementDetail = () => {
  const { id = "" }: { id?: string } = useParams();

  const { isLoading, announcementData } = useGetAnnouncementById(id);

  return isLoading || !announcementData ? (
    <></>
  ) : (
    <Styled.Container>
      <Styled.TitleSection>
        <div className="titleText">{announcementData.title}</div>
        <div className="dateText">{moment(announcementData.modifiedAt).format("YYYY. MM. DD.")}</div>
      </Styled.TitleSection>
      <Styled.ContentSection>{processText(announcementData.content)}</Styled.ContentSection>
    </Styled.Container>
  );
};

export default AnnouncementDetail;
