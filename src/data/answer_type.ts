export const ANSWER_TYPE = {
  DEF: "DEF",
  IMG: "IMG",
  ETC: "ETC",
  NUMBER_1: "NUMBER_1",
  NUMBER_2: "NUMBER_2",
  NUMBER_3: "NUMBER_3",
  NUMBER_4: "NUMBER_4",
  NUMBER_5: "NUMBER_5",
  NUMBER_6: "NUMBER_6",
  NUMBER_7: "NUMBER_7",
  NUMBER_8: "NUMBER_8",
  NUMBER_9: "NUMBER_9",
  NUMBER_10: "NUMBER_10",
  DRAG_1: "DRAG_1",
  STR: "STR",
  NA: "NA",
} as const;

export const DIGESTIVE_BODY_PART = {
  "right-upper-stomach": "0",
  "solar-plexus": "1",
  "left-upper-stomach": "2",
  "right-side": "3",
  "belly-button": "4",
  "left-side": "5",
  "right-lower-stomach": "6",
  "middle-lower-stomach": "7",
  "left-lower-stomach": "8",
} as const;

export const TOOTH_PART = {
  "top-right": "0",
  top: "1",
  "top-left": "2",
  "bottom-right": "3",
  bottom: "4",
  "bottom-left": "5",
};

export const TIME_TYPES = ["시간", "일", "주", "개월", "년"] as const;

export const INITIAL_QUESTION = {
  id: "",
  question: "",
  is_multiple: false,
  image_url: null,
  answer_type: ANSWER_TYPE.DEF,
  answers: null,
  sub_content: null,
};

export const INITIAL_ANSWER = {
  answer_id: [],
  next_question: null,
};

export const SLIDER_BUTTON_ANSWERS = [
  {
    answer_id: "100",
    answer: "경험해본 적이 없는\n극심한 통증",
    next_question: null,
  },
  {
    answer_id: "80",
    answer: "일상생활이 불가한\n심한 통증",
    next_question: null,
  },
  {
    answer_id: "60",
    answer: "일상생활에 상당한\n영향을 주는 통증",
    next_question: null,
  },
  {
    answer_id: "40",
    answer: "일상생활에 영향이 있지만\n참을 만한 고통",
    next_question: null,
  },
  {
    answer_id: "20",
    answer: "일상생활에는 문제가 없는\n경미한 고통",
    next_question: null,
  },
  {
    answer_id: "0",
    answer: "통증이 거의 없음",
    next_question: null,
  },
] as const;

export const SLIDER_VALUES = {
  DEFAULT: 2,
  MINIMUM: 0,
  MAXIMUM: 5,
  STEP: 1,
  LABELS: [100, 50, 0],
} as const;

export const SLIDER_DEFAULT_VALUE = 40;
export const SLIDER_MIN_VALUE = 0;
export const SLIDER_MAX_VALUE = 100;
