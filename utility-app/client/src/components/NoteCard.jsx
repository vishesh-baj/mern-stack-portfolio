import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";

const NoteCard = ({ note, onDelete, onEdit }) => {
  return (
    <div
      className={`card ${note.color} text-primary-content col-span-4 sm:col-span-1 min-w-96`}
      key={nanoid()}
    >
      <div className="card-body">
        <h1 className="card-title">{note.title}</h1>
        <p>{note.description}</p>
        <div className="card-actions">
          <button
            onClick={() => onDelete(note._id)}
            className="btn btn-circle "
          >
            <MdOutlineDeleteOutline className="text-2xl text-red-400" />
          </button>
          <button onClick={() => onEdit(note)} className="btn btn-circle">
            <MdEdit className="text-2xl text-info" />
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
