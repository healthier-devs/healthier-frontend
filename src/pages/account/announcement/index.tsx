import moment from "moment";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useGetAnnouncements } from "src/hooks/mypage/useGetAnnouncements";
import { IAnnouncementResponse } from "src/interfaces/mypage";
import * as Styled from "./index.style";

const AnnouncementItem = ({ id, title, date }: { id: number; title: string; date: string }) => {
  const navigate = useNavigate();

  return (
    <Styled.AnnouncementItem onClick={() => navigate(`/account/announcement/${id}`)}>
      <div className="mainTitle">{title}</div>
      <div className="dateText">{moment(date).format("YYYY. MM. DD")}</div>
    </Styled.AnnouncementItem>
  );
};

const AccountAnnouncement = () => {
  const [ref, inView] = useInView();
  const [announcements, setAnnouncements] = useState<IAnnouncementResponse[]>([]);
  const [pageInfo, setPageInfo] = useState({ page: 0, size: 15 });
  const { isLoading, announcementData } = useGetAnnouncements({
    pageInfo,
  });

  useEffect(() => {
    if (inView) {
      setPageInfo({ ...pageInfo, page: pageInfo.page + 1 });
    }
  }, [inView]);

  useEffect(() => {
    console.log(announcementData);
    if (announcementData) {
      setAnnouncements((prev) => [...prev, ...announcementData.data]);
    }
  }, [announcementData]);

  return isLoading || !announcementData ? (
    <></>
  ) : (
    <Styled.Container>
      {/* 15 announcement per load */}
      {announcements.map((data: IAnnouncementResponse) => (
        <AnnouncementItem key={data.id} id={data.id} title={data.title} date={data.modifiedAt} />
      ))}
      {announcementData.data.length !== 0 && <Styled.ObservedDiv ref={ref} />}
    </Styled.Container>
  );
};

export default AccountAnnouncement;
