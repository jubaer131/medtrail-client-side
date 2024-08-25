
import { Form, Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { PuffLoader } from "react-spinners";



const Privateroute = ({ children }) => {

    const location = useLocation()
    const { user, loading } = UseAuth()



    if (user) {
        return children
    }
    if (loading) {
        return <div className="w-full h-[660px] flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader> </div>
    }
    return <Navigate to="/login" state={{ Form: location }} replace></Navigate>


};

export default Privateroute;