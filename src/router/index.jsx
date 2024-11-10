import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import AppLayout from "../components/layouts/AppLayout"
import Landing from "../pages/landing"
import Movies from "../pages/movies"
import Tvs from "../pages/tvs"
import Search from "../pages/search"
import Profile from "../pages/profile"
import MovieDetail from "../pages/movieDetail"


 const  router = createBrowserRouter([
    {
        element:<AppLayout />,
        children:[
            {
                path:'/',
                element:<Landing />
            },
            {
                path:'/movies',
                element:<Movies />,
                children:[
                    {
                        path:":id",
                        element:<MovieDetail />,
                        children:[
                            {
                                path:'cast',
                                element:<MovieDetail />
                            },
                            {
                                path:'reviews',
                                element:<MovieDetail />
                            },
                            {
                                path:'similar',
                                element:<MovieDetail />
                            },
                        ]
                    }
                ]
            },
            {
                path:'/tvs',
                element:<Tvs/>,
                // children:[
                //     {
                //         path:":id",
                //         element:<TvDetail />,
                //         children:[
                //             {
                //                 path:'/cast',
                //                 element:<TvDetail />
                //             },
                //             {
                //                 path:'/reviews',
                //                 element:<TvDetail />
                //             },
                //             {
                //                 path:'/similar',
                //                 element:<TvDetail />
                //             },
                //         ]
                //     }
                // ]
            },
            {
                path:'/search',
                element:<Search />
            },
            {
                path:'/profile',
                element:<Profile />
            }
        ]
    }
])

export default router;
