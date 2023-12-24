export interface Trivial {
  question: string;
  totalCorrectAnswers: number;
  answers: Answers[];
}

interface Answers {
  answer: string;
  correct: boolean;
  selected?: boolean;
}
