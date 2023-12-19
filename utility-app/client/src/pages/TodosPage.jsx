import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { todosSchema } from "../validations";

const TodosPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(todosSchema) });

  const onSubmit = (data) => {
    console.log(data);
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
      </div>
    </div>
  );
};

export default TodosPage;
