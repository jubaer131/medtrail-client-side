

import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseOrganizer from '../Hooks/UseOrganizer';
import { ImProfile } from "react-icons/im";
import { SiGoogleanalytics } from "react-icons/si";
import { FaCashRegister } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { FcManager } from "react-icons/fc";
import { FaRegistered } from "react-icons/fa6";
import { Helmet } from 'react-helmet';
import UseAuth from '../Hooks/UseAuth';
const DashboardLayout = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const [item, isLoading] = UseOrganizer()

    const { user, logOut } = UseAuth()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    return (
        <div className="relative min-h-screen md:flex">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-between items-center bg-gray-800 text-white px-4 py-3">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`bg-[#0055B4] text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
            >
                {/* Sidebar content */}
                <h2 className="text-2xl font-bold px-4">Sidebar</h2>
                <nav>
                    {
                        item.role === 'admin' ? <>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link className='flex items-center gap-2' to='organizerprofile'><ImProfile></ImProfile> Organizer Profile</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link className='flex items-center gap-2' to='addacamp'><MdOutlineAddPhotoAlternate></MdOutlineAddPhotoAlternate> Add a camp</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link className='flex items-center gap-2' to='managecamp'><FcManager></FcManager> Manage camp</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link className='flex items-center gap-2' to='manageregistercamp'><FaRegistered></FaRegistered> Manage register camp</Link></a>

                        </> : <>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link className='flex items-center gap-2' to='participantprofile'><ImProfile></ImProfile> Participant Profile</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link className='flex items-center gap-2' to='analytics'>< SiGoogleanalytics></SiGoogleanalytics> Analytics</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link className='flex items-center gap-2' to='registeredcamp'> <FaCashRegister></FaCashRegister> Registered Camp</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link className='flex items-center gap-2' to='paymenthistory'><MdPayment></MdPayment> Payment History</Link></a>
                        </>}




                    <div className="divider text-black"></div>
                    <div className="divider text-white"></div>
                    <div className="divider text-white"></div>

                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link className='flex items-center gap-2' to='/'><IoHomeSharp></IoHomeSharp> Home</Link></a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link className='flex items-center gap-2' ><RiLogoutCircleRFill></RiLogoutCircleRFill><button onClick={logOut}>Logout</button></Link></a>

                    {/* Add more sidebar links as needed */}
                </nav>
            </div>

            {/* Outlet --> Dynamic content */}
            <div className="flex-1 md:ml-10">
                <div className="p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
