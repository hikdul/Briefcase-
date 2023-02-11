import { Imedia } from "../interfaces/Imedia"
import { faLink  } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt  } from '@fortawesome/free-regular-svg-icons'

export const listMediaLinks: Imedia[] = [
    {
        to: 'https://www.linkedin.com/in/hikdul',
        icon: faFileAlt 
    },
    {
        to: 'https://github.com/hikdul',
        icon: faLink
    },
]
