import { IQuestionResponse, IPostAnswersBody, IDiagnoseResponse } from "src/interfaces/diagnoseApi/diagnosis";
import { createFetcher } from "..";

const fetcher = createFetcher("/diagnose");

export const diagnosisFetcher = {
  getQuestions(diagnosisType: string, gender: string): Promise<IQuestionResponse> {
    if (diagnosisType === "stomach") {
      return fetcher.get(`/stomach?gender=${gender}`);
    } else if (diagnosisType === "indigestion") {
      return fetcher.get("/indigestion");
    } else if (diagnosisType === "hematemesis") {
      return fetcher.get("/hematemesis");
    } else if (diagnosisType === "bloodystool") {
      return fetcher.get("/bloodystool");
    } else if (diagnosisType === "vomit") {
      return fetcher.get(`/vomit?gender=${gender}`);
    } else if (diagnosisType === "diarrhea") {
      return fetcher.get("/diarrhea");
    } else if (diagnosisType === "constipation") {
      return fetcher.get("/constipation");
    } else if (diagnosisType === "jaundice") {
      return fetcher.get("jaundice");
    } else if (diagnosisType === "tooth") {
      return fetcher.get("/tooth");
    } else if (diagnosisType === "gum") {
      return fetcher.get("/gum");
    } else if (diagnosisType === "tlm") {
      return fetcher.get("/tlm");
    } else if (diagnosisType === "tjt") {
      return fetcher.get("/tjt");
    }
    throw new Error(`Invalid diagnosis type: ${diagnosisType}`);
  },
  postAnswers({
    diagnosisType,
    postAnswersBody,
    authenticated,
  }: {
    diagnosisType: string;
    postAnswersBody: IPostAnswersBody;
    authenticated: boolean;
  }): Promise<IDiagnoseResponse> {
    return fetcher.post(`/${diagnosisType}`, {
      answers: postAnswersBody.answers,
      ...(!authenticated && { user: postAnswersBody.user }),
    });
  },
};
