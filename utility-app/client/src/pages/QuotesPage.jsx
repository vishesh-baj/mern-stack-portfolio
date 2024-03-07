import { useMutation, useQuery } from "react-query";
import SectionLayout from "../layout/SectionLayout";
import { QUOTES_API_ENDPOINT } from "../constants";
import axios from "axios";
import { QuoteCard, Loader } from "../components";
import { useEffect, useState } from "react";
import { API_INSTANCE } from "../api";
import toast from "react-hot-toast";
import { IoCloudDownloadOutline } from "react-icons/io5";
const QuotesPage = () => {
  const [activeTab, setActiveTab] = useState("browse");
  const [quotesList, setQuotesList] = useState([]);
  const [loadMoreTrigger, setLoadMoreTrigger] = useState(false);
  const fetchQuotes = async () => {
    const response = await axios.get(QUOTES_API_ENDPOINT);
    return response.data;
  };
  const fetchQuotesDB = async () => {
    const response = await API_INSTANCE.get("quote/get-all-quotes");
    return response.data;
  };
  const { isLoading, refetch: quotesRefetch } = useQuery(
    "quotes",
    fetchQuotes,
    {
      onSuccess: (data) =>
        setQuotesList((prevState) => [...prevState, ...data]),
    }
  );

  const { data: fetchedQuotesFromDB, refetch } = useQuery(
    "fetch-quotes",
    fetchQuotesDB
  );

  const addQuoteMutation = useMutation(
    (data) => API_INSTANCE.post("quote/add-quote", data),
    {
      onSuccess: () => {
        toast.success("Quote Added Successfully");
        refetch();
      },
    }
  );

  const deleteQuoteMutation = useMutation(
    (id) => API_INSTANCE.delete(`quote/delete-quote/${id}`),
    {
      onSuccess: () => {
        toast.success("Quote Deleted Successfully");
        refetch();
      },
    }
  );

  const handleLoadMore = () => {
    console.log("LOAD MORE");
    setLoadMoreTrigger((prevState) => !prevState);
  };

  useEffect(() => {
    quotesRefetch();
  }, [loadMoreTrigger, quotesRefetch]);

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
              {quotesList?.map((quote) => {
                return (
                  <QuoteCard
                    quoteData={quote}
                    handleMutation={addQuoteMutation}
                    showSave
                    key={quote._id}
                  />
                );
              })}
              <div
                className="flex justify-center w-full tooltip tooltip-bottom"
                data-tip="load more"
              >
                <button onClick={handleLoadMore} className="btn btn-square">
                  <IoCloudDownloadOutline className="text-2xl text-teal-400" />
                </button>
              </div>
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
          <div className="flex flex-col gap-4 mt-4 overflow-y-auto max-h-96">
            {fetchedQuotesFromDB?.allQuotes.map((quote) => {
              return (
                <QuoteCard
                  key={quote._id}
                  quoteData={quote}
                  handleDeleteMutation={deleteQuoteMutation}
                />
              );
            })}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default QuotesPage;
