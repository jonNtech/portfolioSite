import { NavLink } from "react-router-dom";
import profilePic from "../assets/images/ProfilePic-removebg-preview.png";

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white text-2xl  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white text-2xl hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <>
      <nav className="bg-teal-700 border-b border-teal-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-32 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* <!-- Logo --> */}
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img
                  className="h-20 w-auto pr-4"
                  src={profilePic}
                  alt="React Jobs"
                />
                <span className="hidden md:block text-white text-4xl font-bold ml-2">
                  Jon Pe&ntilde;a
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                  <NavLink to="/projects" className={linkClass}>
                    Projects
                  </NavLink>
                  <NavLink to="/pokemoncard" className={linkClass}>
                    Pokemon Card
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
