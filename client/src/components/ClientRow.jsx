import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/ClientMutations";
import { GET_CLIENTS } from "../queries/ClientQuerIES";
import { GET_PROJECTS } from "../queries/ProjectQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],

    // This line of code is commented out to implement onDelete cascade
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  return (
    <>
      <tr>
        <td className="p-3">{client.id}</td>
        <td className="p-3">{client.name}</td>
        <td className="p-3">{client.email}</td>
        <td className="p-3">{client.phone}</td>
        <td className="p-3">
          <button className="py-1 px-2" onClick={deleteClient}>
            <FaTrash className="h-5" />
          </button>
        </td>
      </tr>
    </>
  );
}
