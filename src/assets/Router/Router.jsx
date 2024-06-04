import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import Registation from "../Pages/Registation";
import Login from "../Pages/Login";
import PopularCampDetails from "../Pages/PopularCampDetails";
import DashboardLayout from "../Layout/DashboardLayout";
import OrganizerProfile from "../Dashboard/OrganizerProfile";
import AddaCamp from "../Dashboard/AddaCamp";
import AvailableCamp from "../Pages/AvailableCamp";


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
            {
                path: '/availablecamp',
                element: <AvailableCamp></AvailableCamp>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [

            {
                index: true,
                element: <OrganizerProfile></OrganizerProfile>
            },
            {
                path: 'addacamp',
                element: <AddaCamp></AddaCamp>
            },

        ]
    }
]);

export default router