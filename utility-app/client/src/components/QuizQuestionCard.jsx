import PropTypes from "prop-types";
const QuizQuestionCard = ({ data, index }) => {
  const { question, answers, description, correct_answer, tags } = data;
  return (
    <div className="bg-base-200 rounded-xl w-full p-4">
      <h1 className="text-xl">
        <span>{index}. </span>
        {question}
      </h1>
      <div>{console.log(Object.entries(answers))}</div>
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
