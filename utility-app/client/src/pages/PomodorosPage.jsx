import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { pomodoroValidationSchema } from "../validations";
const PomodorosPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(pomodoroValidationSchema) });

  const onSubmit = (data) => {
    console.log("DATA: ", data);
  };

  return (
    <section className="p-6 w-[96%] mx-auto bg-base-300 rounded-xl">
      <div>
        <h1 className="text-2xl">Pomodoros</h1>
        <form
          className="grid grid-cols-3 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control col-span-3">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              className="input input-bordered"
              {...register("title")}
              type="text"
              name="title"
              id="title"
            />
            {errors?.title && (
              <p className="text-red-400">{errors.title?.message}</p>
            )}
          </div>
          <div className="form-control col-span-1">
            <label className="label">
              <span className="label-text">Break Time</span>
            </label>
            <input
              className="input input-bordered"
              {...register("breakTime")}
              type="number"
              name="breakTime"
              id="breakTime"
              defaultValue={2}
            />
            {errors?.breakTime && (
              <p className="text-red-400">{errors.breakTime?.message}</p>
            )}
          </div>
          <div className="form-control col-span-1">
            <label className="label">
              <span className="label-text">Intervel Time</span>
            </label>
            <input
              className="input input-bordered"
              {...register("intervelTime")}
              type="number"
              name="intervelTime"
              id="intervelTime"
              defaultValue={25}
            />
            {errors?.intervelTime && (
              <p className="text-red-400">{errors.intervelTime?.message}</p>
            )}
          </div>
          <div className="form-control col-span-1">
            <label className="label">
              <span className="label-text">Number of Interverls</span>
            </label>
            <input
              className="input input-bordered"
              {...register("intervelCount")}
              type="number"
              name="intervelCount"
              id="intervelCount"
              defaultValue={4}
            />
            {errors?.intervelCount && (
              <p className="text-red-400">{errors.intervelCount?.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Start
          </button>
        </form>
      </div>
    </section>
  );
};

export default PomodorosPage;
