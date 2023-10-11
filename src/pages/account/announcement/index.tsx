import moment from "moment";
import { useNavigate } from "react-router-dom";
import * as Styled from "./index.style";

const AnnouncementItem = ({ id, title, date }: { id: string; title: string; date: string }) => {
  const navigate = useNavigate();

  return (
    <Styled.AnnouncementItem onClick={() => navigate(-1)}>
      <div className="mainTitle">{title}</div>
      <div className="dateText">{moment(date).format("YYYY. MM. DD")}</div>
    </Styled.AnnouncementItem>
  );
};

const AccountAnnouncement = () => {
  return (
    <Styled.Container>
      <AnnouncementItem id="1" title="[이벤트] 건강챌린지 100% 달성자 룰렛 이벤트" date={new Date().toString()} />
      <AnnouncementItem id="1" title="[이벤트] 건강챌린지 100% 달성자 룰렛 이벤트" date={new Date().toString()} />
      <AnnouncementItem id="1" title="[이벤트] 건강챌린지 100% 달성자 룰렛 이벤트" date={new Date().toString()} />
    </Styled.Container>
  );
};

export default AccountAnnouncement;
