import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { IMenuIcon } from "../../interfaces/IMenuIcon";

const LinkV2 = ({ to, label, icon }: IMenuIcon) => {
  return (
    <NavLink className="link" to={to}>
      <FontAwesomeIcon icon={icon} />
      <span className="name">{label}</span>
    </NavLink>
  );
};

export default LinkV2;
