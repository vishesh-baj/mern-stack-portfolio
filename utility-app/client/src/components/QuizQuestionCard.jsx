import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useState } from "react";

const QuizQuestionCard = ({ data, index, changeHandler }) => {
  const { question, answers, tags } = data;

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <div className="bg-base-200 rounded-xl w-full p-4">
      <h1 className="text-xl flex gap-4">
        <span>{index}. </span>
        <p>{question}</p>
      </h1>
      <div>
        {Object.entries(answers).map((item) => {
          return (
            item[1] !== null && (
              <div className="mt-4" key={nanoid()}>
                <div className="flex gap-4">
                  <input
                    onChange={(e) => {
                      setSelectedAnswer(item[0]);
                      changeHandler(e.target);
                    }}
                    className="radio radio-primary"
                    type="radio"
                    id={`radio_${item[0]}`}
                    name={`question_${index}_answer`}
                    checked={selectedAnswer === item[0]}
                  />
                  <label htmlFor={`radio_${item[0]}`}>
                    {item[0].split("_")[1]}: {item[1]}
                  </label>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

QuizQuestionCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
  index: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default QuizQuestionCard;
