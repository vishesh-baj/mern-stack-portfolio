import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";
const LoginPage = () => {
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
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
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
