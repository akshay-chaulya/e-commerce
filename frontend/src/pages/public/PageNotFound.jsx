import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-8xl font-extrabold text-gray-800">404</h1>

      <p className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </p>

      <p className="mt-2 text-center text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white text-sm font-medium transition hover:bg-gray-800"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
