import PropTypes from "prop-types";
const QuizCategoryBadge = ({ badgeData, handleSelectCategory }) => {
  const { categoryName, backgroundColor } = badgeData;
  return (
    <button
      onClick={() => handleSelectCategory(badgeData)}
      className={`btn  ${backgroundColor} `}
    >
      {categoryName}
    </button>
  );
};

export default QuizCategoryBadge;

QuizCategoryBadge.propTypes = {
  badgeData: PropTypes.shape({
    categoryName: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }),
  handleSelectCategory: PropTypes.func.isRequired,
};
