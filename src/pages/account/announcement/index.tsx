import moment from "moment";
import { useEffect, useState } from "react";
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
  const { isLoading, announcementData } = useGetAnnouncements();

  return isLoading || !announcementData ? (
    <></>
  ) : (
    <Styled.Container>
      {/* 15 announcement per load */}
      {announcementData.data.map((data: IAnnouncementResponse) => (
        <AnnouncementItem key={data.id} id={data.id} title={data.title} date={data.modifiedAt} />
      ))}
    </Styled.Container>
  );
};

export default AccountAnnouncement;
