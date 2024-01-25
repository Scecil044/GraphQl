import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="shadow-md p-5 bg-gray-100">
      <div className="flex justify-between items-center gap-5">
        <h1>{project?.title}</h1>
        <Link
          to={`/project/${project.id}`}
          className="py-1 px-3 shadow-sm bg-blue-100"
        >
          View
        </Link>
      </div>
    </div>
  );
}
