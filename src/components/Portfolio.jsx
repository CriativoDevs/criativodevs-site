import React from "react";
import CDSimpleStore from "../assets/portfolio/cdsimplestore.png";
import dentistaApp from "../assets/portfolio/dentistapp.png";

const projects = [
  {
    id: 1,
    title: "Dentista App",
    image: dentistaApp,
    stack: ["React", "Django", "PostgreSQL"],
    problem:
      "Criar uma plataforma para agendamento e gestão de pacientes para clínicas odontológicas.",
    result:
      "Lançamento MVP com integração de agendamento online e painel administrativo; redução do tempo de gestão em 40%.",
    demo: "https://dentistapp.pythonanywhere.com/",
    code: "",
  },
  {
    id: 2,
    title: "CD Simple Store",
    image: CDSimpleStore,
    stack: ["React", "Node", "Stripe"],
    problem:
      "Loja online com checkout simples e integração com gateway de pagamentos.",
    result:
      "Checkout implementado e integrado; suporte a Webhooks e envios automatizados.",
    demo: "https://cdsimplestorefe-production.up.railway.app/",
    code: "",
  },
  {
    id: 3,
    title: "Projeto Placeholder — Analytics",
    image: null,
    stack: ["Python", "Django", "Grafana"],
    problem:
      "Coletar métricas de uso e exposição de dashboards para times de produto.",
    result:
      "Configuração de pipelines de métricas e dashboards básicos para tomada de decisão.",
    demo: "",
    code: "",
  },
  {
    id: 4,
    title: "Projeto Placeholder — Mobile",
    image: null,
    stack: ["React Native", "Expo"],
    problem: "Prova de conceito mobile para lançamento rápido em Android/iOS.",
    result: "App protótipo publicado para teste com usuários via Expo Go.",
    demo: "",
    code: "",
  },
];

const Portfolio = () => {
  return (
    <section
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-6">
          <h2 className="text-4xl mt-4 font-bold inline border-b-4 border-gray-500">
            Portfolio
          </h2>
          <p className="py-6 text-gray-300">
            Abaixo estão alguns projetos selecionados com stack, problema
            resolvido e resultado obtido.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article
              key={p.id}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center text-gray-400">
                  Imagem
                </div>
              )}

              <div className="p-4">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-gray-300">{p.problem}</p>

                <div className="mt-3">
                  <strong className="text-sm text-gray-400">Stack:</strong>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.stack.map((s, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-gray-300">
                  <strong>Resultado:</strong> {p.result}
                </p>

                <div className="mt-4 flex gap-3">
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-cyan-500 text-black rounded font-medium"
                    >
                      Demo
                    </a>
                  ) : (
                    <button
                      className="px-4 py-2 bg-gray-700 text-gray-300 rounded cursor-not-allowed"
                      disabled
                    >
                      Demo
                    </button>
                  )}

                  {p.code ? (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 border border-gray-600 rounded"
                    >
                      Código
                    </a>
                  ) : (
                    <button
                      className="px-4 py-2 border border-gray-700 rounded text-gray-400 cursor-not-allowed"
                      disabled
                    >
                      {" "}
                      Código{" "}
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
