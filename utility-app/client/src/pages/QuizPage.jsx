import SectionLayout from "../layout/SectionLayout";
import axios from "axios";
import {
  QUIZ_API_ENDPOINT,
  QUIZ_API_TOKEN,
  QUIZ_CATEGORY_MAPPING,
} from "../constants";
import { useMutation } from "react-query";
import { QuizCategoryBadge, QuizQuestionCard } from "../components";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { GrPowerReset } from "react-icons/gr";

const QuizPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [quizData, setQuizData] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [marks, setMarks] = useState(0);

  const LIMIT = 10;

  const quizMutation = useMutation(
    (data) =>
      axios.get(
        `${data.QUIZ_API_ENDPOINT}apiKey=${data.QUIZ_API_TOKEN}&limit=${data.LIMIT}&category=${data.categoryName}`
      ),
    {
      onSuccess: (data) => {
        setQuizData(data.data);
        setCorrectAnswers(
          data.data.map((item) => {
            return Object.entries(item.correct_answers).filter((entry) => {
              return entry[1] === "true";
            });
          })
        );
      },

      onError: (error) => toast.error(error.message),
    }
  );

  const handleSelectCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const handleStartQuiz = () => {
    quizMutation.mutate({
      QUIZ_API_ENDPOINT,
      QUIZ_API_TOKEN,
      LIMIT,
      categoryName: selectedCategory.categoryName,
    });
    setQuizStarted((prevState) => !prevState);
  };

  const handleSelectedAnswers = (answerData) => {
    console.log(answerData);
    setSelectedAnswers((prevState) => {
      const existingAnswerIndex = prevState.findIndex(
        (obj) => obj.name === answerData.name
      );
      if (existingAnswerIndex !== -1) {
        prevState[existingAnswerIndex].answer = answerData.id;
        return [...prevState];
      } else {
        return [...prevState, { name: answerData.name, answer: answerData.id }];
      }
    });
  };

  const handleSubmit = () => {
    console.log("SUBMIT TRIGGERED");
    correctAnswers.forEach((answerArr, idx) => {
      if (
        answerArr[0][0].split("_")[1] ===
        selectedAnswers[idx]["answer"].split("_")[2]
      ) {
        setMarks((prevMarks) => prevMarks + 1);
      } else {
        return;
      }
    });
    toast.success(`TOTAL MARKS OBTAINED: ${marks} `);
  };

  useEffect(() => {
    console.log("CORRECT ANSWERS: ", correctAnswers);
    console.log("SELECTED ANSWERS: ", selectedAnswers);
  }, [correctAnswers, selectedAnswers]);

  return (
    <SectionLayout sectionTitle="Quiz">
      {
        <>
          <h2 className="my-4">Select Category</h2>
          <div className="flex gap-2 flex-wrap">
            {QUIZ_CATEGORY_MAPPING.map((quizBadge) => {
              return (
                <QuizCategoryBadge
                  key={nanoid()}
                  badgeData={quizBadge}
                  handleSelectCategory={handleSelectCategory}
                />
              );
            })}
            <div className="tooltip" data-tip="reset">
              <button
                onClick={() => setQuizStarted(false)}
                className="btn btn-circle"
              >
                <GrPowerReset />
              </button>
            </div>
          </div>
          <div className="w-full flex mt-4 ">
            {quizStarted ? (
              <div className="w-full ">
                {quizData.map((questionData, idx) => {
                  return (
                    <div className="mb-4" key={questionData.id}>
                      <QuizQuestionCard
                        changeHandler={handleSelectedAnswers}
                        data={questionData}
                        index={idx + 1}
                      />
                    </div>
                  );
                })}
                <button onClick={handleSubmit} className="btn">
                  Submit
                </button>
              </div>
            ) : (
              <button
                onClick={handleStartQuiz}
                className="btn-wide flex-1 btn btn-accent mt-4"
              >
                Start Quiz
              </button>
            )}
          </div>
        </>
      }
    </SectionLayout>
  );
};

export default QuizPage;
