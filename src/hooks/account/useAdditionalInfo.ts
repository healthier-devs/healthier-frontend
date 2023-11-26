import { useState } from "react";
import type { TAdditionalInformation } from "src/interfaces/account";
const MAX_HEALTH_INTERESTS_COUNT = 3;

export const useAdditionalInfo = () => {
  const [info, setInfo] = useState<Omit<TAdditionalInformation, "birthDate">>({
    name: "",
    gender: "m",
    healthInterests: [],
    invitationCode: "",
  });
  const [birthDate, setBirthDate] = useState<{
    year: number;
    month: number;
    date: number;
  }>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  });

  const handleChangeBirthDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setBirthDate({ ...birthDate, [name]: Number(value.slice(0, -1)) });
  };

  const handleClickGender = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;

    setInfo({ ...info, [name]: value });
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, name: e.target.value });
  };

  const handleChangeInviCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, invitationCode: e.target.value });
  };

  const handleClickHealthInterest = (e: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = e.currentTarget;

    const { interest } = dataset as { interest: string };

    if (info.healthInterests.includes(interest)) {
      setInfo((infoParam) => ({ ...infoParam, healthInterests: infoParam.healthInterests.filter((hi) => hi !== interest) }));

      return;
    }

    if (info.healthInterests.length === MAX_HEALTH_INTERESTS_COUNT) {
      return;
    }

    setInfo((infoParam) => ({ ...infoParam, healthInterests: [...infoParam.healthInterests, interest] }));
  };

  return {
    info,
    birthDate,
    handleChangeBirthDate,
    handleClickGender,
    handleClickHealthInterest,
    handleChangeName,
    handleChangeInviCode,
  };
};
