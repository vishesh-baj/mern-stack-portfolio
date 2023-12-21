import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdCheckmark, IoIosRemoveCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
const TodoCard = ({ todo, onEdit, onDelete, onComplete }) => {
  return (
    <li
      className={`p-4 ${
        todo.completed ? "bg-success" : "bg-base-100"
      } rounded-xl`}
      key={todo._id}
    >
      <div className="flex flex-col gap-4 md:flex-row justify-between md:items-center">
        <div className="w-1/2">
          <div className="flex gap-4">
            <h1 className="font-semibold">Title: </h1>
            <p>{todo.title}</p>
          </div>
          <div className="flex gap-4">
            <h1 className="font-semibold">Description: </h1>
            <p className="max-h-20 overflow-y-auto whitespace-pre-wrap ">
              {todo.description}
            </p>
          </div>
          <div className="flex gap-4">
            <h1 className="font-semibold">Due Date: </h1>
            <p>{new Date(todo.dueDate).toISOString().split("T")[0]}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onDelete(todo._id)}
            className="btn btn-square cursor-pointer"
          >
            <MdOutlineDeleteOutline className="text-2xl text-red-400" />
          </button>
          <button
            onClick={() => onEdit(todo)}
            className="btn btn-square cursor-pointer "
          >
            <MdEdit className="text-2xl text-info" />
          </button>
          {!todo?.completed && (
            <button
              onClick={() => onComplete(todo)}
              className="btn btn-square cursor-pointer"
            >
              {todo.completed ? (
                <IoIosRemoveCircleOutline />
              ) : (
                <IoMdCheckmark className="text-2xl text-success" />
              )}
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

TodoCard.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default TodoCard;
