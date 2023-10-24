import { createFetcher } from "..";
import type { IDDXResultResponse } from "src/interfaces/diagnoseApi/result";
import type { IDiagnosisStatisticsResponse } from "src/interfaces/diagnoseApi/statistics";

const fetcher = createFetcher("/diagnosis");

export const diagnosisFetcher = {
  getDDXResult(dx_id: number): Promise<IDDXResultResponse> {
    return fetcher.get(`/${dx_id}`);
  },
  getStatistics(): Promise<IDiagnosisStatisticsResponse> {
    return fetcher.get("/statistics");
  },
};
