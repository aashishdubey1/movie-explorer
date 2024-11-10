import { LuSearch } from "react-icons/lu";
import { LuFilm } from "react-icons/lu";
import { LuTv } from "react-icons/lu";
import { LuHome } from "react-icons/lu";


 const navigation = [
    {
        label:"Search",
        path:"/search",
        icon: <LuSearch />
    },
    {
        label:"Movies",
        path:"/movies",
        icon: <LuFilm />
    },
    {
        label:"TVs",
        path:"/tvs",
        icon:<LuTv />
    },
]

const mobileNavigation = [

    {
        label:"Home",
        icon:<LuHome />,
        path:'/'
    },
    ...navigation,
]

export {navigation,mobileNavigation}
