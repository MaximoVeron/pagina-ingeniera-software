export const ConceptsPage = () => {
  return (
    <>
      <div> 
        <h2>¿Qué son los requerimientos?</h2>
        <p>
          Son descripciones de lo que el sistema debe hacer y cómo debe
          comportarse. Representan las necesidades del cliente, del usuario y de
          la organización. En simples palabras: son las reglas, funciones y
          condiciones que el software debe cumplir.
        </p>
      </div>

      <div>
        <h2>Requerimientos Funcionales</h2>
        <p>
          Describen las acciones, funciones o comportamientos específicos que el
          sistema debe realizar.
          <ul>
            <li>El sistema debe permitir registrar usuarios.</li>
            <li>El sistema debe enviar un email de confirmación.</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Requerimientos No Funcionales</h2>
        <p>
          Describen cómo debe ser el sistema en términos de calidad,
          rendimiento, seguridad, usabilidad, disponibilidad, etc.
          <ul>
            <li>El sistema debe cargar en menos de 2 segundos.</li>
            <li>La aplicación debe estar disponible el 99.9% del tiempo.</li>
          </ul>
        </p>
      </div>

      <div>
        <h2>¿Qué es la Elicitación?</h2>
        <p>
          Es el proceso de descubrir, recopilar y entender las necesidades de
          los usuarios, clientes y demás partes interesadas. Incluye
          entrevistas, encuestas, observación, talleres y análisis de
          documentos.
        </p>
      </div>

      <div>
        <h2>
          Diferencia entre Elicitación, Análisis, Especificación y Validación
        </h2>
        <p>
          <strong>Elicitación:</strong> proceso de obtener y recolectar
          requerimientos.
          <br />
          <strong>Análisis:</strong> organizar, refinar y detectar
          inconsistencias en los requerimientos.
          <br />
          <strong>Especificación:</strong> documentar los requerimientos de
          forma clara, precisa y verificable.
          <br />
          <strong>Validación:</strong> confirmar con el cliente que los
          requerimientos son correctos y completos.
        </p>
      </div>

      <div>
        <h2>Tipos de Requerimientos</h2>
        <p>
          <ul>
            <li>
              <strong>Requerimientos de Usuario:</strong> descripciones
              generales en lenguaje natural de lo que el usuario espera del
              sistema.
            </li>
            <li>
              <strong>Requerimientos de Negocio:</strong> representan los
              objetivos organizacionales que justifican el proyecto.
            </li>
            <li>
              <strong>Requerimientos Técnicos:</strong> condiciones relacionadas
              con tecnología, infraestructura o arquitectura necesarias.
            </li>
            <li>
              <strong>Requerimientos del Sistema:</strong> versiones detalladas
              y técnicas de los requerimientos de usuario.
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};
