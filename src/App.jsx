import { NavBar } from "./components/NavBar";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <>
      <AppRouter />
      <NavBar />
    </>
  );
};
