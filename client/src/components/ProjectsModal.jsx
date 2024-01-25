import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "../mutations/ProjectMutations";
import { GET_CLIENTS } from "../queries/ClientQuerIES";
import { GET_PROJECTS } from "../queries/ProjectQueries";

export default function ProjectsModal() {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("pending");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");

  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { title, status, description, clientId },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });

      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: projects.concat([addProject]) },
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title == "" || status == "" || description == "" || clientId == "") {
      alert("Please fill out all required fields!");
    }
    console.log(title, status, description, clientId);

    addProject(title, description, status, clientId);
    setTitle("");
    setStatus("pending");
    setDescription("");
    setClientId("");
    setOpenModal(false);
  };

  if (loading) return null;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      {!loading && !error && (
        <>
          <Button
            className="flex items-center gap-2"
            onClick={() => setOpenModal(true)}
          >
            <FaList className="mr-2 h-5" />
            Add Project
          </Button>
          <Modal show={openModal} onClose={() => setOpenModal(false)} size="lg">
            <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="mb-3">
                  <input
                    type="text"
                    id="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="focus:outline-none rounded-sm w-full outline-none border-gray-300"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    type="text"
                    id="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="focus:outline-none rounded-sm w-full outline-none border-gray-300"
                  />
                </div>

                <div className="mb-3">
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full"
                  >
                    <option value="pending">pending</option>
                    <option value="unpaid">unpaid</option>
                    <option value="progress">in progress</option>
                    <option value="completed">completed</option>
                  </select>
                </div>

                <div className="mb-3">
                  <select
                    id="clientId"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                    className="w-full rounded-md"
                  >
                    <option value="">Select Client</option>
                    {data.clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-3 float-end">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="py-2 px-4 rounded-sm shadow-md hover:underline bg-amber-600 text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 rounded-sm shadow-md hover:underline bg-[#0E7490] text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
}
