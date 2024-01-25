import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/ClientMutations";
import { GET_CLIENTS } from "../queries/ClientQueries";
import { FaUser } from "react-icons/fa";

export default function ClientsModal() {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: { ...clients, addClient } },
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      alert("Please fil out all the fields");
    }

    addClient(name, email, phone);

    setName("");
    setEmail("");
    setPhone("");
    setOpenModal(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="flex items-center gap-2"
      >
        <FaUser className="h-5 mr-2" />
        Add Client
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create a new client</Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="w-full focus:outline-none rounded-md"
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  className="w-full focus:outline-none rounded-md"
                  type="text"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  className="w-full focus:outline-none rounded-md"
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 float-end">
                <button
                  onClick={() => setOpenModal(false)}
                  className="py-2 px-4 rounded-md shadow-md text-white bg-amber-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 rounded-md shadow-md text-white bg-[#0E7490]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
