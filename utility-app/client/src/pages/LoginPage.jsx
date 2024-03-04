import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations";
import { useMutation } from "react-query";
import { API_INSTANCE } from "../api";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setUser, setToken } from "../features/auth/authSlice";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const mutation = useMutation(
    (data) => API_INSTANCE.post("/auth/login", data),
    {
      onSuccess: (data) => {
        dispatch(setUser(data.data?.username));
        dispatch(setToken(data.data?.token));
        toast.success(data.data?.message);
        localStorage.setItem("token", data?.data?.token);
        localStorage.setItem("username", data.data?.username);
        navigate(PATHS.home);
      },
      onError: (error) => {
        console.log(error);
        toast.error(error?.response?.data?.error);
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
          <h1 className="text-5xl font-bold">Login now!</h1>
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
                <span className="label-text">Username</span>
              </label>
              <input
                {...register("username")}
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered"
              />
              {errors?.username && (
                <p className="text-red-400">{errors?.username?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors?.password && (
                <p className="text-red-400">{errors?.password?.message}</p>
              )}
              <label className="label">
                <Link
                  to={PATHS.forgotPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
                <Link
                  to={PATHS.signup}
                  className="label-text-alt link link-hover"
                >
                  Register
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

export default LoginPage;
