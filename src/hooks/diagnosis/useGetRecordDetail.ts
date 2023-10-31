import { useQuery } from "@tanstack/react-query";
import { diagnosisFetcher } from "src/api/diagnosis/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IDiagnosisRecordDetailResponse } from "src/interfaces/diagnoseApi/records";

const DEFAULT_RECORD_DETAIL_DATA: IDiagnosisRecordDetailResponse = {
  username: "",
  diagnosis: [],
};

export const useGetRecordDetail = (dxRecordId: string) => {
  const { data: recordDetailData } = useQuery({
    queryKey: [queryKeys.DIAGNOSIS_RECORDS, dxRecordId],
    queryFn: () => diagnosisFetcher.getRecordDetail(dxRecordId),
    enabled: dxRecordId !== "",
  });

  return {
    recordDetailData: recordDetailData ?? DEFAULT_RECORD_DETAIL_DATA,
  };
};
