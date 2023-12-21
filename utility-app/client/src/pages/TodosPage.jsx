import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { todosSchema } from "../validations";
import { useMutation, useQuery } from "react-query";
import { API_INSTANCE } from "../api";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { nanoid } from "nanoid";
import TodoCard from "../components/TodoCard";

const TodosPage = () => {
  const [editMode, setEditMode] = useState(false);
  const [editedObject, setEditedObject] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(todosSchema) });

  const { data: todos, refetch } = useQuery("todos", async () => {
    const response = await API_INSTANCE.get("todos/get-todos");
    return response.data;
  });

  const mutation = useMutation(
    (data) => API_INSTANCE.post("todos/create-todo", data),
    {
      onSuccess: (data) => {
        console.log("DATA", data);
        refetch();
        toast.success(`${data.data?.title} added`);
      },
    }
  );

  const deleteMutation = useMutation(
    (id) => API_INSTANCE.delete(`/todos/delete-todo/${id}`),
    {
      onSuccess: () => {
        refetch();
        toast.success("Todo deleted successfully");
      },
      onError: () => {
        toast.error("Error occured while deleting todo");
      },
    }
  );

  const editMutation = useMutation(
    ({ id, data }) => API_INSTANCE.put(`/todos/update-todo/${id}`, data),
    {
      onSuccess: (data) => {
        console.log(data);
        toast.success("Todo edited successfully");
        refetch();
      },
      onError: (error) => {
        toast.error(error);
      },
    }
  );

  const onSubmit = (data) => {
    if (editMode) {
      console.log(data);
      editMutation.mutate({ id: editedObject._id, data });
      setEditMode(false);
      reset();
    } else {
      console.log(data);
      mutation.mutate(data);
      reset();
    }
  };

  const onDelete = (id) => {
    console.log("ID: ", id);
    deleteMutation.mutate(id);
  };

  const onEdit = (todo) => {
    setEditMode(true);
    setEditedObject(todo);
    reset({
      title: todo.title,
      description: todo.description,
      dueDate: new Date(todo.dueDate).toISOString().split("T")[0],
    });
  };

  const onComplete = (todo) => {
    const completedTodo = { ...todo, completed: true };
    editMutation.mutate({ id: todo._id, data: completedTodo });
  };

  return (
    <div className="p-6 w-[96%] mx-auto bg-base-300 rounded-xl">
      <div>
        <h1 className="text-2xl">Todos</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Todo</span>
            </label>
            <input
              {...register("title")}
              className="input input-bordered"
              type="text"
              name="title"
              id=""
            />
            {errors.title && (
              <p className="text-red-400">{errors.title?.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter Todo Description</span>
            </label>
            <textarea
              {...register("description")}
              rows={3}
              className="textarea textarea-bordered"
              type="text"
              name="description"
              id=""
            />
            {errors.description && (
              <p className="text-red-400">{errors.description?.message}</p>
            )}
          </div>
          <div className="flex flex-col  md:flex-row md:items-center gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Due Date</span>
              </label>
              <input
                onChange={(e) => console.log(e.target.value)}
                {...register("dueDate")}
                className="input input-bordered"
                type="date"
                name="dueDate"
                id=""
              />
              {errors.dueDate && (
                <p className="text-red-400">{errors.dueDate?.message}</p>
              )}
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text hidden md:block">Action</span>{" "}
              </label>
              <button type="submit" className="btn btn-primary" name="" id="">
                {editMode && todos.length > 0 ? "EDIT TODO" : "ADD TODO"}
              </button>
            </div>
          </div>
        </form>
        {todos && (
          <ul className="flex flex-col  overflow-x-hidden mt-4 gap-4 max-h-[40vh] overflow-y-scroll">
            {todos.map((todo) => (
              <TodoCard
                key={nanoid()}
                todo={todo}
                onDelete={onDelete}
                onEdit={onEdit}
                onComplete={onComplete}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodosPage;
