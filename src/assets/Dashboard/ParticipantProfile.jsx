import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseOrganizer from "../Hooks/UseOrganizer";
import UpdateModal from "../ShardComponent/UpdateModal";


const ParticipantProfile = () => {

    const { user } = UseAuth()
    const [item] = UseOrganizer()
    return (
        // <div className="bg-cover min-h-screen bg-[url('https://i.ibb.co/PGdNKvZ/Blue-and-White-Simple-Health-Medical-Banner-Landscape.png')]">

        //     <div className='flex justify-center items-center '>

        //         <div className='bg-white shadow-lg rounded-2xl w-4/5'>
        //             {/* <img
        //                 alt='profile'
        //                 src='https://img.freepik.com/premium-photo/islamic-background-illustration_941097-24450.jpg?w=1380'
        //                 className='w-full mb-4 rounded-t-lg md:h-[350px]'
        //             /> */}
        //             <div className='flex flex-col items-center justify-center p-4 h-[400px] -mt-16'>
        //                 <a href='#' className='relative block'>
        //                     <img
        //                         alt='profile'
        //                         src={user?.photoURL}
        //                         className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
        //                     />
        //                 </a>

        //                 <p className='p-2 uppercase px-4 text-xs text-white bg-[#0055B4] rounded-full'>
        //                     {item.role === 'admin' ? <span>Admin</span> : <span>Participent</span>}
        //                 </p>
        //                 <p className='mt-2 text-xl font-medium text-gray-800 '>

        //                 </p>
        //                 <div className='w-full p-2 mt-4 rounded-lg'>
        //                     <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
        //                         <p className='flex flex-col'>
        //                             Name
        //                             <span className='font-bold text-black '>
        //                                 {user?.displayName}
        //                             </span>
        //                         </p>
        //                         <p className='flex flex-col'>
        //                             Email
        //                             <span className='font-bold text-black '>{user?.email}</span>
        //                         </p>

        //                         <div>
        //                             <button className='bg-[#0055B4] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
        //                                 <UpdateModal></UpdateModal>
        //                             </button>

        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>

        <div className="bg-cover min-h-screen bg-[url('https://i.ibb.co/WgnQ5Md/doctor-conducting-health-screenings-public-event-1280275-229825.jpg')]">

            <div className='flex justify-center items-center min-h-screen  rounded-full'>


                <div className=' shadow-lg   w-3/5 bg-white p-5 shadow-lime-500/50 rounded-full border-2 border-lime-400'>

                    <div className='flex flex-col items-center justify-center p-4 h-[400px] mt-8 '>
                        <a href='#' className='relative block'>
                            <img
                                alt='profile'
                                src={user?.photoURL}
                                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                            />
                        </a>

                        <p className='p-2 uppercase px-4 text-xs text-black shadow-lime-500 border-2 border-lime-500 rounded-full'>
                            {item.role === 'admin' ? <span>Admin</span> : <span>Participent</span>}
                        </p>
                        <p className='mt-2 text-xl font-medium text-gray-800 '>

                        </p>
                        <div className='w-full p-2 mt-4 rounded-lg'>
                            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                                <p className='flex flex-col'>
                                    Name
                                    <span className='font-bold text-black '>
                                        {user?.displayName}
                                    </span>
                                </p>
                                <p className='flex flex-col'>
                                    Email
                                    <span className='font-bold text-black '>{user?.email}</span>
                                </p>


                                <div>
                                    {/* <button className='bg-lime-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-emerald-700 block mb-1'>
                                    <UpdateModal></UpdateModal>
                                </button> */}
                                    <a href="#_" class="relative px-5 py-2 font-medium text-white group">
                                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-lime-500 group-hover:bg-lime-600 group-hover:skew-x-12"></span>
                                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-lime-600 group-hover:bg-lime-500 group-hover:-skew-x-12"></span>
                                        <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-lime-600 -rotate-12"></span>
                                        <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-lime-400 -rotate-12"></span>
                                        <span class="relative">  <UpdateModal></UpdateModal></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParticipantProfile;