import Contacto from "./Contacto";
import AboutMi from "../componentHome/AboutMi";
import { General } from "../../functions/ComponentHome";
import Herramienta from "./Herramienta";
import ComponentCards from "src/components/componentCard/ComponentCards.jsx";
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
