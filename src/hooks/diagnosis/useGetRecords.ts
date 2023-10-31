import { useInfiniteQuery } from "@tanstack/react-query";
import { diagnosisFetcher } from "src/api/diagnosis/fetcher";
import { queryKeys } from "src/api/queryKeys";
import type { IDiagnosisRecordsResponse } from "src/interfaces/diagnoseApi/records";
import type { IAuthState } from "src/state";

const DEFAULT_RECORDS_DATA: IDiagnosisRecordsResponse = {
  data: [],
  total: 0,
};

export const useGetRecords = ({ size, authenticated }: { size: number } & Pick<IAuthState, "authenticated">) => {
  const {
    data: recordsData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [queryKeys.DIAGNOSIS_RECORDS, size],
    queryFn: ({ pageParam = 0 }) => diagnosisFetcher.getRecords({ page: pageParam as number, size }),
    getNextPageParam: (lastPage: IDiagnosisRecordsResponse, _, lastPageParam) => {
      if (lastPage.total === 0) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    defaultPageParam: 0,
    enabled: authenticated,
  });

  return {
    recordsData: recordsData?.pages ?? [DEFAULT_RECORDS_DATA],
    fetchNextPage,
    hasNextPage,
  };
};
