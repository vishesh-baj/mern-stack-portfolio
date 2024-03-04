import { useState } from "react";
import SectionLayout from "../layout/SectionLayout";
import { CiSearch } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSearchSchema } from "../validations";
import { useMutation, useQuery } from "react-query";
import { GOOGLE_BOOKS_API_ENDPOINT, GOOGLE_BOOKS_API_KEY } from "../constants";
import axios from "axios";
import { convertToApiString } from "../utils";
import BookCard from "../components/BookCard";
import { API_INSTANCE } from "../api";
import Loader from "../components/Loader";
import SavedBookCard from "../components/SavedBookCard";
const BooksPage = () => {
  const [activeTab, setActiveTab] = useState("browse");
  const [bookSearchData, setBookSearchData] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(bookSearchSchema) });

  const fetchSavedBooks = async () => {
    const response = await API_INSTANCE.get("/book/get-all-books");
    return response.data;
  };

  const {
    data: savedBooksData,
    isLoading,
    refetch,
  } = useQuery("fetch-books", fetchSavedBooks);

  const bookSearchMutation = useMutation(
    (bookSearchQuery) =>
      axios.get(
        `${GOOGLE_BOOKS_API_ENDPOINT}q=${convertToApiString(
          bookSearchQuery
        )}&key=${GOOGLE_BOOKS_API_KEY}`
      ),
    {
      onSuccess: (data) => {
        setBookSearchData(data.data?.items);
      },
    }
  );

  const onSubmit = (data) => {
    console.log(data);
    bookSearchMutation.mutate(data.searchInput);
    reset();
  };

  const handleToggleDescription = (bookId) => {
    setExpandedId((prevId) => (prevId === bookId ? null : bookId));
  };

  return (
    <SectionLayout sectionTitle="Books">
      <div role="tablist" className="tabs tabs-lifted mt-4">
        <input
          type="radio"
          name="books_tabs"
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full gap-4 items-center justify-between"
          >
            <div className="form-control flex-1">
              <input
                {...register("searchInput")}
                className="input input-bordered"
                type="text"
                name="searchInput"
                id="searchInput"
                placeholder="Search Books"
              />
              <p className="mt-1 text-rose-400 pl-1">
                {errors.searchInput?.message}
              </p>
            </div>
            <button type="submit" className="btn btn-circle">
              <CiSearch className="text-xl" />
            </button>
          </form>

          <div className="flex flex-col gap-4 mt-4 overflow-y-auto max-h-96">
            {bookSearchData.map((book) => (
              <BookCard refetchFunction={refetch} key={book.id} book={book} />
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="books_tabs"
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
          {isLoading ? (
            <Loader />
          ) : (
            savedBooksData && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {savedBooksData.allBooks.map((savedBook) => (
                  <SavedBookCard
                    key={savedBook._id}
                    toggleHandler={handleToggleDescription}
                    bookData={savedBook}
                    expandedId={expandedId}
                    refetchFunction={refetch}
                  />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </SectionLayout>
  );
};

export default BooksPage;
