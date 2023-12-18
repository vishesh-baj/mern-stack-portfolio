import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validations";
import { useMutation } from "react-query";
import { API_INSTANCE } from "../api";
import { toast } from "react-hot-toast";
const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const mutation = useMutation(
    (data) => API_INSTANCE.post("/auth/sign-up", data),
    {
      onSuccess: (data) => {
        toast.success(data.data?.message);
        navigate(PATHS.login);
      },
      onError: (data) => {
        toast.error(data?.response?.data?.error);
      },
    }
  );

  const onSubmit = (data) => {
    return mutation.mutate(data);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vero
            aperiam accusamus sequi nobis blanditiis neque ipsam error, sint hic
            repellendus debitis architecto ducimus dolor aliquam ut minus
            aspernatur reprehenderit maiores dolorem doloribus.
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
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-400">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                {...register("username")}
                type="text"
                placeholder="Username"
                className="input input-bordered"
              />
              {errors.username && (
                <p className="text-red-400">{errors.username?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-400">{errors.password?.message}</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
                <Link
                  to={PATHS.login}
                  className="label-text-alt link link-hover"
                >
                  Already have account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
