import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DELETE_PROJECT } from "../mutations/ProjectMutations";
import { GET_PROJECTS } from "../queries/ProjectQueries";
import { useMutation } from "@apollo/client";

export default function ProjectDeleteButton({ projectId }) {
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <>
      <button
        onClick={deleteProject}
        className="flex gap-2 items-center py-2 px-4 bg-red-600 text-white rounded-md shadow-md hover:bg-red-500"
      >
        <FaTrash />
        Delete
      </button>
    </>
  );
}
