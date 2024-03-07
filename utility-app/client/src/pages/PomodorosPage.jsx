import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { pomodoroValidationSchema } from "../validations";
import { useState } from "react";
import { PomodoroSection } from "../components";
const PomodorosPage = () => {
  const [pomodoroConfig, setPomodoroConfig] = useState({});
  const [isPomodoroActive, setIsPomodoroActive] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(pomodoroValidationSchema) });

  const onSubmit = (data) => {
    setPomodoroConfig(data);
    setIsPomodoroActive((prevState) => !prevState);
    reset();
    console.log("DATA: ", data);
  };

  const handleReset = () => {
    setIsPomodoroActive((prevState) => !prevState);
    setPomodoroConfig({});
    reset();
  };

  return (
    <section>
      <div className="p-6 w-[96%] mx-auto bg-base-300 rounded-xl">
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
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </form>
      </div>
      {isPomodoroActive && (
        <PomodoroSection config={pomodoroConfig} onReset={handleReset} />
      )}
    </section>
  );
};

export default PomodorosPage;
