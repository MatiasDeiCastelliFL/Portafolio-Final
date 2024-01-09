import Contacto from "./Contacto";
import AboutMi from "../componentHome/AboutMi";
import { General } from "../../functions/ComponentHome";
import Herramienta from "./Herramienta";
import Component from "../componentCard/Component";




const Home = () => {
  return (
    <General>
      <AboutMi />
      <Component name="DESTACADOS" />
      <Herramienta />
      <Contacto />
    </General>
  );
};

export default Home;
