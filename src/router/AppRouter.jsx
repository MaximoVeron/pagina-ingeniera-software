import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { IngenieriaSoftwarePage } from "../pages/IngenieriaSofwarePage";
import { ConceptsPage } from "../pages/ConceptsPage";
import { TecnicasDeElicitacionPage } from "../pages/TecnicasDeElicitacionPage";
import { EjemplosPracticosPage } from "../pages/EjemplosPracticosPage";
import { Stakeholders } from "../pages/StakeholdersPage";
import { ProcesoElicitacionPage } from "../pages/ProcesosDeElicitacionPage";
import { ValidacionPreparacionPage } from "../pages/ValidacionPreparacionPage";
import { DocumentacionRequerimientosPage } from "../pages/DocumentacionRequerimientosPage";
import { HerramientasPages } from "../pages/HerramientasPages";
import { GlosarioPage } from "../pages/GlosarioPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/ingenieria-software" element={<IngenieriaSoftwarePage />} />
      <Route path="/conceptos" element={<ConceptsPage />} />
      <Route path="/tecnicas" element={<TecnicasDeElicitacionPage />} />
      <Route path="/ejemplos" element={<EjemplosPracticosPage />} />
      <Route path="/stakeholders" element={<Stakeholders />} />
      <Route path="/procesos" element={<ProcesoElicitacionPage />} />
      <Route path="/validacion" element={<ValidacionPreparacionPage />} />
      <Route
        path="/documentacion"
        element={<DocumentacionRequerimientosPage />}
      />
      <Route path="/herramientas" element={<HerramientasPages />} />
      <Route path="/glosario" element={<GlosarioPage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};
