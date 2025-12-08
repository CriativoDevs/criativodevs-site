import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "Sobre" },
    { id: 3, link: "portfolio", label: "Portfolio" },
    { id: 4, link: "stack", label: "Stack" },
    { id: 5, link: "contact", label: "Contato" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black/60 backdrop-blur-md">
      <div>
        <h1 className="text-5xl font-signature ml-2">Criativo Devs</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, label }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200"
          >
            <Link
              to={link}
              smooth
              duration={500}
            >
              {label}
            </Link>
          </li>
        ))}

        <li className="px-4">
          <Link
            to="contact"
            smooth
            duration={500}
            className="px-4 py-2 bg-primary text-black rounded-md font-medium"
          >
            Contrate-me
          </Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {label}
              </Link>
            </li>
          ))}

          <li className="px-4 py-6">
            <Link
              onClick={() => setNav(!nav)}
              to="contact"
              smooth
              duration={500}
              className="px-6 py-3 bg-primary text-black rounded-md"
            >
              Contrate-me
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
