import { useQuery } from "react-query";
import SectionLayout from "../layout/SectionLayout";
import { QUOTES_API_ENDPOINT } from "../constants";
import axios from "axios";
import QuoteCard from "../components/QuoteCard";
import Loader from "../components/Loader";
import { useState } from "react";
const QuotesPage = () => {
  const [activeTab, setActiveTab] = useState("browse");
  const fetchQuotes = async () => {
    const response = await axios.get(QUOTES_API_ENDPOINT);
    return response.data;
  };

  const { data: fetchedQuotesData, isLoading } = useQuery(
    "quotes",
    fetchQuotes,
    {
      onSuccess: (data) => console.log("DATA: ", data),
    }
  );

  return (
    <SectionLayout sectionTitle="Random Quotes">
      <div role="tablist" className="tabs tabs-lifted mt-4">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Browse"
          onClick={() => setActiveTab("browse")}
          checked={activeTab === "browse"}
        />
        <div
          role="tabpanel"
          className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${
            activeTab === "browse" ? "" : "hidden"
          }`}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <div className="flex flex-col gap-4 mt-4 overflow-y-auto max-h-96">
              {fetchedQuotesData?.map((quote) => {
                return <QuoteCard quoteData={quote} key={quote._id} />;
              })}
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Saved"
          onClick={() => setActiveTab("saved")}
          checked={activeTab === "saved"}
        />
        <div
          role="tabpanel"
          className={`tab-content bg-base-100 border-base-300 rounded-box p-6 ${
            activeTab === "saved" ? "" : "hidden"
          }`}
        >
          Tab content 2
        </div>
      </div>
    </SectionLayout>
  );
};

export default QuotesPage;
