
import { Form, Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";



const Privateroute = ({ children }) => {

    const location = useLocation()
    const { user, loading } = UseAuth()



    if (user) {
        return children
    }

    if (loading) {
        return <progress className="progress w-56 text-center"></progress>
    }

    return <Navigate to="/login" state={{ Form: location }} replace></Navigate>
};

export default Privateroute;