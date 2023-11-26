import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { inquiryFetcher } from "src/api/inquiry/fetcher";
import { mapFetcher } from "src/api/map/fetcher";
import BottomSheet from "src/components/bottomSheet";
import TextField from "src/components/textField";
import { IHospitalDetailInfo } from "src/interfaces/map";
import theme from "src/lib/theme";
import { convertWeekDay } from "src/utils/appointment";
import { AppointmentTag } from "../tags";
import * as Styled from "./index.style";

const statusMap = {
  OPEN: "진료중",
  CLOSED: "진료마감",
  UNKNOWN: "정보없음",
} as const;
const scheduleMap = {
  Mon: "월요일",
  Tue: "화요일",
  Wed: "수요일",
  Thu: "목요일",
  Fri: "금요일",
  Sat: "토요일",
  Sun: "일요일",
  lunch: "점심시간",
} as const;

type TScheduleDay = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

const HospitalDetail = ({ selectedHospital }: { selectedHospital: string }) => {
  const { data, isFetching, isSuccess } = useQuery<IHospitalDetailInfo, AxiosError>({
    queryKey: ["appointment", "map", selectedHospital],
    queryFn: () => mapFetcher.getMapDetail(selectedHospital),
    staleTime: Infinity,
  });

  const [isOpenSchedule, setIsOpenSchedule] = useState<boolean>(false);
  const [isEditInfo, setIsEditInfo] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>("");

  const { mutate: postInquiry } = useMutation({
    mutationFn: () =>
      inquiryFetcher.postInquiry({
        hospitalId: data?.id ?? "",
        hospitalName: data?.name ?? "",
        inquiryType: "INFO_UPDATE_INQUIRY",
        inquiryContent: editText,
      }),
    onSuccess() {
      setIsEditInfo(false);
      setEditText("");
    },
  });

  const renderSchedule = () => {
    if (!data) {
      return [];
    }

    const scheduleArr = [] as { day: string; time: string }[];

    for (const key in data.schedule) {
      const scheduleKey = key as TScheduleDay;

      if (data.schedule[scheduleKey].start === "" && data.schedule[scheduleKey].end === "") {
        continue;
      }

      scheduleArr.push({
        day: scheduleMap[scheduleKey],
        time: `${data.schedule[scheduleKey].start} ~ ${data.schedule[scheduleKey].end}`,
      });
    }

    return scheduleArr;
  };

  return (
    <>
      <Styled.Container>
        {!isFetching && isSuccess && (
          <>
            <Styled.ContentContainer direction="column" gap={1} align="flex-start">
              <Styled.Flex gap={1} align="flex-end" justify="flex-start">
                <Styled.Title>{data.name}</Styled.Title>
                <Styled.Description color={theme.color.grey_400} style={{ whiteSpace: "nowrap" }}>
                  {data.type} | {data.meToHospitalDistance}
                </Styled.Description>
              </Styled.Flex>

              {data.address && (
                <Styled.Flex gap={0.6} align="flex-start" justify="flex-start">
                  <img alt="position" src="/images/doctorAppointment/detail-position.svg" />
                  <Styled.Description color={theme.color.grey_300}>{data.address}</Styled.Description>
                </Styled.Flex>
              )}

              <Styled.Flex gap={0.6} align="flex-start">
                <img alt="position" src="/images/doctorAppointment/detail-time.svg" />
                <Styled.Flex direction="column" align="flex-start">
                  <Styled.Flex justify="flex-start">
                    <Styled.Description color={theme.color.grey_300}>
                      <span style={{ color: data.operatingStatus === "OPEN" ? theme.color.green : theme.color.grey_600 }}>
                        {statusMap[data.operatingStatus]}
                      </span>
                      {data.operatingStatus !== "UNKNOWN" &&
                        ` ・ ${data.schedule[convertWeekDay()].start ?? "00:00"} ~ ${data.schedule[convertWeekDay()].end ?? "00:00"}`}
                    </Styled.Description>
                    <img
                      alt="dropdown"
                      src="/images/doctorAppointment/chevron-down.svg"
                      style={{ marginLeft: "0.2rem", transform: `rotate(${isOpenSchedule ? "180deg" : "0"})` }}
                      onClick={() => setIsOpenSchedule(!isOpenSchedule)}
                    />
                  </Styled.Flex>
                  {isOpenSchedule &&
                    renderSchedule().map((schedule, idx) => (
                      <Styled.Description key={schedule.day} color={theme.color.grey_300}>
                        <p
                          style={{
                            color: idx === renderSchedule().length - 1 ? theme.color.sub_blue : theme.color.grey_300,
                            display: "inline",
                          }}
                        >
                          {schedule.day}
                        </p>{" "}
                        | {schedule.time}
                      </Styled.Description>
                    ))}
                </Styled.Flex>
              </Styled.Flex>

              {data.homepage && (
                <Styled.Flex gap={0.6} align="flex-start" justify="flex-start">
                  <img alt="position" src="/images/doctorAppointment/detail-site.svg" />
                  <a href={data.homepage} target="_blank" rel="noreferrer">
                    <Styled.Description color={theme.color.grey_300} style={{ textDecoration: "underline" }}>
                      {data.homepage}
                    </Styled.Description>
                  </a>
                </Styled.Flex>
              )}

              {data.phoneNumber && (
                <Styled.Flex gap={0.6} align="flex-start" justify="flex-start">
                  <img alt="position" src="/images/doctorAppointment/detail-phone.svg" />
                  <Styled.Description color={theme.color.grey_300}>{data.phoneNumber}</Styled.Description>
                </Styled.Flex>
              )}

              <Styled.Button
                {...(!data.phoneNumber && { style: { backgroundColor: theme.color.grey_650, color: theme.color.grey_500 } })}
                onClick={() => {
                  if (data.phoneNumber) {
                    location.href = `tel:${data.phoneNumber}`;
                  }
                }}
              >
                전화로 병원 예약하기
              </Styled.Button>
            </Styled.ContentContainer>

            {data.parkingSpace && Number(data.parkingSpace) !== 0 && (
              <>
                <Styled.Line />
                <Styled.ContentContainer direction="column" align="flex-start">
                  <Styled.SubTitle color={theme.color.grey_300}>주차 정보</Styled.SubTitle>
                  <div style={{ height: "1rem" }} />
                  <Styled.TagContainer>
                    {Number(data.parkingSpace) !== 0 && (
                      <>
                        <AppointmentTag>주차장 있음</AppointmentTag>
                        <AppointmentTag>주차가능대수 : {data.parkingSpace}</AppointmentTag>
                      </>
                    )}
                  </Styled.TagContainer>
                </Styled.ContentContainer>
              </>
            )}

            <Styled.Line />
            <Styled.ContentContainer direction="column" align="flex-start">
              <Styled.SubTitle color={theme.color.grey_300}>진료 정보</Styled.SubTitle>
              <div style={{ height: "1.2rem" }} />
              <Styled.Flex gap={2} direction="column" align="flex-start">
                {data.department.length !== 0 && (
                  <div>
                    <Styled.Description color={theme.color.grey_300}>진료 과목</Styled.Description>
                    <Styled.TagContainer>
                      {data.department.map((part, idx) => (
                        <AppointmentTag key={idx}>{part.name}</AppointmentTag>
                      ))}
                    </Styled.TagContainer>
                  </div>
                )}

                <div>
                  <Styled.Description color={theme.color.grey_300}>진료 과목별 전문의 정보</Styled.Description>
                  <Styled.Table>
                    <thead>
                      <tr>
                        <th>
                          <Styled.Description color={theme.color.grey_300}>진료 과목명</Styled.Description>
                        </th>
                        <th>
                          <Styled.Description color={theme.color.grey_300}>전문의 수</Styled.Description>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.department.map((part, idx) => (
                        <tr key={idx}>
                          <td>
                            <Styled.Description color={theme.color.grey_400}>{part.name}</Styled.Description>
                          </td>
                          <td>
                            <Styled.Description color={theme.color.grey_400}>{part.count}</Styled.Description>
                          </td>
                        </tr>
                      ))}
                      {data.department.length === 0 && (
                        <tr>
                          <td>
                            <Styled.Description color={theme.color.grey_400}>-</Styled.Description>
                          </td>
                          <td>
                            <Styled.Description color={theme.color.grey_400}>-</Styled.Description>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Styled.Table>
                </div>

                {data.equipment.length !== 0 && (
                  <div>
                    <Styled.Description color={theme.color.grey_300}>의료 장비</Styled.Description>
                    <Styled.TagContainer>
                      {data.equipment.map((part, idx) => (
                        <AppointmentTag key={idx}>{part.name}</AppointmentTag>
                      ))}
                    </Styled.TagContainer>
                  </div>
                )}

                {data.specialTreatment.length !== 0 && (
                  <div>
                    <Styled.Description color={theme.color.grey_300}>특수 진료 목록</Styled.Description>
                    <Styled.TagContainer>
                      {data.specialTreatment.map((part, idx) => (
                        <AppointmentTag key={idx}>{part.name}</AppointmentTag>
                      ))}
                    </Styled.TagContainer>
                  </div>
                )}

                <div>
                  <Styled.Description color={theme.color.grey_300}>우수기관 평가 정보</Styled.Description>
                  <Styled.Table>
                    <thead>
                      <tr>
                        <th>
                          <Styled.Description color={theme.color.grey_300}>평가항목</Styled.Description>
                        </th>
                        <th>
                          <Styled.Description color={theme.color.grey_300}>평가정보</Styled.Description>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.excellentAgency.map((part, idx) => (
                        <tr key={idx}>
                          <td>
                            <Styled.Description color={theme.color.grey_400}>{part.name}</Styled.Description>
                          </td>
                          <td>
                            <Styled.Description color={theme.color.grey_400}>{part.grade} 우수기관</Styled.Description>
                          </td>
                        </tr>
                      ))}
                      {data.excellentAgency.length === 0 && (
                        <tr>
                          <td>
                            <Styled.Description color={theme.color.grey_400}>-</Styled.Description>
                          </td>
                          <td>
                            <Styled.Description color={theme.color.grey_400}>-</Styled.Description>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Styled.Table>
                </div>
              </Styled.Flex>

              <Styled.SubDescription style={{ marginTop: "1.2rem" }}>
                헬시어에서 제공하는 정보는 건강보험심사평가원, 국민건강보험공단의 의료빅데이터 정보를 기반으로 작성되었습니다.
              </Styled.SubDescription>
            </Styled.ContentContainer>

            <Styled.Line />
            <Styled.ContentContainer direction="column" align="flex-start">
              <Styled.Flex justify="space-between" style={{ width: "100%" }}>
                <Styled.Description color={theme.color.grey_200}>위 정보 중 잘못 작성된 내용이 있나요?</Styled.Description>
                <Styled.EditButton onClick={() => setIsEditInfo(true)}>수정 요청하기</Styled.EditButton>
              </Styled.Flex>
            </Styled.ContentContainer>
          </>
        )}
      </Styled.Container>

      <BottomSheet
        background="rgba(0,0,0,0.6)"
        onClickOverlay={() => {
          setIsEditInfo(false);
          setEditText("");
        }}
        isBottomSheetOpen={isEditInfo}
        style={{ zIndex: 20000 }}
      >
        <Styled.EditSheet>
          <Styled.EditTitle>정보 수정 요청하기</Styled.EditTitle>
          <Styled.Description color={theme.color.grey_500} style={{ width: "100%" }}>
            헬시어의 정보 중 수정할 내용이 있다면 제보해주세요
          </Styled.Description>
          <Styled.HospitalTitle>
            병원 이름<span style={{ color: theme.color.grey_600, margin: "0 1rem" }}>|</span>
            <span style={{ color: theme.color.grey_200 }}>{data?.name}</span>
          </Styled.HospitalTitle>
          <TextField
            placeholder="예시)&#13;진료 시간이 달라요.&#13;수요일은 오후 6시가 아니라 오후 9시까지 진료해요."
            value={editText}
            setValue={(val) => {
              if (val.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length > 100) {
                return;
              }
              setEditText(val);
            }}
            bottomText={`${editText.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length} / 100`}
          />
          <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
            <Styled.Button
              onClick={() => {
                if (editText) {
                  postInquiry();
                }
              }}
              borderRadius={5}
              {...(!editText && {
                backgroundColor: theme.color.grey_650,
                color: theme.color.grey_500,
              })}
            >
              수정 요청하기
            </Styled.Button>
          </div>
        </Styled.EditSheet>
      </BottomSheet>
    </>
  );
};

export default HospitalDetail;
