export const DocumentacionRequerimientosPage = () => {
  return (
    <>
      <div>
        <h2>Documentación de Requerimientos</h2>
        <p>
          Explica cómo transformar la información obtenida en la elicitación en
          artefactos formales, claros y verificables que guíen el desarrollo del
          sistema.
        </p>
      </div>

      <div>
        <h2>SRS (Software Requirement Specification)</h2>
        <p>
          Un SRS es un documento formal donde se describen detalladamente los
          requerimientos funcionales, no funcionales y las restricciones del
          sistema. Sirve como contrato entre cliente y equipo técnico.
        </p>
      </div>

      <div>
        <h2>Estructura Estándar IEEE 830</h2>
        <p>
          Guía internacional que define cómo debe organizarse un documento SRS.
          Sus secciones comunes incluyen:
          <ul>
            <li>Introducción y propósito</li>
            <li>Descripción general</li>
            <li>Requerimientos específicos</li>
            <li>Modelos, diagramas y anexos</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Historias de Usuario</h2>
        <p>
          Son descripciones breves y simples de funcionalidades vistas desde la
          perspectiva del usuario final. Útiles en metodologías ágiles.
        </p>
      </div>

      <div>
        <h2>Formato de Historias de Usuario</h2>
        <p>
          Se utiliza la siguiente estructura:
          <ul>
            <li>
              <strong>Como</strong> &lt;tipo de usuario&gt;
            </li>
            <li>
              <strong>Quiero</strong> &lt;función o acción&gt;
            </li>
            <li>
              <strong>Para</strong> &lt;beneficio o propósito&gt;
            </li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Criterios de Aceptación</h2>
        <p>
          Condiciones que deben cumplirse para considerar que una historia de
          usuario está completa. Son verificables, medibles y eliminan
          ambigüedad.
        </p>
      </div>

      <div>
        <h2>Diagramas Utilizados en la Documentación</h2>
        <p>
          Se emplean para representar procesos, comportamientos y relaciones del
          sistema.
          <ul>
            <li>
              <strong>Casos de Uso + Descripciones:</strong> muestran las
              interacciones entre usuarios y el sistema.
            </li>
            <li>
              <strong>BPMN:</strong> modela flujos de trabajo y procesos de
              negocio.
            </li>
            <li>
              <strong>Diagramas de Actividad:</strong> representan flujos de
              actividades internas del sistema.
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};
