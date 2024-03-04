import { useQuery } from "react-query";
import SectionLayout from "../layout/SectionLayout";
import { QUOTES_API_ENDPOINT } from "../constants";
import axios from "axios";
import QuoteCard from "../components/QuoteCard";
import Loader from "../components/Loader";
const QuotesPage = () => {
  const fetchQuotes = async () => {
    const response = await axios.get(QUOTES_API_ENDPOINT);
    return response.data;
  };

  const {
    data: fetchedQuotesData,
    isLoading,
    errors,
  } = useQuery("quotes", fetchQuotes, {
    onSuccess: (data) => console.log("DATA: ", data),
  });

  return (
    <SectionLayout sectionTitle="Random Quotes">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-4 mt-4 overflow-y-auto max-h-96">
          {fetchedQuotesData?.map((quote) => {
            return <QuoteCard quoteData={quote} key={quote._id} />;
          })}
        </div>
      )}
    </SectionLayout>
  );
};

export default QuotesPage;
