import { NavLink } from "react-router-dom";
import { Imedia } from "../../interfaces/Imedia";
import './css/mediaLinks.css'

const MediaLink = ({ to, icon }: Imedia) => {
  return (
    <NavLink className="link" target="_blank" to={to}>
        <img src={icon} className="media-icon" alt="logo" />
    </NavLink>
  );
};

export default MediaLink;
