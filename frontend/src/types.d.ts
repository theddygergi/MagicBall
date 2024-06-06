export interface QuestionAnswer {
  question: string;
  answer: string;
  timestamp: number;
}

export interface MagicBallProps {
  answer: string;
}

export interface QuestionInputProps {
  onAskQuestion: (question: string) => void;
}

export interface HistortListProps {
  history: QuestionAnswer[];
}

export const answers = [
  "Yes",
  "No",
  "Maybe",
  "Ask again later",
  "Definitely",
  "Absolutely not",
  "Probably",
  "I don't think so",
];
