import { FaHeart } from "react-icons/fa";
const QuoteCard = ({ quoteData }) => {
  return (
    <div className="bg-base-200 px-4 py-2 rounded-xl">
      <h2 className="text-lg">{quoteData?.content}</h2>
      <div className="flex justify-between items-center">
        <p className="font-semibold">- {quoteData.author}</p>
        <button className="btn btn-circle">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
