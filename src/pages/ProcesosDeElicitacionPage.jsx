
export const ProcesoElicitacionPage = () => {
  return (
    <section className="proceso-elicitacion">
      {/* Título principal de la sección */}
      <h2>4. Proceso de Elicitación</h2>
      <p>
        El proceso de elicitación de requerimientos es una serie de actividades
        ordenadas que permiten obtener, analizar y validar la información
        necesaria para definir qué debe hacer un sistema de software. Este
        proceso no se limita a recopilar datos, sino que implica comunicarse
        activamente con los stakeholders, interpretar sus necesidades y
        transformarlas en requerimientos claros y útiles.
      </p>
      <p>
        A continuación, se presenta cada etapa explicada paso a paso tal como
        ocurre en un proyecto real.
      </p>

      <hr />

      {/* Usamos una lista ordenada (<ol>) porque estos son 
        pasos secuenciales de un proceso.
      */}
      <ol className="pasos-proceso">
        {/* --- PASO 1: STAKEHOLDERS --- */}
        <li className="paso-item">
          <h3>Identificación de Stakeholders</h3>
          <p>
            El primer paso es determinar quiénes están involucrados o afectados
            por el sistema. Un stakeholder puede ser un usuario final, un
            cliente, un patrocinador, un gerente, un operador o cualquier
            persona que tenga relación con el sistema.
          </p>

          <p>
            <strong>¿Por qué es importante?</strong>
          </p>
          <ul>
            <li>Garantiza que no se pasen por alto perspectivas clave.</li>
            <li>Reduce el riesgo de requerimientos incompletos o sesgados.</li>
            <li>Asegura que cada grupo relevante sea escuchado.</li>
          </ul>

          <p>
            <strong>Actividades típicas</strong>
          </p>
          <ul>
            <li>Revisión de organigramas.</li>
            <li>Reuniones iniciales con el cliente.</li>
            <li>Identificación de roles, responsabilidades y necesidades.</li>
          </ul>
        </li>

        {/* --- PASO 2: SELECCIÓN DE TÉCNICAS --- */}
        <li className="paso-item">
          <h3>Selección de Técnicas Apropiadas</h3>
          <p>
            Una vez identificados los stakeholders, se debe decidir qué técnicas
            de elicitación son más adecuadas para cada grupo.
          </p>

          <p>
            <strong>Factores para seleccionar técnicas</strong>
          </p>
          <ul>
            <li>Disponibilidad de los usuarios.</li>
            <li>Nivel de experiencia de los stakeholders.</li>
            <li>Necesidad de obtener datos cualitativos o cuantitativos.</li>
            <li>Complejidad del sistema.</li>
            <li>Tiempo y recursos disponibles.</li>
          </ul>

          <p>
            <strong>Ejemplos</strong>
          </p>
          <ul>
            <li>Usuarios finales → observación y prototipos.</li>
            <li>Directivos → entrevistas semiestructuradas.</li>
            <li>Gran cantidad de usuarios → encuestas.</li>
          </ul>
        </li>

        {/* --- PASO 3: PREPARACIÓN --- */}
        <li className="paso-item">
          <h3>Preparación de Entrevistas y Encuestas</h3>
          <p>
            Antes de ejecutar cualquier actividad, es necesario planificarla
            cuidadosamente.
          </p>

          <p>
            <strong>Tareas de preparación</strong>
          </p>
          <ul>
            <li>Definir los objetivos de cada sesión.</li>
            <li>Elaborar guiones de entrevistas o cuestionarios.</li>
            <li>
              Preparar material de apoyo (diagramas, prototipos, ejemplos).
            </li>
            <li>Coordinar horarios con los participantes.</li>
            <li>
              Establecer reglas básicas (duración, confidencialidad, registro).
            </li>
          </ul>

          <p>
            <strong>Beneficio de la preparación</strong>
          </p>
          <p>
            Una buena planificación aumenta la calidad de la información
            obtenida y evita sesiones improductivas.
          </p>
        </li>

        {/* --- PASO 4: EJECUCIÓN --- */}
        <li className="paso-item">
          <h3>Ejecución de las Actividades</h3>
          <p>
            En esta etapa se llevan a cabo las técnicas seleccionadas con los
            stakeholders.
          </p>

          <p>
            <strong>Ejemplos de actividades</strong>
          </p>
          <ul>
            <li>Realizar entrevistas cara a cara o virtuales.</li>
            <li>Aplicar encuestas.</li>
            <li>Observar a los usuarios en su entorno real.</li>
            <li>Facilitar talleres colaborativos.</li>
            <li>Conducir sesiones de brainstorming.</li>
            <li>Presentar prototipos para obtener feedback.</li>
          </ul>

          <p>
            <strong>Buenas prácticas</strong>
          </p>
          <ul>
            <li>Escuchar activamente.</li>
            <li>No interrumpir al usuario.</li>
            <li>Ser neutral y evitar influenciar respuestas.</li>
            <li>
              Registrar toda la información (notas, grabaciones, fotos, etc.).
            </li>
          </ul>
        </li>

        {/* --- PASO 5: RECOLECCIÓN --- */}
        <li className="paso-item">
          <h3>Recolección de la Información</h3>
          <p>
            Una vez ejecutadas las actividades, se deben reunir y organizar los
            datos obtenidos.
          </p>

          <p>
            <strong>Acciones típicas</strong>
          </p>
          <ul>
            <li>Transcribir entrevistas.</li>
            <li>Analizar respuestas de encuestas.</li>
            <li>Clasificar notas de observación.</li>
            <li>Organizar ideas generadas en talleres.</li>
            <li>Registrar hallazgos en herramientas colaborativas.</li>
          </ul>

          <p>
            <strong>Objetivo</strong>
          </p>
          <p>
            Transformar información dispersa en un conjunto estructurado de
            conocimientos.
          </p>
        </li>

        {/* --- PASO 6: ANÁLISIS --- */}
        <li className="paso-item">
          <h3>Análisis Inicial</h3>
          <p>
            El análisis permite comprender, depurar y refinar la información
            recopilada.
          </p>

          <p>
            <strong>Tareas realizadas</strong>
          </p>
          <ul>
            <li>Identificar requerimientos explícitos e implícitos.</li>
            <li>Detectar contradicciones.</li>
            <li>Encontrar duplicaciones o inconsistencias.</li>
            <li>Ordenar los requerimientos según temas o módulos.</li>
            <li>Determinar cuáles son factibles técnica y económicamente.</li>
          </ul>

          <p>
            <strong>Resultado esperado</strong>
          </p>
          <p>
            Un primer borrador de requerimientos que representa las necesidades
            reales del sistema.
          </p>
        </li>

        {/* --- PASO 7: PRIORIZACIÓN --- */}
        <li className="paso-item">
          <h3>Priorización de Requerimientos</h3>
          <p>
            No todos los requerimientos tienen la misma importancia. La
            priorización permite determinar cuáles deben implementarse primero.
          </p>

          <p>
            <strong>Métodos comunes</strong>
          </p>
          <ul>
            <li>MoSCoW: Must, Should, Could, Won’t.</li>
            <li>
              100 puntos: los usuarios distribuyen puntos según importancia.
            </li>
            <li>
              Modelo Kano: clasifica los requerimientos según su impacto en la
              satisfacción del usuario.
            </li>
          </ul>

          <p>
            <strong>Objetivo</strong>
          </p>
          <p>
            Construir una visión clara sobre lo esencial, lo deseable y lo
            opcional.
          </p>
        </li>

        {/* --- PASO 8: DOCUMENTACIÓN --- */}
        <li className="paso-item">
          <h3>Documentación</h3>
          <p>
            Una vez definidos y priorizados los requerimientos, estos deben
            documentarse formalmente.
          </p>

          <p>
            <strong>Formatos habituales</strong>
          </p>
          <ul>
            <li>Documento SRS (Software Requirements Specification).</li>
            <li>Historias de usuario.</li>
            <li>Casos de uso y diagramas asociados.</li>
            <li>Listas de requerimientos funcionales y no funcionales.</li>
            <li>Matrices de trazabilidad.</li>
          </ul>

          <p>
            <strong>Importancia</strong>
          </p>
          <p>
            La documentación asegura que todos los involucrados compartan la
            misma comprensión del sistema.
          </p>
        </li>

        {/* --- PASO 9: VALIDACIÓN --- */}
        <li className="paso-item">
          <h3>Validación con el Cliente</h3>
          <p>
            La última etapa consiste en confirmar que los requerimientos
            documentados reflejan correctamente las necesidades del cliente.
          </p>

          <p>
            <strong>Métodos de validación</strong>
          </p>
          <ul>
            <li>Revisión del documento SRS.</li>
            <li>Validación mediante prototipos.</li>
            <li>Reuniones de revisión y aprobación.</li>
            <li>Pruebas de concepto.</li>
          </ul>

          <p>
            <strong>Resultado final</strong>
          </p>
          <p>
            Un conjunto de requerimientos claros, validados y aprobados que
            servirán como base para el diseño y desarrollo del sistema.
          </p>
        </li>
      </ol>
    </section>
  );
};
