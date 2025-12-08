import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-6 text-white"
    >
      <div className="max-w-screen-lg mx-auto h-full flex flex-col justify-center">
        <header className="pb-6">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contato
          </h2>
          <p className="py-4 text-gray-300">
            Entre em contato para projetos, consultoria ou oportunidades
            profissionais.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <form
            action="https://getform.io/f/pagxjmpb"
            method="POST"
            className="flex-1 flex flex-col gap-3"
          >
            <input
              type="text"
              name="name"
              aria-label="Nome"
              placeholder="Seu nome"
              required
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="email"
              name="email"
              aria-label="Email"
              placeholder="seu@exemplo.com"
              required
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              aria-label="Mensagem"
              placeholder="Conte brevemente sobre o projeto ou oportunidade"
              rows="6"
              required
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <input
              type="hidden"
              name="_gotcha"
              style={{ display: "none" }}
            />

            <div className="flex gap-4 items-center mt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-black rounded-md font-medium hover:scale-105 transition-transform"
                aria-label="Enviar mensagem"
              >
                Enviar mensagem
              </button>

              <a
                href="https://calendly.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 border border-gray-700 rounded-md hover:bg-gray-800"
                aria-label="Agendar uma reunião (Calendly)"
              >
                Agendar reunião
              </a>
            </div>
          </form>

          <aside className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Preferência de contato</h3>
              <p className="text-gray-300 mt-2">
                Também atendo por mensagens rápidas no WhatsApp ou por email.
              </p>
              <div className="mt-4 flex gap-3 items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-green-400"
                  href="https://wa.me/message/OZNQX54WO67AO1"
                  aria-label="Enviar WhatsApp"
                >
                  <BsWhatsapp size={24} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg text-sm text-gray-300">
              <p>
                Ao enviar uma mensagem, seus dados serão encaminhados apenas
                para fins de contato profissional. Se preferir, envie um email
                para
                <a
                  href="mailto:contato@criativodevs.online"
                  className="text-cyan-300 ml-1"
                >
                  contato@criativodevs.online
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
