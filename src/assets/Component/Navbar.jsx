import { Link, NavLink } from "react-router-dom";


const Navbar = () => {



    const options = <>

        <li><Link to="/">Home</Link></li>
        <li><Link>Available Camps</Link></li>
        <li><Link>Join Us</Link></li>
    </>





    return (
        <div className="navbar  fixed container mx-auto  bg-[#0055B4] z-10 shadow-sm text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {options}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">MedTrail</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {options}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <li className="text-black"><a>Settings</a></li>
                        <li className="text-black"><a>Settings</a></li>
                        <li className="text-black"><a>Settings</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;