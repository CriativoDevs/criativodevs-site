import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <header className="pb-2">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre
          </h2>
        </header>

        <div className="mt-8 space-y-6 text-lg">
          <p>
            Sou Engenheiro Full Stack com mais de 5 anos de experiência
            entregando soluções web e mobile para clientes B2B e startups. Minha
            atuação foca em transformar requisitos complexos em aplicações
            robustas e escaláveis, com ênfase em qualidade, observabilidade e
            entrega contínua.
          </p>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Principais entregas</h3>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>
                APIs REST com Django & Django REST Framework para produtos em
                produção.
              </li>
              <li>
                Aplicações React com experiência de usuário responsiva e
                performática.
              </li>
              <li>
                Aplicativos móveis híbridos com React Native / Expo para
                lançamentos rápidos.
              </li>
              <li>
                Automação de deploys com Docker, pipelines CI/CD e práticas de
                observabilidade.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Como eu trabalho</h3>
            <p className="mt-2 text-gray-300">
              Adoto uma abordagem pragmática: começo por entender o problema de
              negócio, priorizo entregas iterativas (MVP → produção) e garanto
              qualidade com testes automatizados e revisão de código. Valorizo
              comunicação clara com stakeholders e documentação das decisões
              técnicas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Como entrego valor</h3>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>
                Redução de tempo de entrega através de arquiteturas modulares e
                testes.
              </li>
              <li>
                Melhoria de performance e custos com otimizações de backend e
                consultas SQL.
              </li>
              <li>
                Confiabilidade em produção com monitoramento, logs estruturados
                e alertas.
              </li>
            </ul>
          </div>

          <p className="text-gray-400">
            Estou disponível para projetos de desenvolvimento, consultoria
            técnica e colaboração com equipes que queiram escalar produtos com
            segurança e qualidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
