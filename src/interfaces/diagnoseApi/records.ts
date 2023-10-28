export interface IDiagnosisRecordsRequest {
  page: number;
  size: number;
}

interface IDX {
  dxId: number;
  dxName: string;
}

export interface IDiagnosisRecord {
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
