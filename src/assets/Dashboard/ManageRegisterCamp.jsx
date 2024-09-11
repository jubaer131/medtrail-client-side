

import { useQuery } from "@tanstack/react-query";
import UseAxioussecure from "../Hooks/UseAxioussecure";
import ManageRegisterCard from "./ManageRegisterCard";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { BiLogOutCircle } from "react-icons/bi";

const ManageRegisterCamp = () => {
    const [search, setSearch] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [count, setCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const axiosSecure = UseAxioussecure();

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map(item => item + 1);

    const { data: registerCamp = [], isPending, refetch } = useQuery({
        queryKey: ['registerCamp', search, currentPage, itemsPerPage],
        queryFn: async () =>
            await axiosSecure(`/manageregistercamp?search=${search}&page=${currentPage}&size=${itemsPerPage}`)
                .then(res => {
                    return res.data;
                })
    });

    useEffect(() => {
        fetch('https://medtrail-server.vercel.app/countpage')
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
            });
    }, []);

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
        refetch();
        e.target.reset();
    };

    const handleBtn = value => {
        setCurrentPage(value);
        refetch();
    };

    const handlePagination = value => {
        setCurrentPage(value);
        refetch();
    };

    const handleNext = () => {
        if (currentPage < numberOfPages) {
            handlePagination(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePagination(currentPage - 1);
        }
    };

    if (isPending) {
        return <div className="w-full h-[660px] flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader> </div>
    }

    return (
        <section className='max-w-6xl px-4 mx-auto pt-5  border  bg-gray-100 rounded-3xl'>
            <div className='md:flex items-center max-sm:space-y-4  justify-between '>
                <div className="flex gap-2">
                    <h2 className='md:text-2xl text-xl font-bold text-lime-700 max-sm:ml-4'>Register Camp</h2>
                </div>

                <form onSubmit={handleSearch}>
                    <div className='flex p-1  relative overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 rounded-l-md  w-[250px] max-sm:w-56 text-gray-700 placeholder-gray-500 md:bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            placeholder='Camp Name Search'
                            aria-label='Enter Job Title'
                        />

                        <button className="relative px-5 py-2 mt-0 mr-2 font-medium  group  md:inline  pl-4">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>

                            <span className="flex items-center gap-2 relative"><BiLogOutCircle className="text-xl"></BiLogOutCircle> Search</span>
                        </button>
                    </div>
                </form>
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th scope='col' className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            <div className='flex items-center gap-x-3'>
                                                <span>Participant Name</span>
                                            </div>
                                        </th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            <span>Camp Name</span>
                                        </th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            <button className='flex items-center gap-x-2'>
                                                <span>Camp Fees</span>
                                            </button>
                                        </th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Payment Status
                                        </th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Confirmation Status
                                        </th>
                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Cancel
                                        </th>
                                    </tr>
                                </thead>
                                {registerCamp.map(camp => (
                                    <ManageRegisterCard key={camp._id} camp={camp} refetch={refetch} />
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-12'>
                <button
                    disabled={currentPage === 1}
                    onClick={handlePrevious}
                    className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-lime-500 hover:text-white'>
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>
                        <span className='mx-1'>Previous</span>
                    </div>
                </button>

                {pages.map(btnNum => (
                    <button
                        onClick={() => handleBtn(btnNum)}
                        key={btnNum}
                        className={` ${currentPage === btnNum ? 'bg-lime-500 text-gray-900' : 'bg-white text-gray-900'} px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-lime-700 hover:text-white`}>
                        {btnNum}
                    </button>
                ))}

                <button
                    disabled={currentPage === numberOfPages}
                    onClick={handleNext}
                    className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-lime-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </section>
    );
};

export default ManageRegisterCamp;
