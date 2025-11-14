import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export const IngenieriaSoftwarePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8 relative">
        <Loading />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
      <div className="container mx-auto max-w-5xl">
        
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Introducción a la{" "}
          <span className="text-red-500">Ingeniería de Software</span>
        </h1>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card Template */}
          {[
            {
              title: "📌 ¿Qué es?",
              text: "La ingeniería de software es la disciplina que aplica métodos científicos, técnicos y sistemáticos para desarrollar, mantener y mejorar software de calidad."
            },
            {
              title: "🧩 Objetivo",
              text: "Su propósito es crear software confiable, eficiente y mantenible, reduciendo errores y costos."
            },
            {
              title: "⚙️ Fases",
              text: "Incluye análisis, diseño, implementación, pruebas, despliegue y mantenimiento."
            },
            {
              title: "👥 Roles",
              text: "Participan analistas, desarrolladores, testers, arquitectos, líderes de proyecto y stakeholders."
            },
            {
              title: "🔍 Importancia",
              text: "Permite planificar, documentar, gestionar riesgos y crear soluciones escalables."
            },
            {
              title: "📐 Métodos",
              text: "Incluye Cascada, Ágil, Scrum, XP y DevOps."
            }
          ].map((card, index) => (
            <section
              key={index}
              className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-800
              transition transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-600/10 duration-300 opacity-0
              animate-fadeIn"
            >
              <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
              <p className="text-zinc-300 leading-relaxed">{card.text}</p>
            </section>
          ))}

        </div>
      </div>
    </main>
  );
};

