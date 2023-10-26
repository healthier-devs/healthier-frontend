import { SYMPTOMS_TYPES_MAP } from "src/data/symptom_type";
import { IQuestionResponse, IPostAnswersBody, IDiagnoseResponse } from "src/interfaces/diagnoseApi/diagnosis";
import { TSymptomType } from "src/interfaces/symptomPage";
import { createUnauthorizedFetcher } from "..";

const fetcher = createUnauthorizedFetcher("/diagnose");

export const diagnosisFetcher = {
  getQuestions(diagnosisType: TSymptomType, gender: string): Promise<IQuestionResponse> {
    if (diagnosisType === SYMPTOMS_TYPES_MAP.stomach) {
      return fetcher.get(`/stomach?gender=${gender}`);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.indigestion) {
      return fetcher.get("/indigestion");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.hematemesis) {
      return fetcher.get("/hematemesis");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.bloodystool) {
      return fetcher.get("/bloodystool");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.vomit) {
      return fetcher.get(`/vomit?gender=${gender}`);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.diarrhea) {
      return fetcher.get("/diarrhea");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.constipation) {
      return fetcher.get("/constipation");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.jaundice) {
      return fetcher.get("jaundice");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.tooth) {
      return fetcher.get("/tooth");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.gum) {
      return fetcher.get("/gum");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.tlm) {
      return fetcher.get("/tlm");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.tjt) {
      return fetcher.get("/tjt");
    }
    throw new Error(`Invalid diagnosis type: ${diagnosisType}`);
  },
  getFollowingQuestions(diagnosisType: TSymptomType, gender: string): Promise<IQuestionResponse> {
    if (diagnosisType === SYMPTOMS_TYPES_MAP.stomach) {
      return fetcher.get(`/stomach?type=after&gender=${gender}`);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.indigestion) {
      return fetcher.get("/indigestion?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.hematemesis) {
      return fetcher.get("/hematemesis?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.bloodystool) {
      return fetcher.get("/bloodystool?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.vomit) {
      return fetcher.get("/vomit?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.diarrhea) {
      return fetcher.get("/diarrhea?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.constipation) {
      return fetcher.get("/constipation?type=after");
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.jaundice) {
      return fetcher.get("jaundice?type=after");
    }

    throw new Error(`Invalid diagnosis type: ${diagnosisType}`);
  },
  postAnswers(diagnosisType: TSymptomType, postAnswersBody: IPostAnswersBody): Promise<IDiagnoseResponse> {
    if (diagnosisType === SYMPTOMS_TYPES_MAP.stomach) {
      return fetcher.post("/stomach", postAnswersBody);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.indigestion) {
      return fetcher.post("/indigestion", postAnswersBody);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.hematemesis) {
      return fetcher.post("/hematemesis", postAnswersBody);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.bloodystool) {
      return fetcher.post("/bloodystool", postAnswersBody);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.vomit) {
      return fetcher.post("/vomit", postAnswersBody);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.diarrhea) {
      return fetcher.post("/diarrhea", postAnswersBody);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.constipation) {
      return fetcher.post("/constipation", postAnswersBody);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.jaundice) {
      return fetcher.post("jaundice", postAnswersBody);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.tooth) {
      return fetcher.post("/tooth", postAnswersBody);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.gum) {
      return fetcher.post("/gum", postAnswersBody);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.tlm) {
      return fetcher.post("/tlm", postAnswersBody);
    } else if (diagnosisType === SYMPTOMS_TYPES_MAP.tjt) {
      return fetcher.post("/tjt", postAnswersBody);
    }

    throw new Error(`Invalid diagnosis type: ${diagnosisType}`);
  },
};
