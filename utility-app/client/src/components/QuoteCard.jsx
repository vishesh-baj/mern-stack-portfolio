import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
const QuoteCard = ({
  quoteData,
  handleMutation,
  handleDeleteMutation,
  showSave,
}) => {
  const handleSaveQuote = () => {
    console.log(quoteData);
    handleMutation.mutate(quoteData);
  };

  const handleDeleteQuote = (id) => {
    console.log("DELETE QUOTE ");
    handleDeleteMutation.mutate(id);
  };
  
  return (
    <div className="bg-base-200 px-4 py-2 rounded-xl">
      <h2 className="text-lg">{quoteData?.content}</h2>
      <div className="flex justify-between items-center">
        <p className="font-semibold">- {quoteData.author}</p>
        {showSave ? (
          <button onClick={handleSaveQuote} className="btn btn-circle">
            <FaHeart />
          </button>
        ) : (
          <button
            className="btn btn-circle "
            onClick={() => handleDeleteQuote(quoteData._id)}
          >
            <MdDeleteOutline className="text-2xl text-red-400" />
          </button>
        )}
      </div>
    </div>
  );
};

QuoteCard.propTypes = {
  quoteData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
  showSave: PropTypes.bool.isRequired,
  handleMutation: PropTypes.func,
  handleDeleteMutation: PropTypes.func,
};

export default QuoteCard;
