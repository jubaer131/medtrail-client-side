import { Link, NavLink, } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { FaTruckMedical } from "react-icons/fa6";

const Navbar = () => {

    const { user, logOut } = UseAuth()


    const options = <>

        <li><NavLink className={({ isActive }) => isActive ? 'text-emerald-400 border border-emerald-400 hover:bg-emerald-400  hover:text-white rounded-md py-[7px] px-3 font-medium text-[17px]' : 'py-[6px] px-3 font-medium  text-emerald-500 text-[17px]'} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-emerald-400 border border-emerald-400 hover:bg-emerald-400 hover:text-white rounded-md py-[7px] px-3 font-medium text-[17px]' : 'py-[6px] px-3 font-medium text-[17px] text-emerald-500 '} to='/availablecamp'>Available Camps</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-emerald-400 border border-emerald-400 hover:bg-emerald-400 hover:text-white rounded-md py-[7px] px-3 font-medium text-[17px]' : 'py-[6px] px-3 font-medium text-[17px] text-emerald-500'} to="/login">Join Us</NavLink></li>

        {/* <li><Link className="text-sm font-medium max-sm:text-black text-blue-500" to='/availablecamp'>Available Camps</Link></li>
        <li><Link className="text-sm font-medium max-sm:text-black text-blue-500" to="/login">Join Us</Link></li> */}
    </>





    return (
        <div className="navbar    shadow-sm text-white rounded-xl max-sm:py-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[1] p-3 shadow bg-base-100 rounded-box w-56">
                        {options}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-semibold text-emerald-500"><FaTruckMedical /> MEDTRAIL</a>
                {/* <div>
                    <img className="w-10 h-10 rounded-br-3xl rounded-tl-3xl rounded-tr-3xl " src="https://i.ibb.co/4TqjjKY/Blue-Black-Minimal-Simple-Corporate-Animated-Logo-2.png" alt="" />
                </div> */}
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {options}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                <li className="text-black font-semibold"><a>{user.displayName}</a></li>
                                <li className="text-black font-semibold"><Link to='/dashboard'>Dashboard</Link></li>
                                <li className="text-black font-semibold"><button onClick={logOut}>Logout</button></li>

                            </ul>
                        </div>

                    </> : ''
                }




            </div>
        </div>
    );
};

export default Navbar;