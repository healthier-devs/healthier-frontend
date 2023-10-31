import type { IDiagnoseResult } from "./diagnosis";

export interface IDiagnosisRecordsRequest {
  page: number;
  size: number;
}

interface IDX {
  dxId: number;
  dxName: string;
}

export interface IDXRecordId {
  dxRecordId: string;
}

export interface IDiagnosisRecord extends IDXRecordId {
  createdAt: string;
  dxList: IDX[];
}

export interface IDiagnosisRecords {
  month: string;
  records: IDiagnosisRecord[];
}

export interface IDiagnosisRecordsResponse {
  data: IDiagnosisRecords[];
  total: number;
}

export interface IDiagnosisRecordDetailResponse {
  username: string;
  diagnosis: IDiagnoseResult[];
}
