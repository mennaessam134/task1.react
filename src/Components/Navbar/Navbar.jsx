import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#2C3E50] py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-white text-xl font-bold tracking-wider">
          START FRAMEWORK
        </Link>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white font-semibold ${isActive ? "text-[#1ABC9C]" : ""}`
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `text-white font-semibold ${isActive ? "text-[#1ABC9C]" : ""}`
              }
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white font-semibold ${isActive ? "text-[#1ABC9C]" : ""}`
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
