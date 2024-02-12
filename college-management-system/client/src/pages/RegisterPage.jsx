import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validations";
import { useMutation } from "react-query";
import { API_INSTANCE } from "../api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { PATHS } from "../routes/paths";

const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const mutation = useMutation(
    (data) => API_INSTANCE.post("auth/register", data),
    {
      onSuccess: (responseData) => {
        console.log(responseData);
        navigate(PATHS.login);
      },
      onError: (error) => {
        console.error("Register failed:", error);
        toast("Error occured");
      },
    }
  );

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-xs text-rose-500">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                {...register("firstName")}
                name="firstName"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.firstName && (
                <p className="text-xs text-rose-500">
                  {errors.firstName?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                {...register("lastName")}
                name="lastName"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.lastName && (
                <p className="text-xs text-rose-500">
                  {errors.lastName?.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-xs text-rose-500">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("password")}
                name="confirmPassword"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.confirmPassword && (
                <p className="text-xs text-rose-500">
                  {errors.confirmPassword?.message}
                </p>
              )}
              <label className="label">
                <Link
                  to={PATHS.login}
                  className="label-text-alt link link-hover"
                >
                  Already have account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
