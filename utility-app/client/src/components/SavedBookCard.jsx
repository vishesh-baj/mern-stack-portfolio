import PropTypes from "prop-types";
import { MdOutlineDelete } from "react-icons/md";
import Rating from "./Ratings";

const SavedBookCard = ({ bookData, toggleHandler, expandedId }) => {
  const { _id, title, description, imageUrl, rating } = bookData;

  const handleDeleteBook = () => {
    // Add your delete book logic here
  };

  return (
    <div className="bg-base-300 rounded-xl p-4 shadow-md">
      <figure className="h-40 overflow-hidden">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={imageUrl}
          alt={title}
        />
      </figure>
      <div className="mt-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p
          className={`text-gray-600 ${
            expandedId === _id ? "h-auto" : "h-16"
          } overflow-hidden`}
        >
          {description}
        </p>
        <button
          className="text-blue-500 hover:underline focus:outline-none"
          onClick={() => toggleHandler(_id)}
        >
          {expandedId === _id ? "Read less" : "Read more"}
        </button>
        <div className="flex justify-between">
          <Rating value={rating} />
          <button onClick={handleDeleteBook} className="btn btn-circle">
            <MdOutlineDelete className="text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

SavedBookCard.propTypes = {
  bookData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  toggleHandler: PropTypes.func.isRequired,
  expandedId: PropTypes.string.isRequired,
};

export default SavedBookCard;
