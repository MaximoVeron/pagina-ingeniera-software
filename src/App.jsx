import { NavBar } from "./components/NavBar";
("./components/NavBar.jsx");
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <>
      <AppRouter />
      <NavBar />
    </>
  );
};
