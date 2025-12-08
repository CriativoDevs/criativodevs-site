import React from "react";
import GitHub from "../assets/github.png";
import Django from "../assets/django.png";
import JavaScript from "../assets/javascript.png";
import Python from "../assets/python.png";
import ReactJS from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Python,
      title: "Python",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: Django,
      title: "Django",
      style: "shadow-green-800",
    },
    {
      id: 4,
      src: ReactJS,
      title: "ReactJS",
      style: "shadow-blue-300",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-green-100",
    },
    {
      id: 6,
      src: GitHub,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen exp_height"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className=" text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tecnologias
          </p>
          <p className=" py-6">
            Tecnologias utilizadas nos projetos e estudos.
          </p>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt=""
                className=" w-20 mx-auto"
              />
              <p className=" mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
