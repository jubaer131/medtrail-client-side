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
            },
            {
                path: '/detailsavailablecamp/:id',
                element: <DetailsAvailableCamp></DetailsAvailableCamp>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            // common route
            {
                index: true,
                element: <CommonRoute></CommonRoute>
            },

            // organizer route
            {
                path: 'organizerprofile',
                element: <OrganizerProfile></OrganizerProfile>
            },
            {
                path: 'addacamp',
                element: <AddaCamp></AddaCamp>
            },

            {
                path: 'managecamp',
                element: <ManageCamp></ManageCamp>
            },
            {
                path: 'updatemanagecamp/:id',
                element: <UpdateManageCamp></UpdateManageCamp>
            },
            {
                path: 'manageregistercamp',
                element: <ManageRegisterCamp></ManageRegisterCamp>
            },

            // participant route
            {
                path: 'participantprofile',
                element: <ParticipantProfile></ParticipantProfile>
            },
            {
                path: 'analytics',
                element: <Analytics></Analytics>
            },
            {
                path: 'registeredcamp',
                element: <ParticipantRegisteredCamp></ParticipantRegisteredCamp>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'feedback',
                element: <FeedBack></FeedBack>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },


        ]
    }
]);

export default router