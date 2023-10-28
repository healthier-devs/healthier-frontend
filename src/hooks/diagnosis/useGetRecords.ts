import { useQuery } from "@tanstack/react-query";
import { diagnosisFetcher } from "src/api/diagnosis/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IDiagnosisRecordsRequest, IDiagnosisRecordsResponse } from "src/interfaces/diagnoseApi/records";
import type { IAuthState } from "src/state";

const DEFAULT_RECORDS_DATA: IDiagnosisRecordsResponse = {
  total: 0,
  data: [],
};

export const useGetRecords = ({ page, size, authenticated }: IDiagnosisRecordsRequest & Pick<IAuthState, "authenticated">) => {
  const { data: recordsData } = useQuery({
    queryKey: [queryKeys, page, size],
    queryFn: () => diagnosisFetcher.getRecords({ page, size }),
    enabled: authenticated,
  });

  return {
    recordsData: recordsData ?? DEFAULT_RECORDS_DATA,
  };
};
