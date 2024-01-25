import { Accordion } from "flowbite-react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_PROJECT } from "../mutations/ProjectMutations";
import { GET_PROJECT } from "../queries/ProjectQueries";
import { GET_CLIENTS } from "../queries/ClientQueries";
import AppSpinner from "./AppSpinner";

export default function UpdateProject({ project }) {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [clientId, setClientId] = useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, title, description, status, clientId },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title == "" || status == "" || description == "") {
      alert("Please fill out all required fields!");
    }
    updateProject(title, description, status, clientId);
  };

  if (loading) return <AppSpinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      {!loading && !error && (
        <div>
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title>Update Project</Accordion.Title>
              <Accordion.Content>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 space-y-1">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      className="w-full focus:outline-none rounded-md"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 space-y-1">
                    <label htmlFor="title">Description</label>
                    <textarea
                      type="text"
                      id="description"
                      value={description}
                      className="w-full focus:outline-none rounded-md"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 space-y-1">
                    <label htmlFor="title">Status</label>
                    <select
                      id="status"
                      value={status}
                      className="w-full focus:outline-none rounded-md"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="pending">pending</option>
                      <option value="unpaid">unpaid</option>
                      <option value="progress">in progress</option>
                      <option value="completed">completed</option>
                    </select>
                  </div>

                  <div className="mb-3 space-y-1">
                    <label htmlFor="title">Client</label>
                    <select
                      id="clientId"
                      value={clientId}
                      className="w-full focus:outline-none rounded-md"
                      onChange={(e) => setClientId(e.target.value)}
                    >
                      <option value="">select client</option>
                      {data.clients.map((client) => (
                        <option key={client.id} value={client.id}>
                          {client.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-2 px-4 text-white bg-[#0E7490] shadow-sm rounded-md"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      )}
    </>
  );
}
