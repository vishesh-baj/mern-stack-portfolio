import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const QuizQuestionCard = ({ data, index }) => {
  const { question, answers, description, correct_answer, tags } = data;
  console.log(correct_answer);
  const handleChange = (event) => {
    const { name } = event;

    console.log("AWesome ", name);
  };

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
                    onChange={(e) => handleChange(e.target)}
                    className="radio radio-primary"
                    type="radio"
                    id={`radio_${nanoid()}`} // Use a unique id for each radio input
                    name={`question_${index}_answer_${item[0].split("_")[1]}`} // Use a unique name for each set of radio inputs
                  />
                  <label htmlFor={`radio_${nanoid()}`}>
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
};

export default QuizQuestionCard;
