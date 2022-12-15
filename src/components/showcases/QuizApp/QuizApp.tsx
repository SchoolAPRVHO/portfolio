import React, { useState, useEffect, FC } from "react";
import { decode } from "html-entities";
import styles from "./QuizApp.module.css";
import { Container } from "@mui/material";

export interface Questions {
  response_code: number;
  results: Question[];
}

export interface Question {
  type: "boolean" | "multiple";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  user_answer?: string;
}

interface TrueOrFalseQuestionProps {
  question: Question;
  userAnswer: string;
  setUserAnswer: (answer: string) => void;
}

const TrueOrFalseQuestion = ({
  question,
  userAnswer,
  setUserAnswer,
}: TrueOrFalseQuestionProps) => {
  return (
    <div>
      <input
        type="radio"
        checked={userAnswer === "True"}
        onChange={(event) => setUserAnswer("True")}
      />{" "}
      True
      <input
        type="radio"
        checked={userAnswer === "False"}
        onChange={(event) => setUserAnswer("False")}
      />{" "}
      False
    </div>
  );
};

interface QuestionProps {
  question: Question;
  userAnswer: string;
  setUserAnswer: (answer: string) => void;
}

const Questions = ({ question, setUserAnswer, userAnswer }: QuestionProps) => {
  let color = "white";
  if (userAnswer !== undefined) {
    if (userAnswer === question.correct_answer) {
      color = "lightgreen";
    } else {
      color = "red";
    }
  }
  return (
    <div style={{ backgroundColor: color }}>
      <div>{decode(question.question)}</div>
      {userAnswer === undefined ? (
        <div>
          {question.type === "boolean" && (
            <TrueOrFalseQuestion
              question={question}
              setUserAnswer={setUserAnswer}
              userAnswer={userAnswer}
            />
          )}
          {question.type === "multiple" && (
            <MultipleChoiceQuestion
              question={question}
              setUserAnswer={setUserAnswer}
              userAnswer={userAnswer}
            />
          )}
        </div>
      ) : (
        <div style={{ fontWeight: "bold" }}>
          {userAnswer !== question.correct_answer ? (
            <p>
              You answered {userAnswer} and the correct answer was{" "}
              {question.correct_answer}
            </p>
          ) : (
            <p>You answered {userAnswer} which is the correct answer</p>
          )}
        </div>
      )}
    </div>
  );
};

interface MultipleChoiceQuestionProps {
  question: Question;
  userAnswer: string;
  setUserAnswer: (arg0: string) => void;
}

const MultipleChoiceQuestion = ({
  question,
  setUserAnswer,
}: MultipleChoiceQuestionProps) => {
  let allQuestions = [question.correct_answer, ...question.incorrect_answers];
  allQuestions.sort(() => Math.random() - 0.5);
  return (
    <select onChange={(event) => setUserAnswer(event.target.value)}>
      <option value="">Select an answer</option>
      {allQuestions.map((answer, index) => (
        <option key={index} value={answer}>
          {decode(answer)}
        </option>
      ))}
    </select>
  );
};

const LoadingIndicator = () => {
  return (
    <>
      <p>Loading</p>
    </>
  );
};

const QuizApp = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const [loading, setLoading] = useState(false);

  const loadQuestions = async () => {
    setLoading(true);
    let response = await fetch("https://opentdb.com/api.php?amount=10");
    let questionsResponse: Questions = await response.json();
    setQuestions([...questions, ...questionsResponse.results]);
    setLoading(false);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <>
      {questions.map((question, index) => {
        return (
          <Questions
            question={question}
            userAnswer={question.user_answer!}
            setUserAnswer={(answer) => {
              let newQuestions = [...questions];
              newQuestions[index].user_answer = answer;
              setQuestions(newQuestions);
            }}
          />
        );
      })}
      <button className = { styles.addButton }onClick={loadQuestions}>Load More</button>
      {loading && (
        <div>
          <LoadingIndicator />
        </div>
      )}
    </>
  );
};

interface ColorPickerProps {}

const QuizAppComplete: FC<ColorPickerProps> = () => (
  <Container className={styles.container}>
    <h1>Quizapp</h1>
    <QuizApp />
  </Container>
);

export default QuizAppComplete;
