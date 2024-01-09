import Contacto from "./Contacto";
import ComponentCards from "../componentCard/componentCards";
import AboutMi from "../componentHome/AboutMi";
import { General } from "../../functions/ComponentHome";
import Herramienta from "./Herramienta";

const Home = () => {
  return (
    <General>
      <AboutMi />
      <ComponentCards name="DESTACADOS" />
      <Herramienta />
      <Contacto />
    </General>
  );
};

export default Home;
