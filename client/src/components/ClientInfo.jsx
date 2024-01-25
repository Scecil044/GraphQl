import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

export default function ClientInfo({ client }) {
  return (
    <div className="border flex flex-col gap-3 border-gray-300 shadow-md p-5 my-2">
      <div className="flex items-center gap-2">
        <FaIdBadge /> <p>{client?.name}</p>
      </div>
      <div className="flex items-center gap-2">
        <FaEnvelope /> <p>{client?.email}</p>
      </div>
      <div className="flex items-center gap-2">
        <FaPhone /> <p>{client?.phone}</p>
      </div>
    </div>
  );
}
