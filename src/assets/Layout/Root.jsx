import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";



const Root = () => {
    return (
        <div className="w-full relative mx-auto" style={{ fontFamily: "Signika" }}>
            <div className=" mx-auto">
                <div className="absolute w-full z-50">
                    <Navbar></Navbar>
                </div>

                <div >
                    <Outlet />
                </div>
            </div>

            <div className="">
                <Footer></Footer>
            </div>

        </div>
        // <div
        //     style={{ fontFamily: "Signika" }}
        //     className="w-full relative mx-auto"
        // >
        //     <div className="absolute w-full z-50">
        //         <Navbar setDark={setDark} path={location}></Navbar>
        //     </div>
        //     {navigation.state === "loading" ? (
        //         <div className="w-full h-96 flex items-center justify-center">
        //             {" "}
        //             <PuffLoader color="lime" size={70}></PuffLoader>{" "}
        //         </div>
        //     ) : (
        //         <ThemeContext.Provider value={{ dark }}>
        //             <Outlet></Outlet>
        //         </ThemeContext.Provider>
        //     )}
        //     <Footer></Footer>
        // </div>
    );
};

export default Root;