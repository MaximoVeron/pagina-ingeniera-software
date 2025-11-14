import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);

  // Simulación de carga (como si fuese un fetch)
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
      <div className="container mx-auto max-w-4xl">
        {/* Título de Bienvenida */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Bienvenido al módulo de{" "}
          <span className="text-red-500">Elicitación de Requerimientos</span>
        </h1>

        {/* Objetivo del sitio */}
        <section className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-800 mb-10">
          <h2 className="text-2xl font-bold mb-3"> Objetivo</h2>
          <p className="text-zinc-300 leading-relaxed">
            Brindar una visión clara y educativa sobre qué es la elicitación de
            requerimientos, su importancia dentro del desarrollo de software y
            cómo los estudiantes pueden aplicar estas técnicas para obtener
            soluciones más efectivas.
          </p>
        </section>

        {/* ¿Qué es la elicitación? */}
        <section className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-800 mb-10">
          <h2 className="text-2xl font-bold mb-3">
            ¿Qué es la elicitación de requerimientos?
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Es el proceso mediante el cual se recopila información de usuarios,
            clientes y otras partes interesadas para entender qué necesita y
            espera el sistema que se va a desarrollar. Es básicamente “sacar a
            la luz” los requerimientos reales de un proyecto.
          </p>
        </section>

        {/* Importancia */}
        <section className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-800 mb-10">
          <h2 className="text-2xl font-bold mb-3"> Importancia</h2>
          <p className="text-zinc-300 leading-relaxed">
            La elicitación es esencial para evitar errores, malos entendidos y
            costos innecesarios. Un software bien definido desde el inicio tiene
            mayor calidad, menos retrabajo y satisface mejor las necesidades del
            usuario.
          </p>
        </section>

        {/* Organización del sitio */}
        <section className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-800 mb-10">
          <h2 className="text-2xl font-bold mb-3">
            {" "}
            ¿Cómo está organizada esta página?
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            El sitio está dividido en secciones que explican los conceptos clave
            de la elicitación: definición, técnicas más usadas y ejemplos. Cada
            parte incluye contenido breve, visual y accesible.
          </p>
        </section>

        {/* Enlaces directos */}
        <section className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">
            ¿Por donde te gustaria empezar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              to="/ingenieria-software"
              className="py-4 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg shadow-red-600/20"
            >
              Ingeniería de Software
            </Link>
            <Link
              to="/conceptos"
              className="py-4 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg shadow-red-600/20"
            >
              Conceptos
            </Link>
            <Link
              to="/tecnicas"
              className="py-4 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg shadow-red-600/20"
            >
              Técnicas de Elicitación
            </Link>
            <Link
              to="/ejemplos"
              className="py-4 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg shadow-red-600/20"
            >
              Ejemplos Prácticos
            </Link>
            <Link
              to="/stakeholders"
              className="py-4 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg shadow-red-600/20"
            >
              Stakeholders
            </Link>
            <Link
              to="/procesos"
              className="py-4 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg shadow-red-600/20"
            >
              Procesos de Elicitación
            </Link>
            <Link
              to="/validacion"
              className="py-4 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg shadow-red-600/20"
            >
              Validación y Preparación
            </Link>
            <Link
              to="/documentacion"
              className="py-4 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg shadow-red-600/20"
            >
              Documentación de Requerimientos
            </Link>
            <Link
              to="/herramientas"
              className="py-4 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg shadow-red-600/20"
            >
              Herramientas
            </Link>
            <Link
              to="/glosario"
              className="py-4 px-6 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg shadow-red-600/20"
            >
              Glosario
            </Link>
          </div>
        </section>

        {/* Imagen/Esquema */}
        <section className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-800 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Esquema general del proceso
          </h2>

          <img
            src="/images/proceso-elicitacion.png" // cámbialo por tu ruta real
            alt="Esquema del proceso de elicitación"
            className="mx-auto rounded-xl shadow-lg"
          />

          <p className="text-zinc-400 mt-4 text-sm">
            (Análisis → Recolección → Validación → Documentación)
          </p>
        </section>
      </div>
    </main>
  );
};
