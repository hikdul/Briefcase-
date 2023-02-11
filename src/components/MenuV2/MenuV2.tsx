import { NavLink } from "react-router-dom";
import { MenuButtonsList } from "../../constants/InitialMenuState";
import { listMediaLinks } from "../../constants/mediaLinks";
import LinkV2 from "./LinkV2";
import MediaLink from "./MediaLink";
import "./menu.css";

export const MenuV2 = () => {
  return (
    <nav>
      <div className="header">
        <NavLink to="/" className="cont-icon">
          <i className="icon icon-jera"></i>
        </NavLink>
      </div>
      <div className="body">
        <div className="cont-links">
          {MenuButtonsList.map((l) => (
            <LinkV2 key={l.label} {...l} />
          ))}
        </div>
      </div>
      <div className="footer">
        <hr />
        <div className="cont-medias">
          {listMediaLinks.map((l) => (
            <MediaLink key={l.to} {...l} />
          ))}
        </div>
      </div>
    </nav>
  );
};
