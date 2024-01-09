import Contacto from "./Contacto";
import AboutMi from "../componentHome/AboutMi";
import { General } from "../../functions/ComponentHome";
import Herramienta from "./Herramienta";
import ComponentCards from "../componentCard/componentCards";


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
