import React from "react";
// import HeroImage from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight, MdOutlineMail } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Engenheiro Full Stack
            <span className="text-cyan-400">
              {" "}
              — Python, Django, React & SaaS
            </span>
          </h1>
          <p className="text-gray-300 py-4 max-w-md">
            Engenheiro Full Stack com mais de 5 anos entregando soluções
            escaláveis, APIs de alta performance e aplicações móveis orientadas
            a resultados. Ajudo equipes e produtos a irem do protótipo à
            produção com qualidade e observabilidade.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              aria-label="Ver portfolio"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight
                  size={25}
                  className="ml-1"
                />
              </span>
            </Link>

            <Link
              to="contact"
              smooth
              duration={500}
              aria-label="Contrate-me / Entrar em contato"
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-white bg-transparent hover:bg-white hover:text-black transition-colors"
            >
              Contrate-me
              <MdOutlineMail
                size={20}
                className="ml-2"
              />
            </Link>
          </div>
        </div>
        {/* <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl max-w-0.5 w-2/3 md:w-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
