import { Link, NavLink, } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { FaTruckMedical } from "react-icons/fa6";
import UseOrganizer from "../Hooks/UseOrganizer";
import { useEffect, useState } from "react";

const Navbar = () => {

    const { user, logOut } = UseAuth()
    const [item, isLoading] = UseOrganizer()
    const [theme, setTheme] = useState('light');


    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme]);

    const handleTheme = e => {
        if (e.target.checked) {
            setTheme('coffee')
        } else {
            setTheme('light')
        }
    }


    const options = <>

        <li><NavLink className={({ isActive }) => isActive ? 'text-emerald-400 border border-emerald-400 hover:bg-emerald-400  hover:text-white rounded-md py-[7px] px-3 font-medium text-[17px]' : 'py-[6px] px-3 font-medium  text-emerald-500 text-[17px]'} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-emerald-400 border border-emerald-400 hover:bg-emerald-400 hover:text-white rounded-md py-[7px] px-3 font-medium text-[17px]' : 'py-[6px] px-3 font-medium text-[17px] text-emerald-500 '} to='/availablecamp'>Available Camps</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-emerald-400 border border-emerald-400 hover:bg-emerald-400 hover:text-white rounded-md py-[7px] px-3 font-medium text-[17px]' : 'py-[6px] px-3 font-medium text-[17px] text-emerald-500'} to="/aboutUs">About Us</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-emerald-400 border border-emerald-400 hover:bg-emerald-400 hover:text-white rounded-md py-[7px] px-3 font-medium text-[17px]' : 'py-[6px] px-3 font-medium text-[17px] text-emerald-500'} to="/login">Join Us</NavLink></li>

        {
            item.role === 'admin' ? <>  <li><NavLink className={({ isActive }) => isActive ? 'text-emerald-400 border border-emerald-400 hover:bg-emerald-400 hover:text-white rounded-md py-[7px] px-3 font-medium text-[17px]' : 'py-[6px] px-3 font-medium text-[17px] text-emerald-500'} to='/dashboard/organizerprofile'>Dashboard</NavLink></li>  </> : <> <li><NavLink className={({ isActive }) => isActive ? 'text-emerald-400 border border-emerald-400 hover:bg-emerald-400 hover:text-white rounded-md py-[7px] px-3 font-medium text-[17px]' : 'py-[6px] px-3 font-medium text-[17px] text-emerald-500'} to='/dashboard/participantprofile'>Dashboard</NavLink></li> </>
        }

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
                {/* <a className="btn btn-ghost text-xl font-semibold text-emerald-500"><FaTruckMedical /> MEDTRAIL</a> */}
                <a className="flex justify-start items-center btn btn-ghost ">
                    <img className="w-10 h-10 rounded-3xl rounded-tl-3xl rounded-tr-3xl " src="https://i.ibb.co.com/wScWqbF/ACH-Tree.png" alt="" />
                    <button className=" text-xl font-semibold text-emerald-500"> MEDTRAIL</button>
                </a>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {options}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <div>
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleTheme} type="checkbox" className="theme-controller" value="coffee" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current text-emerald-300 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current text-emerald-300 w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>

                {
                    user ? <>

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                <li className="text-emerald-400 font-semibold"><a>{user.displayName}</a></li>
                                {
                                    item.role === 'admin' ? <>  <li className="text-emerald-400 font-semibold"><Link to='/dashboard/organizerprofile'> Dashboard</Link></li></> : <> <li className="text-emerald-400 font-semibold flex"><Link to='/dashboard/participantprofile'>Dashboard</Link></li></>
                                }

                                <li className="text-emerald-400 font-semibold"><button onClick={logOut}>Logout</button></li>

                            </ul>
                        </div>


                    </> : ""
                }




            </div>
        </div >
    );
};

export default Navbar;