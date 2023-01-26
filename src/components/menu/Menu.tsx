import "./css/menu.css";
import { MenuButton } from "./MenuButton";
import { Indicator } from "./indicator";
import { MenuButtonsList } from "../../constants/InitialMenuState";

//TODO: Generar un grid para posicionar todo el esquema general de la app e 3 partes(left-center-rigth); esto para apreciar a mejor marena el responsive

const Menu = () => {

  return (
      <div className="cont-navigate">
        <div className="navigation">
          <nav>
            {MenuButtonsList.map((route) => (
              <MenuButton key={route.label} {...route} />
            ))}
            <Indicator />
          </nav>
        </div>
      </div>
  );
};

export default Menu;
