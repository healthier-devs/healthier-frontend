import { ChangeEvent, Dispatch, MutableRefObject, useRef, useState } from "react";
import { useEffect } from "react";
import ChevronLeftIcon from "src/assets/icons/ChevronLeftIcon";
import useModal from "src/hooks/useModal";
import { IUserMapResponse } from "src/interfaces/map";
import theme from "src/lib/theme";
import SearchCard from "../card/SearchCard";
import { emergencyNightData } from "../data";
import PartModal from "../partModal";
import { EmergencyNightTag, MedicineTag, PartTags } from "../tags";
import * as Styled from "./index.style";

interface ISearchProps {
  searchData: IUserMapResponse | undefined;
  selectedPart: string[];
  setSelectedPart: Dispatch<string[]>;
  handleSearch: () => void;
  searchText: string;
  setSearchText: Dispatch<string>;
  setSelectedHospital: Dispatch<string>;
  isSelectedMedicine: boolean;
  setIsSelectedMedicine: Dispatch<boolean>;
  isMounted: MutableRefObject<boolean>;
}
interface ISelectedFilter {
  emergencyNight: boolean;
  nightService: boolean;
}

const Search = ({
  searchData,
  selectedPart,
  setSelectedPart,
  handleSearch,
  searchText,
  setSearchText,
  setSelectedHospital,
  isSelectedMedicine,
  setIsSelectedMedicine,
  isMounted,
}: ISearchProps) => {
  const { isOpenModal, modalRef, closeModal, openModal } = useModal(isMounted.current ? false : true);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<ISelectedFilter>({ emergencyNight: false, nightService: false });

  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<any>();

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, []);
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.addEventListener("focus", () => {
      setIsFocus(true);
    });
  }, [isFocus]);
  useEffect(() => {
    document.addEventListener("keydown", handleSearchSubmit);

    return () => document.removeEventListener("keydown", handleSearchSubmit);
  }, [searchText]);

  const handleSearchSubmit = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
      setIsFocus(false);
    }
  };

  const handleSavePart = () => {
    closeModal();
  };

  const handleSearchDebounce = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      handleSearch();
    }, 500);
  };

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    handleSearchDebounce();
  };

  return (
    <>
      <Styled.Container>
        <Styled.InputContainer isFocus={isFocus}>
          {isFocus ? (
            <div onClick={() => setIsFocus(false)}>
              <ChevronLeftIcon stroke={theme.color.grey_400} height={24} width={24} />
            </div>
          ) : (
            <img src="/images/doctorAppointment/search.svg" />
          )}
          <Styled.Input placeholder="병원명 및 지역명을 입력해주세요" value={searchText} onChange={handleChangeSearchText} ref={inputRef} />
        </Styled.InputContainer>

        <div style={{ marginTop: "1.4rem" }}>
          <MedicineTag isSelected={isSelectedMedicine} onClick={() => setIsSelectedMedicine(!isSelectedMedicine)} />
          <PartTags selectedPart={selectedPart} onClick={() => openModal()} style={{ marginLeft: "0.8rem" }} />
        </div>
      </Styled.Container>
      {isFocus && (
        <Styled.Wrapper>
          <div style={{ width: "100%", height: "0.1rem", backgroundColor: theme.color.grey_600 }} />

          <Styled.FilterContainer>
            <p className="sort">거리순 정렬</p>
            <div className="filter-tags">
              {emergencyNightData.map((text) => (
                <EmergencyNightTag
                  key={text.key}
                  isSelected={selectedFilter[text.key]}
                  onClick={() => setSelectedFilter({ ...selectedFilter, [text.key]: !selectedFilter[text.key] })}
                >
                  {text.label}
                </EmergencyNightTag>
              ))}
            </div>
          </Styled.FilterContainer>

          {searchData &&
            searchData.data
              .filter(
                (hospital) =>
                  (selectedFilter.emergencyNight ? hospital.emergencyNight === "Y" : true) &&
                  (selectedFilter.nightService ? hospital.nightService === "Y" : true)
              )
              .map((doctor, idx) => (
                <SearchCard
                  key={idx}
                  title={doctor.name}
                  category={doctor.type}
                  status={doctor.operatingStatus}
                  distance={doctor.meToHospitalDistance}
                  address={doctor.address}
                  onClick={() => {
                    setIsFocus(false);
                    setSelectedHospital(doctor.id);
                  }}
                />
              ))}
        </Styled.Wrapper>
      )}

      {isOpenModal && (
        <PartModal selectedPart={selectedPart} setSelectedPart={setSelectedPart} handleSave={handleSavePart} ref={modalRef} />
      )}
    </>
  );
};

export default Search;
