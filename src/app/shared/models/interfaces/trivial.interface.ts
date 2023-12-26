export interface Trivial {
  question: string;
  totalCorrectAnswers: number;
  answers: Answers[];
}

export interface Answers {
  answer: string;
  correct: boolean;
  selected?: boolean;
}
