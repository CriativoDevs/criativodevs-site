import React from "react";

const StackCard = ({ title, items, seniority }) => (
  <div className="bg-gray-900 p-6 rounded-xl shadow-md">
    <h4 className="text-2xl font-semibold mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2 mb-3">
      {items.map((it, i) => (
        <span
          key={i}
          className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded"
        >
          {it}
        </span>
      ))}
    </div>
    <div className="text-sm text-gray-300">{seniority}</div>
  </div>
);

const Stack = () => {
  const cards = [
    {
      id: "backend",
      title: "Backend",
      items: ["Python", "Django", "Django REST Framework", "Postgres", "SQL"],
      seniority: "+5 anos — produção real, APIs de alta performance",
    },
    {
      id: "frontend",
      title: "Frontend",
      items: ["React", "Tailwind CSS", "React Hooks", "Accessibility"],
      seniority: "+5 anos — SPAs responsivas e performáticas",
    },
    {
      id: "devops",
      title: "DevOps",
      items: ["Docker", "CI/CD", "GitHub Actions", "Observability"],
      seniority: "+4 anos — containers, pipelines e deploys automatizados",
    },
    {
      id: "cloud",
      title: "Cloud (AWS)",
      items: ["EC2", "S3", "RDS", "IAM"],
      seniority: "Em evolução — estudos e pequenas integrações em produção",
    },
  ];

  return (
    <section
      name="stack"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-12"
    >
      <div className="container max-w-screen-lg mx-auto px-4">
        <header className="pb-6">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Main Stack
          </h2>
          <p className="mt-4 text-gray-300">
            Resumo das principais tecnologias usadas, com nível de senioridade e
            contexto de produção.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {cards.map((c) => (
            <StackCard
              key={c.id}
              title={c.title}
              items={c.items}
              seniority={c.seniority}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
