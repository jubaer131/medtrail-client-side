import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import Registation from "../Pages/Registation";
import Login from "../Pages/Login";
import PopularCampDetails from "../Pages/PopularCampDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registation></Registation>
            },
            {
                path: '/popularcampdetails/:id',
                element: <PopularCampDetails></PopularCampDetails>
            },

        ]
    },
]);

export default router