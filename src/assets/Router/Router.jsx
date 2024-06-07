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
import DetailsAvailableCamp from "../Pages/DetailsAvailableCamp";
import ManageCamp from "../Dashboard/ManageCamp";
import ManageRegisterCamp from "../Dashboard/ManageRegisterCamp";
import ParticipantProfile from "../Dashboard/ParticipantProfile";
import CommonRoute from "../Layout/CommonRoute";
import Analytics from "../Dashboard/Analytics";
import ParticipantRegisteredCamp from "../Dashboard/ParticipantRegisteredCamp";
import PaymentHistory from "../Dashboard/PaymentHistory";
import UpdateManageCamp from "../Dashboard/UpdateManageCamp";
import FeedBack from "../Dashboard/FeedBack";
import Payment from "../Dashboard/Payment";
import ErrorPage from "../Pages/ErrorPage";
import Privateroute from "./Privateroute";
import OrganizerRoute from "./OrganizerRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: '/detailsavailablecamp/:id',
                element: <DetailsAvailableCamp></DetailsAvailableCamp>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <Privateroute> <DashboardLayout></DashboardLayout></Privateroute>,
        children: [
            // common route
            {
                index: true,
                element: <Privateroute> <CommonRoute></CommonRoute></Privateroute>
            },

            // organizer route
            {
                path: 'organizerprofile',
                element: <OrganizerRoute> <OrganizerProfile></OrganizerProfile></OrganizerRoute>
            },
            {
                path: 'addacamp',
                element: <OrganizerRoute> <AddaCamp></AddaCamp></OrganizerRoute>,
            },

            {
                path: 'managecamp',
                element: <OrganizerRoute><ManageCamp></ManageCamp></OrganizerRoute>
            },
            {
                path: 'updatemanagecamp/:id',
                element: <OrganizerRoute><UpdateManageCamp></UpdateManageCamp></OrganizerRoute>
            },
            {
                path: 'manageregistercamp',
                element: <OrganizerRoute><ManageRegisterCamp></ManageRegisterCamp></OrganizerRoute>
            },

            // participant route
            {
                path: 'participantprofile',
                element: <Privateroute> <ParticipantProfile></ParticipantProfile></Privateroute>
            },
            {
                path: 'analytics',
                element: <Privateroute><Analytics></Analytics></Privateroute>
            },
            {
                path: 'registeredcamp',
                element: <Privateroute><ParticipantRegisteredCamp></ParticipantRegisteredCamp></Privateroute>
            },
            {
                path: 'paymenthistory',
                element: <Privateroute><PaymentHistory></PaymentHistory> </Privateroute>
            },

            {
                path: 'feedback',
                element: <Privateroute><FeedBack></FeedBack></Privateroute>
            },
            {
                path: 'payment/:id',
                element: <Privateroute><Payment></Payment></Privateroute>
            },


        ]
    }
]);

export default router