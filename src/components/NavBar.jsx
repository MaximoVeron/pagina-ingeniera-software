import { Link } from "react-router";

export const NavBar = () => {
  return (
    <nav className="w-full bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800 fixed top-0 left-0 z-50">
      <ul className="flex flex-wrap items-center justify-center gap-6 py-4 px-6 text-zinc-300 text-sm md:text-base font-medium tracking-wide">
        <li className="hover:text-red-500 transition-colors cursor-pointer">
          Home
        </li>
        <li className="hover:text-red-500 transition-colors cursor-pointer">
          Sobre la Ingeniería de Software
        </li>

        <li className="hover:text-red-500 transition-colors cursor-pointer">
          Juegos
        </li>
        <li className="hover:text-red-500 transition-colors cursor-pointer">
          Glosario
        </li>
        <li className="hover:text-red-500 transition-colors cursor-pointer">
          <Link to="/ingenieria-software">Sobre la Ingeniería de Software</Link>
        </li>
      </ul>
    </nav>
  );
};
