import { Form, Navigate, useLocation } from "react-router-dom"
import UseAuth from "../Hooks/UseAuth"
import UseOrganizer from "../Hooks/UseOrganizer"

const OrganizerRoute = ({ children }) => {

    const [item, isLoading] = UseOrganizer()
    const { user, loading } = UseAuth()

    const location = useLocation()



    if (user && item.role === 'admin') {
        return children;
    }

    if (loading || isLoading) {
        return <progress className="progress w-56 text-center"></progress>
    }
    return <Navigate to="/" state={{ Form: location }} replace></Navigate>


}

export default OrganizerRoute;