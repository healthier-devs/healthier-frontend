import { createFetcher } from "..";
import type { IDDXResultResponse } from "src/interfaces/diagnoseApi/result";

const fetcher = createFetcher("/diagnosis");

export const diagnosisFetcher = {
  getDDXResult(dx_id: number): Promise<IDDXResultResponse> {
    return fetcher.get(`/${dx_id}`);
  },
};
