import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="w-full bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800 fixed top-0 left-0 z-50">
      <ul className="flex flex-wrap items-center justify-center gap-6 py-4 px-6 text-zinc-300 text-sm md:text-base font-medium tracking-wide">
        <li className="hover:text-red-500 transition-colors">
          <Link to="/home">Home</Link>
        </li>
        <li className="hover:text-red-500 transition-colors">
          <Link to="/ingenieria-software">Ingeniería de Software</Link>
        </li>
        <li className="hover:text-red-500 transition-colors">
          <Link to="/conceptos">Conceptos</Link>
        </li>
        <li className="hover:text-red-500 transition-colors">
          <Link to="/tecnicas">Técnicas</Link>
        </li>
        <li className="hover:text-red-500 transition-colors">
          <Link to="/stakeholders">Stakeholders</Link>
        </li>
        <li className="hover:text-red-500 transition-colors">
          <Link to="/glosario">Glosario</Link>
        </li>
      </ul>
    </nav>
  );
};
