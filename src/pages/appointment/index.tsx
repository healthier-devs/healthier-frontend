import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { mapFetcher } from "src/api/map/fetcher";
import ChevronDownIcon from "src/assets/icons/ChevronDownIcon";
import BottomSheet from "src/components/bottomSheet";
import Loading from "src/components/loading";
import imageUrl from "src/data/image_url";
import { IUserMapResponse } from "src/interfaces/map";
import theme from "src/lib/theme";
import HospitalCard from "./card/HospitalCard";
import { emergencyNightData, partList } from "./data";
import HospitalDetail from "./hospitalDetail";
import * as Styled from "./index.style";
import Map from "./map";
import Search from "./search";
import { EmergencyNightTag } from "./tags";

const MAX_SEARCH_DATA = 60;
const SEARCH_UNIT = 15;

interface ISelectedFilter {
  emergencyNight: boolean;
  nightService: boolean;
}

const Appointment = () => {
  const { state } = useLocation();

  const [currentPosition, setCurrentPosition] = useState({
    lat: 0,
    lng: 0,
  });
  const [searchPosition, setSearchPosition] = useState({
    left: { lat: 0, lng: 0 },
    right: { lat: 0, lng: 0 },
  });
  const [isSettingPosition, setIsSettingPosition] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<ISelectedFilter>({ emergencyNight: false, nightService: false });
  const [selectedPart, setSelectedPart] = useState<string[]>(
    state ? partList.filter((part) => state.departments.includes(part)).slice(0, 3) : []
  );
  const [isSelectedMedicine, setIsSelectedMedicine] = useState<boolean>(false);
  const [selectedHospital, setSelectedHospital] = useState<string>("");
  const [mapSearchCount, setMapSearchCount] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(true);

  /* eslint "@tanstack/query/exhaustive-deps": 0 */
  const {
    data: mapData,
    isFetching: isFetchingMapData,
    isSuccess: isSuccessMapData,
    refetch: refetchMapData,
  } = useQuery<IUserMapResponse, AxiosError>({
    queryKey: ["appointment", "map"],
    queryFn: () =>
      mapFetcher.getUserMap({
        userLatitude: String(currentPosition.lat),
        userLongitude: String(currentPosition.lng),
        leftLatitude: String(searchPosition.left.lat),
        leftLongitude: String(searchPosition.left.lng),
        rightLatitude: String(searchPosition.right.lat),
        rightLongitude: String(searchPosition.right.lng),
        emergencyNight: selectedFilter.emergencyNight ? "Y" : "",
        nightService: selectedFilter.nightService ? "Y" : "",
        departments: selectedPart.filter(Boolean).join(","),
        isPharmacy: isSelectedMedicine,
        page: mapSearchCount,
        size: 15,
      }),
    staleTime: Infinity,
    enabled: isSettingPosition,
  });
  const { data: searchMapData, refetch: refetchSearchData } = useQuery<IUserMapResponse, AxiosError>({
    queryKey: ["appointment", "search", mapSearchCount],
    queryFn: () =>
      mapFetcher.getSearchMap({
        userLatitude: currentPosition.lat,
        userLongitude: currentPosition.lng,
        nameContaining: searchText,
        departments: [...selectedPart, ...[isSelectedMedicine ? "약국" : ""]].filter(Boolean).join(","),
        page: mapSearchCount,
        size: 15,
      }),
    staleTime: Infinity,
    enabled: false,
  });

  useEffect(() => {
    if (isSelectedMedicine) {
      setSelectedPart([]);
    }
  }, [isSelectedMedicine]);
  useEffect(() => {
    if (selectedPart.length > 0) {
      setIsSelectedMedicine(false);
    }
  }, [selectedPart]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const curLat = position.coords.latitude;
      const curLng = position.coords.longitude;

      setCurrentPosition({
        lat: curLat,
        lng: curLng,
      });
      setSearchPosition({
        left: { lat: curLat - 0.01, lng: curLng - 0.01 },
        right: { lat: curLat + 0.01, lng: curLng + 0.01 },
      });
      setIsSettingPosition(true);
    });
  }, []);
  useEffect(() => {
    setIsBottomSheetOpen(true);
  }, [mapData, searchMapData]);

  const handleMoveMap = () => {
    console.log("move");
  };

  const handleClickHospitalCard = (id: string) => {
    setSelectedHospital(id);
  };

  const handleSearch = () => {
    if (searchText) {
      refetchSearchData();
    } else {
      refetchMapData();
    }
  };

  const total = searchText ? searchMapData?.total ?? 0 : mapData?.total ?? 0;
  const maxCount = MAX_SEARCH_DATA <= (total === 0 ? 1 : total) ? 4 : Math.floor(((total === 0 ? 1 : total) - 1) / SEARCH_UNIT) + 1;
  const handleReSearchResult = () => {
    if ((searchText && !searchMapData) || (!searchText && !mapData)) {
      return;
    }

    if (mapSearchCount === 4 || (mapSearchCount !== 0 && maxCount <= mapSearchCount)) {
      return;
    }

    if (searchText) {
      refetchSearchData();
    } else {
      refetchMapData();
    }
    setMapSearchCount(mapSearchCount + 1);
  };

  const isReadyMap = isSettingPosition && !isFetchingMapData && isSuccessMapData && mapData;
  const hospitalData = searchText ? searchMapData : mapData;

  return (
    <>
      {isSettingPosition ? (
        <Styled.Container>
          {!selectedHospital && (
            <Search
              searchData={searchMapData}
              selectedPart={selectedPart}
              setSelectedPart={setSelectedPart}
              handleSearch={handleSearch}
              searchText={searchText}
              setSelectedHospital={setSelectedHospital}
              setSearchText={setSearchText}
              isSelectedMedicine={isSelectedMedicine}
              setIsSelectedMedicine={setIsSelectedMedicine}
            />
          )}

          {isSettingPosition && (
            <Map
              currentPosition={currentPosition}
              doctorPositions={
                hospitalData
                  ? hospitalData.data.filter(
                      (hospital) =>
                        (selectedFilter.emergencyNight ? hospital.emergencyNight === "Y" : true) &&
                        (selectedFilter.nightService ? hospital.nightService === "Y" : true)
                    )
                  : []
              }
              selectedHospital={selectedHospital}
              setSelectedHospital={setSelectedHospital}
              setSearchPosition={setSearchPosition}
              setMapSearchCount={setMapSearchCount}
              isBottomSheetOpen={isBottomSheetOpen}
              setIsBottomSheetOpen={setIsBottomSheetOpen}
            />
          )}
          {!selectedHospital && (
            <Styled.MoreSearchContainer onClick={handleReSearchResult} isBottomSheetOpen={isBottomSheetOpen}>
              <p style={{ color: theme.color.blue }}>결과 {mapSearchCount === 0 ? "재검색" : "더보기"}</p>
              {mapSearchCount === 0 ? (
                <img alt="search again" src="/images/doctorAppointment/refresh-rotate.svg" />
              ) : (
                <div style={{ display: "flex" }}>
                  <p style={{ color: theme.color.blue }}>{mapSearchCount}</p>/{maxCount}
                </div>
              )}
            </Styled.MoreSearchContainer>
          )}
          {selectedHospital ? (
            <>
              <Styled.BackButton onClick={() => setSelectedHospital("")}>
                <ChevronDownIcon stroke={theme.color.grey_300} />
              </Styled.BackButton>
              <HospitalDetail selectedHospital={selectedHospital} />
            </>
          ) : (
            <BottomSheet background="transparent" onClickOverlay={handleMoveMap} height="374px" isBottomSheetOpen={isBottomSheetOpen}>
              <Styled.FilterContainer>
                <p className="sort">거리순 정렬</p>
                <div className="filter-tags">
                  {emergencyNightData.map((text, idx) => (
                    <EmergencyNightTag
                      key={idx}
                      isSelected={selectedFilter[text.key]}
                      onClick={() => setSelectedFilter({ ...selectedFilter, [text.key]: !selectedFilter[text.key] })}
                    >
                      {text.label}
                    </EmergencyNightTag>
                  ))}
                </div>
              </Styled.FilterContainer>
              <Styled.CardContainer>
                {isReadyMap &&
                  hospitalData &&
                  hospitalData.data
                    .filter(
                      (hospital) =>
                        (selectedFilter.emergencyNight ? hospital.emergencyNight === "Y" : true) &&
                        (selectedFilter.nightService ? hospital.nightService === "Y" : true)
                    )
                    .map((doctor, idx) => (
                      <HospitalCard
                        key={idx}
                        title={doctor.name}
                        category={doctor.type}
                        status={doctor.operatingStatus}
                        distance={doctor.meToHospitalDistance}
                        address={doctor.address}
                        operatingTime={
                          doctor.operatingTime
                            ? doctor.operatingTime.start || doctor.operatingTime.end
                              ? `${doctor.operatingTime.start} ~ ${doctor.operatingTime.end}`
                              : ""
                            : ""
                        }
                        lunchTime={
                          doctor.lunchTime
                            ? doctor.lunchTime.start || doctor.lunchTime.end
                              ? `${doctor.lunchTime.start} ~ ${doctor.lunchTime.end}`
                              : ""
                            : ""
                        }
                        phoneNumber={doctor.phoneNumber}
                        emergencyNight={doctor.emergencyNight}
                        nightService={doctor.nightService}
                        onClick={() => handleClickHospitalCard(doctor.id)}
                      />
                    ))}
              </Styled.CardContainer>
            </BottomSheet>
          )}
        </Styled.Container>
      ) : (
        <Loading
          titleTexts={[
            {
              text: "예약을 위해\n주변 병원을 찾아볼게요",
              style: { display: "inline-block", marginBottom: "4rem", fontWeight: 700 },
            },
          ]}
          illustration={<img loading="eager" alt="icon" style={{ width: "26rem", height: "24.8rem" }} src={imageUrl.map_loading} />}
        />
      )}
    </>
  );
};

export default Appointment;
