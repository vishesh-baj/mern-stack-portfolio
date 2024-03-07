import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import { useMutation, useQuery } from "react-query";
import { API_INSTANCE } from "../api";
const QuoteCard = ({ quoteData }) => {
  const fetchQuotes = async () => {
    const response = await API_INSTANCE.get("quote/get-all-quotes");
    return response.data;
  };
  const addQuoteMutation = useMutation(
    (data) => API_INSTANCE.post("quote/add-quote", data),
    {
      onSuccess: (data) => console.log("DATA: ", data),
    }
  );

  const { data: fetchedQuotes, isLoading } = useQuery(
    "fetch-quotes",
    fetchQuotes,
    { onSuccess: (data) => console.log("QUOTE DATA: :", data) }
  );

  const handleSaveQuote = () => {
    console.log(quoteData);
    addQuoteMutation.mutate(quoteData);
  };

  return (
    <div className="bg-base-200 px-4 py-2 rounded-xl">
      <h2 className="text-lg">{quoteData?.content}</h2>
      <div className="flex justify-between items-center">
        <p className="font-semibold">- {quoteData.author}</p>
        <button onClick={handleSaveQuote} className="btn btn-circle">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

QuoteCard.propTypes = {
  quoteData: PropTypes.shape({
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};

export default QuoteCard;
