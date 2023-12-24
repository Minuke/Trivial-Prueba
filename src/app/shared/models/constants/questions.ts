import { Trivial } from "../interfaces/trivial.interface";

export const questions: Trivial[] = [
  {
    question: "¿Cuál es la capital de España?",
    totalCorrectAnswers: 1,
    answers: [
      { answer: "Madrid", correct: true },
      { answer: "Barcelona", correct: false },
      { answer: "Valencia", correct: false },
      { answer: "Sevilla", correct: false },
      { answer: "Zaragoza", correct: false },
      { answer: "Málaga", correct: false },
      { answer: "Murcia", correct: false },
      { answer: "Palma", correct: false },
      { answer: "Las Palmas", correct: false },
      { answer: "Bilbao", correct: false }
    ]
  },
  {
    question: "¿Cuáles de los siguientes son planetas en nuestro sistema solar?",
    totalCorrectAnswers: 4,
    answers: [
      { answer: "Mercurio", correct: true },
      { answer: "Venus", correct: true },
      { answer: "Tierra", correct: true },
      { answer: "Marte", correct: true },
      { answer: "Júpiter", correct: false },
      { answer: "Saturno", correct: false },
      { answer: "Urano", correct: false },
      { answer: "Neptuno", correct: false },
      { answer: "Plutón", correct: false },
      { answer: "Eris", correct: false }
    ]
  },
  // Puedes agregar más preguntas aquí...
];
