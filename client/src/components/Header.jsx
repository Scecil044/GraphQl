import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="w-full min-h-16 shadow-lg p-5 items-center mb-3 text-[#0E7490] font-bold text-2xl">
        <Link to="/">GraphQL</Link>
      </header>
    </>
  );
}
