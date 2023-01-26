import { faCoffee, faHome, faBriefcase, faH, faUserCheck  } from '@fortawesome/free-solid-svg-icons'
import { IMenuIcon } from '../interfaces/IMenuIcon';

export const MenuButtonsList: IMenuIcon[] =[
    {
       icon: faH,
        label: "Hikdul",
        to: '/hikdul'
    },
    {
        icon: faHome,
        label: "Home",
        to: '/'
    },
    {
        icon: faBriefcase,
        label: "Projects",
        to: '/Projects'
    },
    {
        icon: faCoffee,
        label: "TimeLine",
        to: '/TimeLine'
    },
    {
        icon: faUserCheck,
        label: "AboutMe",
        to: '/AboutMe'
    }
]
