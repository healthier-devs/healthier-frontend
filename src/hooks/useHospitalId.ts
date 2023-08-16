import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/state";
import { setHospitalId } from "src/state/diagnoseSlice";

function useHospitalId() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const hospitalId = searchParams.get("hospitalId");

  useEffect(() => {
    if (!hospitalId) {
      alert("유효하지 않은 병원 id입니다");
      navigate("/");
    }
  }, [hospitalId, navigate]);

  const dispatchHospitalId = () => {
    dispatch(setHospitalId({ hospitalId: hospitalId ?? "" }));
  };

  return { hospitalId, dispatchHospitalId };
}

export default useHospitalId;
