export const Stakeholders = () => {
  return (
    <section className="stakeholders-info">
      {/* Título principal de la sección */}
      <h2>5. Stakeholders</h2>
      <p>
        Los stakeholders son actores fundamentales en cualquier proyecto de
        software. Entender quiénes son, cuál es su rol y cómo clasificarlos es
        indispensable para realizar una elicitación de requerimientos efectiva.
        Una identificación incorrecta o incompleta de stakeholders suele
        conducir a sistemas con funcionalidades inadecuadas, requerimientos
        faltantes o expectativas mal definidas.
      </p>

      <hr />

      {/* --- 5.1 ¿Qué es un stakeholder? --- */}
      <article className="stakeholder-definition">
        <h3>5.1 ¿Qué es un stakeholder?</h3>
        <p>
          Un stakeholder es cualquier persona, grupo u organización que tiene
          interés, influencia o se ve afectado por el sistema de software que se
          va a desarrollar.
        </p>
        <ul>
          <li>
            Pueden ser usuarios que interactúan directamente con el sistema,
            clientes que lo financian, miembros del equipo técnico que lo
            construyen, o incluso entidades externas que establecen normativas.
          </li>
          <li>
            En términos simples: son todos aquellos que tienen algo en juego
            respecto al éxito del proyecto.
          </li>
        </ul>
      </article>

      {/* --- 5.2 Tipos de Stakeholders --- */}
      <article className="stakeholder-types">
        <h3>5.2 Tipos de Stakeholders</h3>
        <p>
          Los stakeholders pueden clasificarse de diversas maneras, según su
          rol, relación con el sistema o nivel de influencia. Las
          clasificaciones ayudan a organizar el proceso de elicitación y a
          determinar qué información aporta cada grupo.
        </p>

        <h4>a. Primarios / Secundarios</h4>
        <p>
          <strong>Stakeholders primarios:</strong>
        </p>
        <ul>
          <li>
            Son los que interactúan directamente con el sistema o cuyos
            intereses se ven más afectados por él.
          </li>
          <li>
            Ejemplo: usuarios finales, operarios, empleados que usarán el
            software cada día.
          </li>
        </ul>
        <p>
          <strong>Stakeholders secundarios:</strong>
        </p>
        <ul>
          <li>
            No usan el sistema directamente, pero están relacionados con él de
            forma indirecta.
          </li>
          <li>
            Ejemplo: departamentos administrativos, gerentes que reciben
            reportes generados por el sistema.
          </li>
        </ul>

        <h4>b. Internos / Externos</h4>
        <p>
          <strong>Internos:</strong>
        </p>
        <ul>
          <li>
            Pertenecen a la organización donde se implementará el sistema.
          </li>
          <li>Ejemplo: empleados, directivos, técnicos de TI.</li>
        </ul>
        <p>
          <strong>Externos:</strong>
        </p>
        <ul>
          <li>
            No pertenecen a la organización, pero se ven afectados por el
            software o influyen en él.
          </li>
          <li>
            Ejemplo: proveedores, clientes externos, organismos reguladores.
          </li>
        </ul>

        <h4>c. Usuario final</h4>
        <p>
          El usuario final es quien utilizará el sistema diariamente.
          Representan una de las fuentes de información más importantes, ya que
          conocen de primera mano las necesidades del trabajo, los errores del
          sistema actual y las mejoras necesarias.
        </p>
        <p>
          <strong>Ejemplos:</strong>
        </p>
        <ul>
          <li>Estudiantes que utilizarán una plataforma educativa.</li>
          <li>Cajeros que operan un sistema de ventas.</li>
          <li>
            Enfermeros que registran información en un sistema hospitalario.
          </li>
        </ul>

        <h4>d. Cliente</h4>
        <p>
          El cliente es la persona u organización que solicita y financia el
          proyecto. Su perspectiva está orientada a objetivos de negocio,
          plazos, costos y alcance.
        </p>
        <p>
          <strong>Ejemplos:</strong>
        </p>
        <ul>
          <li>
            El director de un instituto que contrata un sistema de gestión
            académica.
          </li>
          <li>
            Una empresa que encarga un software para mejorar su producción.
          </li>
        </ul>

        <h4>e. Patrocinador (Sponsor)</h4>
        <p>
          Es quien provee los recursos económicos o autorizaciones necesarias
          para que el proyecto exista. No siempre interactúa con el sistema,
          pero tiene un alto poder de decisión.
        </p>
        <p>
          <strong>Ejemplos:</strong>
        </p>
        <ul>
          <li>Un gerente general que aprueba el presupuesto.</li>
          <li>Un gobierno municipal que financia una plataforma digital.</li>
        </ul>

        <h4>f. Equipo técnico</h4>
        <p>
          Incluye a los desarrolladores, analistas, diseñadores y otros
          profesionales que trabajan en la construcción del sistema.
        </p>
        <p>
          Aportan una perspectiva técnica esencial, como limitaciones,
          viabilidad, costos de desarrollo y restricciones tecnológicas.
        </p>
        <p>
          <strong>Ejemplos:</strong>
        </p>
        <ul>
          <li>Programadores backend</li>
          <li>Diseñadores UX/UI</li>
          <li>Analistas funcionales</li>
          <li>DevOps</li>
        </ul>
      </article>

      {/* --- 5.3 Técnicas para Identificarlos --- */}
      <article className="stakeholder-techniques">
        <h3>5.3 Técnicas para Identificarlos</h3>
        <p>
          Para asegurar que ningún stakeholder relevante quede fuera, es común
          aplicar técnicas simples pero efectivas:
        </p>

        <ol>
          <li>
            <strong>Análisis del Organigrama:</strong> Revisar la estructura
            jerárquica de la organización para identificar áreas y roles
            involucrados.
          </li>
          <li>
            <strong>Reuniones iniciales con el cliente:</strong> Permiten
            comprender quiénes usan, gestionan o se benefician del sistema.
          </li>
          <li>
            <strong>Revisión de procesos existentes:</strong> Ayuda a descubrir
            usuarios, departamentos y actores implicados en cada etapa del G
            flujo de trabajo.
          </li>
          <li>
            <strong>Mapas de actores:</strong> Diagramas visuales que
            representan a todos los stakeholders y sus relaciones con el
            sistema.
          </li>
          <li>
            <strong>Entrevistas exploratorias:</strong> Conversaciones iniciales
            con personas clave que pueden ayudar a identificar otros actores
            relevantes.
          </li>
        </ol>
      </article>

      {/* --- 5.4 Ejemplos Reales de Stakeholders --- */}
      <article className="stakeholder-examples">
        <h3>5.4 Ejemplos Reales de Stakeholders</h3>

        <p>
          <strong>Ejemplo 1: Sistema de Gestión Escolar</strong>
        </p>
        <ul>
          <li>Estudiantes (usuarios finales)</li>
          <li>Docentes (usuarios primarios)</li>
          <li>Equipo directivo (clientes)</li>
          <li>Administración escolar (stakeholders secundarios)</li>
          <li>Ministerio de Educación (externo / regulador)</li>
          <li>Equipo de TI (interno, técnico)</li>
        </ul>

        <p>
          <strong>Ejemplo 2: Aplicación para un supermercado</strong>
        </p>
        <ul>
          <li>Cajeros (usuarios finales)</li>
          <li>Gerentes de tienda (clientes)</li>
          <li>Área de inventario (primarios)</li>
          <li>Contadores (secundarios)</li>
          <li>Proveedores (externos)</li>
          <li>Desarrolladores (técnicos)</li>
        </ul>

        <p>
          <strong>Ejemplo 3: Sistema de salud hospitalario</strong>
        </p>
        <ul>
          <li>Médicos y enfermeros (usuarios finales)</li>
          <li>Pacientes (stakeholders indirectos)</li>
          <li>Administración del hospital (cliente)</li>
          <li>Reguladores sanitarios (externos)</li>
          <li>Equipo técnico del hospital (internos)</li>
        </ul>
      </article>
    </section>
  );
};
