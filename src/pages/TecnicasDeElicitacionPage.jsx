
export const TecnicasDeElicitacionPage = () => {
  return (
    <section className="tecnicas-elicitacion">
      {/* Título principal de la sección */}
      <h2>3. Técnicas de Elicitación</h2>
      <p>
        La elicitación de requerimientos es un proceso fundamental dentro de la
        Ingeniería de Software, ya que permite comprender qué necesita el
        cliente, los usuarios y los demás involucrados en un proyecto. Existen
        diversas técnicas para obtener esta información, y cada una es adecuada
        para contextos diferentes. A continuación, se presentan las técnicas más
        utilizadas, con sus características principales y ejemplos prácticos.
      </p>

      <hr />

      {/* --- TÉCNICA 1: ENTREVISTAS --- */}
      <article className="tecnica-item">
        <h3>✔ Entrevistas</h3>
        <p>
          <strong>Qué son:</strong>
          Las entrevistas son una técnica directa de recolección de información
          que consiste en reunirse con los stakeholders para preguntarles sobre
          sus necesidades, expectativas y problemas actuales. Permiten obtener
          información detallada y contextual.
        </p>

        <strong>Tipos de entrevistas:</strong>
        <ul>
          <li>
            <strong>Estructuradas:</strong> Todas las preguntas están definidas
            de antemano, en un orden fijo. Son útiles para obtener datos muy
            específicos.
          </li>
          <li>
            <strong>Semiestructuradas:</strong> Tienen una guía de preguntas,
            pero permiten flexibilidad para profundizar en ciertos temas. Son
            las más utilizadas en Ingeniería de Software.
          </li>
          <li>
            <strong>No estructuradas:</strong> No siguen un guion. Funcionan
            como una conversación abierta para explorar ideas cuando se conoce
            poco del sistema.
          </li>
        </ul>

        <strong>Ventajas:</strong>
        <ul>
          <li>Permiten profundizar en detalles.</li>
          <li>
            Fomentan la comunicación directa y la relación con el cliente.
          </li>
          <li>Facilitan aclarar dudas en el momento.</li>
        </ul>

        <strong>Desventajas:</strong>
        <ul>
          <li>Requieren tiempo.</li>
          <li>
            Pueden depender demasiado de la disponibilidad del entrevistado.
          </li>
          <li>La información puede ser subjetiva.</li>
        </ul>

        <strong>Ejemplos de preguntas:</strong>
        <ul>
          <li>¿Qué tareas realiza diariamente en el sistema actual?</li>
          <li>
            ¿Cuáles son las principales dificultades que encuentra en el
            proceso?
          </li>
          <li>¿Qué información necesita ver primero al iniciar sesión?</li>
          <li>¿Qué funcionalidades considera indispensables?</li>
        </ul>
      </article>

      {/* --- TÉCNICA 2: ENCUESTAS --- */}
      <article className="tecnica-item">
        <h3>✔ Encuestas / Cuestionarios</h3>
        <p>
          <strong>Definición:</strong>
          Las encuestas consisten en formular una serie de preguntas cerradas o
          abiertas a un grupo amplio de usuarios con el fin de obtener datos
          cuantitativos o tendencias generales sobre sus necesidades o
          preferencias.
        </p>
        <p>
          <strong>Tipos de preguntas:</strong>
          Cerradas: opciones predefinidas (sí/no, múltiple opción). Escalas:
          tipo Likert (1 al 5). Abiertas: permiten respuestas libres y
          detalladas.
        </p>
        <p>
          <strong>Casos de uso:</strong>
          Cuando se necesita la opinión de un gran número de usuarios. Para
          obtener información estadística y patrones comunes. Cuando el tiempo o
          los recursos para entrevistas son limitados.
        </p>
        <p>
          <strong>Buenas prácticas:</strong>
          Evitar preguntas ambiguas. Hacer preguntas breves y directas. Usar un
          orden lógico (general → específico). Limitar la encuesta a un tiempo
          razonable (3–5 minutos).
        </p>
      </article>

      {/* --- TÉCNICA 3: OBSERVACIÓN --- */}
      <article className="tecnica-item">
        <h3>✔ Observación (pasiva / activa)</h3>
        <p>
          <strong>Qué es:</strong>
          La observación consiste en estudiar cómo los usuarios realizan sus
          tareas en su entorno real. Permite descubrir necesidades o problemas
          que los usuarios no mencionan explícitamente.
        </p>
        <p>
          <strong>Cuándo se utiliza:</strong>
          Cuando se requiere entender el flujo de trabajo real. En contextos
          donde los usuarios no pueden describir adecuadamente sus procesos.
          Para validar información obtenida previamente.
        </p>
        <p>
          <strong>Qué datos se obtienen:</strong>
          Tiempos y secuencias de las tareas. Uso de herramientas y recursos.
          Problemas frecuentes o pasos innecesarios. Desviaciones entre el
          proceso ideal y el real.
        </p>
      </article>

      {/* --- TÉCNICA 4: BRAINSTORMING --- */}
      <article className="tecnica-item">
        <h3>✔ Brainstorming</h3>
        <p>
          <strong>Objetivo:</strong>
          Generar una gran cantidad de ideas en poco tiempo, sin restricciones,
          con el propósito de explorar posibles requerimientos o soluciones.
        </p>

        <strong>Reglas de aplicación:</strong>
        <ul>
          <li>No juzgar las ideas durante la sesión.</li>
          <li>Fomentar la participación de todos.</li>
          <li>Construir sobre las ideas de otros.</li>
          <li>Registrar todas las aportaciones.</li>
        </ul>

        <strong>Resultados esperados:</strong>
        <ul>
          <li>Listado amplio de ideas o posibles requerimientos.</li>
          <li>Alternativas para resolver un problema específico.</li>
          <li>Identificación de necesidades no consideradas previamente.</li>
        </ul>
      </article>

      {/* --- TÉCNICA 5: PROTOTIPOS --- */}
      <article className="tecnica-item">
        <h3>✔ Prototipos</h3>

        <strong>Tipos: mockups, wireframes y prototipos interactivos:</strong>
        <ul>
          <li>
            Wireframes: bocetos simples que muestran la estructura general de
            una interfaz.
          </li>
          <li>Mockups: versiones más detalladas con diseño visual.</li>
          <li>
            Prototipos interactivos: simulaciones navegables del sistema (por
            ejemplo, en Figma).
          </li>
        </ul>

        <strong>Beneficios para entender el sistema:</strong>
        <ul>
          <li>Ayudan a los usuarios a visualizar el producto final.</li>
          <li>Facilitan identificar requerimientos faltantes o confusos.</li>
          <li>Permiten validar flujos de navegación tempranamente.</li>
          <li>Reducen malentendidos entre usuarios y desarrolladores.</li>
        </ul>
      </article>

      {/* --- TÉCNICA 6: ANÁLISIS DE DOCUMENTOS --- */}
      <article className="tecnica-item">
        <h3>✔ Análisis de documentos</h3>

        <strong>Qué revisar:</strong>
        <ul>
          <li>Manuales del sistema actual</li>
          <li>Diagramas de procesos</li>
          <li>Informes de la organización</li>
          <li>Formularios, reportes y bases de datos</li>
          <li>Reglamentaciones y políticas internas</li>
        </ul>

        <strong>Cómo identificar requerimientos desde documentación:</strong>
        <ul>
          <li>Buscar datos redundantes o inconsistentes.</li>
          <li>Analizar qué información se genera o se necesita.</li>
          <li>Identificar procesos que pueden automatizarse o mejorarse.</li>
          <li>Comparar documentación con el flujo real de trabajo.</li>
        </ul>
      </article>

      {/* --- TÉCNICA 7: TALLERES --- */}
      <article className="tecnica-item">
        <h3>✔ Talleres (Workshops)</h3>

        <strong>Cómo se organizan:</strong>
        <ul>
          <li>
            Los talleres son sesiones grupales donde varios stakeholders
            trabajan junto al equipo de desarrollo para explorar, discutir y
            definir requerimientos.
          </li>
          <li>
            Incluyen actividades como debates, prototipado rápido, lluvia de
            ideas o priorización.
          </li>
        </ul>

        <strong>Participantes:</strong>
        <ul>
          <li>Representantes de usuarios</li>
          <li>Clientes o patrocinadores</li>
          <li>Analistas de negocio</li>
          <li>Diseñadores y desarrolladores</li>
          <li>Facilitador o moderador</li>
        </ul>

        <strong>Resultados:</strong>
        <ul>
          <li>Consenso sobre los requerimientos clave del proyecto.</li>
          <li>Priorización basada en las necesidades reales.</li>
          <li>Clarificación de conflictos o puntos de vista divergentes.</li>
          <li>
            Artefactos generados en grupo (modelos, diagramas, listas de req).
          </li>
        </ul>
      </article>
    </section>
  );
};

// Exportas el componente para poder usarlo en otro archivo
