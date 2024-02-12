import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";

const PageNotFoundPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Page Not Found</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to={PATHS.dashboard} className="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFoundPage;
