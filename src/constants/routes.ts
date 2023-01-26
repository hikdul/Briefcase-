import { Iroutes } from "../interfaces/Iroutes";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Hikdul from "../Pages/hikdul/Hikdul";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound";
import Projects from "../Pages/Projects/Projects";
import TimeLine from "../Pages/TimeLine/TimeLine";

export const routes: Iroutes[] =[
    {
        path:'/',
        element: Home,
        index: true
    },
    {
        path:'/hikdul',
        element: Hikdul 
    },
    {
        path:'/AboutMe',
        element: AboutMe 
    },
    {
        path:'Projects',
        element: Projects 
    },
    {
        path:'/TimeLine',
        element: TimeLine 
    },
    {
        path: '*',
        element: NotFound
    }
]