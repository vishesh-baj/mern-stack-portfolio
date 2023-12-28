import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";

const NoteCard = ({ note, onDelete, onEdit }) => {
  return (
    <div
      className={`${note.color} text-primary-content col-span-4 sm:col-span-1 w-full rounded-xl p-4 shadow-md transition duration-300 transform hover:scale-105 flex flex-col justify-between`}
      key={nanoid()}
    >
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">{note.title}</h1>
        <p className=" max-h-60 overflow-y-scroll">{note.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <button onClick={() => onDelete(note._id)} className="btn btn-circle">
            <MdOutlineDeleteOutline className="text-2xl text-white hover:text-red-400 " />
          </button>
          <button onClick={() => onEdit(note)} className="btn btn-circle">
            <MdEdit className="text-2xl text-white hover:text-teal-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default NoteCard;
