
import Navbar from '../Component/Navbar';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';
import AvailableCampCard from './AvailableCampCard';
import { Helmet } from 'react-helmet';
import { BiLogOutCircle } from 'react-icons/bi';
import { PuffLoader } from 'react-spinners';


const AvailableCamp = () => {
    const [search, setSearch] = useState('');
    const [columns, setColumns] = useState(3);
    const [sortOrder, setSortOrder] = useState('asc');
    const axiosPublic = UseAxiosPublic();

    const { data: availablecamp = [], isPending } = useQuery({
        queryKey: ['availablecamp', search, sortOrder],
        queryFn: async () =>
            await axiosPublic(`availablecamp?search=${search}&sortOrder=${sortOrder}`)
                .then(res => {
                    console.log(res.data);
                    return res.data;
                })
    });

    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

    const showTwoColumns = () => {
        setColumns(2);
    };

    if (isPending) return <div className="w-full h-[660px] flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader> </div>



    return (
        <>
            <div >
                <Helmet>
                    <title>Available Camp</title>
                </Helmet>
                <div >
                    <Navbar></Navbar>
                </div>
                <div className='w-full  bg-emerald-100 p-8  lg:h-[620px]  ' style={{
                    backgroundImage: "url('https://i.ibb.co.com/sy9NRxf/forest-trail-sign-2021-08-29-21-03-11-utc.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>

                    <div className='text-center md:text-right md:mr-60  lg:mt-64'>

                        <h1 className='text-white lg:text-4xl '>Available Medical Camp</h1>
                        <p className='text-white text-base md:text-xl '>Join us for a day of workshops and expert talks. Register soon!</p>
                    </div>
                </div>
                <div className='max-w-5xl mx-auto md:my-10 p-8  '>
                    <h1 className='text-xl lg:text-4xl md:my-8 font-bold text-center'>Join Us for an Unforgettable Experience!</h1>
                    <p className='text-[18px] text-center'>Looking for an exciting and educational experience? Our camp is now open for registration! Whether you're interested in outdoor adventures, skill-building workshops, or simply making new friends, our camp offers something for everyone</p>
                </div>
                <div className='max-w-6xl mx-auto '>
                    <div className='flex flex-col md:flex-row justify-center items-center my-10 lg:gap-20 gap-5  '>
                        <form onSubmit={handleSearch}>
                            <div className='flex p-1  overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                                <input
                                    className='px-5 py-2 w-80 max-sm:w-40 text-black placeholder-emerald-500  bg-white outline-none focus:placeholder-transparent'
                                    type='text'
                                    name='search'
                                    placeholder='Enter Camp Name'
                                    aria-label='Enter Camp Name'
                                />
                                <button className="relative px-5 py-2 mt-0 mr-2 font-medium  group  md:inline  pl-4">
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>

                                    <span className="flex items-center gap-2 relative"><BiLogOutCircle className="text-xl"></BiLogOutCircle> Search</span>
                                </button>


                            </div>
                        </form>
                        <div>
                            <select
                                name='sortOrder'
                                id='sortOrder'
                                className='border text-emerald-500 p-4 rounded-md'
                                value={sortOrder}
                                onChange={handleSortOrderChange}
                            >
                                <option value='asc'>Sort By Name (Ascending)</option>
                                <option value='desc'>Sort By Name (Descending)</option>
                            </select>
                        </div>
                        <button onClick={showTwoColumns} className="relative px-5 py-3 max-sm:hidden font-medium  group  md:inline mt-5 pl-4">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>

                            <span className="flex items-center gap-2 relative"><BiLogOutCircle className="text-xl"></BiLogOutCircle> Change Columns</span>
                        </button>
                        {/* <button onClick={showTwoColumns} className='btn bg-emerald-500 text-white'>Change Columns</button> */}
                    </div>
                    <div className={`grid grid-cols-1 md:my-16 gap-5 md:grid-cols-${columns}`}>
                        {availablecamp.map(camp => (
                            <AvailableCampCard key={camp._id} camp={camp} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvailableCamp;
;
