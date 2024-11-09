import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import AppLayout from "./components/layouts/AppLayout"
import Landing from "./pages/landing"
import Movies from "./pages/movies"
import Tvs from "./pages/tvs"
import Search from "./pages/search"
import Profile from "./pages/profile"
import MovieDetail from "./pages/movieDetail"



function App() {
const router = createBrowserRouter([
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
                        element:<MovieDetail />
                    } // Add more path later
                ]
            },
            {
                path:'/tvs',
                element:<Tvs/>
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



  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
