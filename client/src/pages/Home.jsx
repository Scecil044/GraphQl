import Clients from "../components/Clients";
import ClientsModal from "../components/ClientsModal";
import Projects from "../components/Projects";
import ProjectsModal from "../components/ProjectsModal";
export default function Home() {
  return (
    <>
      <div className="flex items-center gap-3">
        <ClientsModal />
        <ProjectsModal />
      </div>
      <Projects />
      <Clients />
    </>
  );
}
