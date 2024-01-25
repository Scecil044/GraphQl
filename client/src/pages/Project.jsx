import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/ProjectQueries";
import { useParams, Link } from "react-router-dom";
import AppSpinner from "../components/AppSpinner";
import ClientInfo from "../components/ClientInfo";
import ProjectDeleteButton from "../components/ProjectDeleteButton";
import UpdateProject from "../components/UpdateProject";

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <AppSpinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      {!loading && !error && (
        <div className="px-5 flex flex-col md:flex-row gap-8 justify-center items-start">
          {/* description */}
          <div className="max-w-xl shadow-lg p-5 w-full">
            <h1 className="text-2xl font-semibold">ProjectInfo</h1>
            <div className="border border-gray-300 shadow-md p-5 my-2">
              <div>
                <h2 className="text-lg font-semibold">{data.project.title}</h2>
                <small>{data.project.status}</small>
              </div>

              <div className="mt-5">
                <h2 className="text-lg font-semibold">Description</h2>
                <small>{data.project.description}</small>
              </div>
            </div>
            <ProjectDeleteButton projectId={data.project.id} />
          </div>
          {/* Clients */}
          <div className="shadow-lg p-5 w-full max-w-md">
            <h2 className="text-lg font-semibold">Client Details</h2>
            <ClientInfo key={data.project.id} client={data.project.client} />

            <UpdateProject project={data.project} />
          </div>
        </div>
      )}
    </>
  );
}
