
import UseAuth from "../Hooks/UseAuth";
import UseOrganizer from "../Hooks/UseOrganizer";
import UpdateModal from "../ShardComponent/UpdateModal";


const OrganizerProfile = () => {

    const { user } = UseAuth()
    const [item, isLoading] = UseOrganizer()
    console.log(item)
    return (
        <div>
            <div className='flex justify-center items-center '>

                <div className='bg-white shadow-lg rounded-2xl w-4/5'>
                    <img
                        alt='profile'
                        src='https://img.freepik.com/premium-photo/xmas-blue-layout-with-frame-turquoise-purple-stars-with-carved-them-deers-christmas-trees-snowflakes-stars_121867-538.jpg?w=1380'
                        className='w-full mb-4 rounded-t-lg md:h-[350px]'
                    />
                    <div className='flex flex-col items-center justify-center p-4 h-[400px] -mt-16'>
                        <a href='#' className='relative block'>
                            <img
                                alt='profile'
                                src={user?.photoURL}
                                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                            />
                        </a>

                        <p className='p-2 uppercase px-4 text-xs text-white bg-[#0055B4] rounded-full'>
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
                                    <button className='bg-[#0055B4] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                        <UpdateModal></UpdateModal>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrganizerProfile;