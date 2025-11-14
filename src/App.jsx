import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TecnicasDeElicitacion from "./pages/TecnicasDeElicitacionPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tecnicas" element={<TecnicasDeElicitacion />} />
      </Routes>
    </BrowserRouter>
  );
}
