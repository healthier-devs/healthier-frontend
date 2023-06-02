import axios, { AxiosResponse } from "axios";
import { IDecisiveDate, IDiagnoseAnswer, IDiagnoseResponse, IDiagnosisResult, IQuestion } from "src/interfaces/diagnosisApi";
import {
  IHeadacheAnswer,
  IBasicAnswers,
  ICaseQuestion,
  IFinalResult,
  IHeadacheQuestions,
  IPainAreaRequest,
  IPrimaryAnswers,
  IResultResponse,
  IResultRequest,
  IHeadacheAnswers,
  IPrimaryHeadacheAnswer,
  ICaseQuestionPrimary,
} from "src/interfaces/headacheDiagnoseApi";

const sleepDisorderInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/diagnose`,
  timeout: 15000,
});
const headacheInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api/v2/diagnose`,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const sleepDisorderRequests = {
  get: <T>(url: string) => sleepDisorderInstance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => sleepDisorderInstance.post<T>(url, body).then(responseBody),
};
const headacheRequests = {
  get: <T>(url: string) => headacheInstance.get<T>(url).then(responseBody),
  post: <T>(url: string, body: T) => headacheInstance.post<T>(url, body).then(responseBody),
};

export const SleepDisorderDiagnose = {
  getFirstQuestion: (): Promise<IQuestion> => sleepDisorderRequests.get(`/sleepdisorder/first`),
  postDecisiveQuestion: (body: IDecisiveDate): Promise<IDiagnosisResult> => sleepDisorderRequests.post(`/sleepdisorder/decisive`, body),
  postDiagnose: (body: IDiagnoseAnswer): Promise<IDiagnoseResponse> => sleepDisorderRequests.post(``, body),
};

export const HeadacheDiagnose = {
  getBasicQuestion: (): Promise<IHeadacheQuestions> => headacheRequests.get(`/headache/basic`),
  getRedFlagSign: (): Promise<IHeadacheQuestions> => headacheRequests.get(`/headache/red-flag-sign`),
  postRedFlagSign: (body: IBasicAnswers): Promise<ICaseQuestion> => headacheRequests.post(`/headache/red-flag-sign`, body),
  getPrimaryHeadache: (): Promise<IHeadacheQuestions> => headacheRequests.get(`/headache/primary-headache`),
  getTensionHeadache: (): Promise<IHeadacheQuestions> => headacheRequests.get(`/headache/tension-headache`),
  postPrimaryHeadache: (body: IPrimaryAnswers): Promise<ICaseQuestion> => headacheRequests.post(`/headache/primary-headache`, body),
  postNextPrimaryHeadache: (body: IPrimaryHeadacheAnswer): Promise<ICaseQuestionPrimary> =>
    headacheRequests.post(`/headache/primary-headache/next`, body),
  postFirstHeadacheQuestion: (body: IPainAreaRequest): Promise<IHeadacheQuestions> =>
    headacheRequests.post(`/headache/pain-area/first`, body),
  postHeadacheQuestion: (body: IHeadacheAnswer): Promise<ICaseQuestion> => headacheRequests.post(`/headache/pain-area/next`, body),
  getAdditionalQuestion: (): Promise<IHeadacheQuestions> => headacheRequests.get(`/headache/additional-factor`),
  postAdditionalQuestion: (body: IHeadacheAnswers): Promise<IResultResponse> => headacheRequests.post(`/headache/additional-factor`, body),
  postResult: (body: IResultRequest): Promise<IFinalResult> => headacheRequests.post(`/headache/result`, body),
  postResultDetail: (id: number): Promise<IDiagnosisResult> => headacheRequests.get(`/headache/results/${id}`),
};
