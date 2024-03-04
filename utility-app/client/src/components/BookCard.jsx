import PropTypes from "prop-types";
import Ratings from "../components/Ratings";
import { FaHeart } from "react-icons/fa";
import { useMutation } from "react-query";
import { API_INSTANCE } from "../api";
import toast from "react-hot-toast";
const BookCard = ({ book, refetchFunction }) => {
  const saveBookMutation = useMutation(
    (data) => API_INSTANCE.post("/book/add-book", data),
    {
      onSuccess: (data) => {
        refetchFunction();
        console.log("SAVED DATA: ", data);
        toast("Successfully saved book");
      },
    }
  );

  const handleSaveBook = () => {
    const mutationData = {
      title: book.volumeInfo?.title,
      authors: book.volumeInfo?.authors,
      description: book.volumeInfo?.description,
      rating: book.volumeInfo?.averageRating,
      imageUrl: book.volumeInfo?.imageLinks?.thumbnail,
    };
    saveBookMutation.mutate(mutationData);
  };

  return (
    <div
      key={book.id}
      className="bg-base-200 rounded-xl p-4 flex justify-between gap-4  shadow-xl"
    >
      <div>
        <h2 className="text-2xl font-bold">{book.volumeInfo?.title}</h2>
        <h3>
          <span className="font-semibold">Author: </span>
          {book.volumeInfo?.authors && book.volumeInfo?.authors[0]}
        </h3>
        <p>
          <span className="font-semibold">Description: </span>
          {book.volumeInfo?.description}
        </p>
        <Ratings value={book.volumeInfo?.averageRating} />
      </div>
      <div>
        <button onClick={handleSaveBook} className="btn btn-circle bg-base-200">
          <FaHeart className="text-red-400" />
        </button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    volumeInfo: PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      averageRating: PropTypes.number,
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
        thumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,
  refetchFunction: PropTypes.func.isRequired,
};

export default BookCard;
