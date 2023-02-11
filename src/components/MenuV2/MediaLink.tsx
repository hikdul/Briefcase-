import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import { Imedia } from "../../interfaces/Imedia"

const MediaLink = ({to, icon}: Imedia) =>{
    
    return(

                <NavLink className="media" target="_blank" to={to}>
                    <FontAwesomeIcon icon={icon}/>
                </NavLink>
    )
}

export default MediaLink