import { createFetcher, createUnauthorizedFetcher } from "..";
import type { IDiagnosisRecordsResponse, IDiagnosisRecordsRequest } from "src/interfaces/diagnoseApi/records";
import type { IDDXResultResponse } from "src/interfaces/diagnoseApi/result";
import type { IDiagnosisStatisticsResponse } from "src/interfaces/diagnoseApi/statistics";

const fetcher = createFetcher("/diagnosis");
const unauthorizedFetcher = createUnauthorizedFetcher("/diagnosis");

export const diagnosisFetcher = {
  getDDXResult(dx_id: number): Promise<IDDXResultResponse> {
    return unauthorizedFetcher.get(`/${dx_id}`);
  },
  getStatistics(): Promise<IDiagnosisStatisticsResponse> {
    return fetcher.get("/statistics");
  },
  getRecords({ page, size }: IDiagnosisRecordsRequest): Promise<IDiagnosisRecordsResponse> {
    return fetcher.get(`/records?page=${page}&size=${size}`);
  },
};
