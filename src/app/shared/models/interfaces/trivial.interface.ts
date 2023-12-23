export interface Trivial {
  question: string;
  answers: Answers[];
}

interface Answers {
  answer: string;
  correct: boolean;
  selected?: boolean;
}
