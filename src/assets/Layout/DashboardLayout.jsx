

import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const isOrganizer = true

    return (
        <div className="relative min-h-screen md:flex">
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
                        isOrganizer ? <>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link to='/dashboard'>Organizer Profile</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link to='addacamp'>Add a camp</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link>Manage camp</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link>Manage register camp</Link></a>

                        </> : <>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link >Analytics</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link >Participant Profile</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link >Registered Camp</Link></a>
                            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link >Payment History</Link></a>
                        </>
                    }


                    <div className="divider text-black"></div>
                    <div className="divider text-white"></div>
                    <div className="divider text-white"></div>

                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link to='/'>Home</Link></a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"><Link>Logout</Link></a>

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
