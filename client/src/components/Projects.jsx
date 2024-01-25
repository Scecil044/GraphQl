import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/ProjectQueries";
import ProjectCard from "./ProjectCard";
import Spinner from "./AppSpinner";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong</div>;
  return (
    <>
      {data.projects.length > 0 ? (
        <div className="flex-row flex-wrap gap-5 sm:flex sm:items-center sm:gap-8 items-center justify-center">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div>No available projects</div>
      )}
    </>
  );
}
