import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { todosSchema } from "../validations";
import { useMutation, useQuery } from "react-query";
import { API_INSTANCE } from "../api";
import { toast } from "react-hot-toast";
const TodosPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(todosSchema) });

  const {
    data: todos,
    isLoading,
    isError,
    refetch,
  } = useQuery("todos", async () => {
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

  const onSubmit = (data) => {
    mutation.mutate(data);
    reset();
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
          <div className="flex items-center gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Due Date</span>
              </label>
              <input
                {...register("dueDate")}
                className="input input-bordered"
                type="date"
                name=""
                id=""
              />
              {errors.dueDate && (
                <p className="text-red-400">{errors.dueDate?.message}</p>
              )}
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Action</span>{" "}
                {/* Add some text here */}
              </label>
              <button type="submit" className="btn btn-primary" name="" id="">
                Add Todo
              </button>
            </div>
          </div>
        </form>
        {todos && (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.title} - {todo.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodosPage;
