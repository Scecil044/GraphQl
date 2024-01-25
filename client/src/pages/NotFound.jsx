import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4 items-center">
        <FaExclamationTriangle className="text-red-700 h-24 w-24" />
        <h1>Page Not Found</h1>
        <Link
          to="/"
          className="bg-pink-700 text-white py-2 px-4 rounded-md shadow-lg hover:bg-pink-600"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
