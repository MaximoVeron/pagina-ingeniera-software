export const ValidacionPreparacionPage = () => {
  return (
    <>
      <div>
        <h2>Validación y Priorización</h2>
        <p>
          Explica cómo confirmar que los requerimientos sean correctos,
          completos y alineados con lo que el cliente realmente necesita, además
          de cómo organizarlos según importancia y valor para el proyecto.
        </p>
      </div>

      <div>
        <h2>Validación</h2>
        <p>
          La validación consiste en verificar que los requerimientos
          documentados representan exactamente lo que el cliente y los usuarios
          esperan del sistema. Métodos comunes:
          <ul>
            <li>
              <strong>Revisión con el cliente:</strong> sesiones presenciales o
              remotas donde se repasan los requerimientos.
            </li>
            <li>
              <strong>Validación con prototipos:</strong> maquetas visuales que
              permiten confirmar funcionalidades antes de desarrollarlas.
            </li>
            <li>
              <strong>Validación por pares:</strong> otros analistas revisan los
              requerimientos para detectar errores o inconsistencias.
            </li>
          </ul>
        </p>
      </div>

      <div>
        <h2>Priorización</h2>
        <p>
          La priorización permite decidir qué requerimientos se implementarán
          primero según su importancia, valor para el negocio y urgencia.
          Métodos comunes:
          <ul>
            <li>
              <strong>MoSCoW:</strong> Must (obligatorios), Should
              (importantes), Could (opcionales), Won’t (no se harán ahora).
            </li>
            <li>
              <strong>Kano:</strong> Clasifica funcionalidades según el impacto
              en la satisfacción del usuario.
            </li>
            <li>
              <strong>100 puntos:</strong> cada stakeholder distribuye 100
              puntos entre los requerimientos más valiosos.
            </li>
            <li>
              <strong>Comparación por pares:</strong> se comparan requerimientos
              de dos en dos para determinar cuál es más importante.
            </li>
          </ul>
        </p>
      </div>
    </>
  );
};
