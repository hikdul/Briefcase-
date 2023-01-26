import { MenuBottonProps } from "./interfaces";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/menuButton.css'
import { NavLink } from "react-router-dom";

export const MenuButton = ({ label, icon, to }: MenuBottonProps) => {

  return (
    <NavLink className={ ({isActive})=> isActive ? 'list active' : 'list'} to={to}>
      <div className="anchor">
        <span className="icon">
          <FontAwesomeIcon icon={icon}/>
        </span>
        <span className="title">{label}</span>
      </div>
    </NavLink>
  );
};
