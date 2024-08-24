import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Component/Footer";
import { PuffLoader } from "react-spinners";





const Root = () => {

    const navigation = useNavigation();
    return (
        <div className="w-full relative mx-auto" style={{ fontFamily: "Signika" }}>


            {/* <div className="">
                <Outlet />
            </div> */}

            {
                navigation.state === 'loading' ? <div className="w-full h-[660px] flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader> </div> : <Outlet></Outlet>
            }

            <div >
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