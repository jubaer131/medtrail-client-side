

import { useQuery } from "@tanstack/react-query";
import UseAxioussecure from "../Hooks/UseAxioussecure";
import ManageCampCard from "./ManageCampCard";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const ManageCamp = () => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [count, setCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    const axiosSecure = UseAxioussecure();

    const totalPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(totalPages).keys()].map(item => item + 1);

    const { data: manageCamp = [], isPending, refetch } = useQuery({
        queryKey: ['manageCamp', currentPage, itemsPerPage, search],
        queryFn: async () =>
            await axiosSecure(`/managecamp?page=${currentPage}&size=${itemsPerPage}&search=${search}`)
                .then(res => {
                    return res.data;
                })
    });

    useEffect(() => {
        fetch('https://medtrail-server.vercel.app/paginationcount')
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
            });
    }, []);

    const handleBtn = value => {
        setCurrentPage(value);
        refetch();
    };

    const handlePagination = (value) => {
        setCurrentPage(value);
        refetch();
    };

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
        refetch();
        e.target.reset();
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
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
        <section className='max-w-6xl px-4 mx-auto pt-5 md:mt-8 border  bg-gray-100 rounded-3xl'>
            <div className='md:flex items-center justify-between mb-8 px-4'>
                <h2 className='text-2xl font-bold text-lime-500 '>Manage Camp</h2>

                {/* search bar */}
                <form onSubmit={handleSearch}>
                    <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-3 rounded-l-lg max-sm:w-36 w-[350px] text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            placeholder='Enter Camp Name'
                            aria-label='Enter Job Title'
                        />
                        <button className='px-1 md:px-4 py-3 rounded-r-2xl text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-lime-500 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                </form>
                {/* search bar */}
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th scope='col' className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            <div className='flex items-center gap-x-3'>
                                                <span>Camp Name</span>
                                            </div>
                                        </th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            <span>Date and Time</span>
                                        </th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            <button className='flex items-center gap-x-2'>
                                                <span>Location</span>
                                            </button>
                                        </th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Healthcare Professional
                                        </th>
                                        <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Delete
                                        </th>
                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Edit
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    manageCamp.map(item => <ManageCampCard key={item._id} item={item} refetch={refetch} />)
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center my-12 '>
                <button
                    disabled={currentPage === 1}
                    onClick={handlePrevious}
                    className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500 hover:text-white'>
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
                        className={` ${currentPage === btnNum ? 'bg-lime-500 text-gray-900' : 'bg-white text-gray-900'} px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-lime-500 hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={handleNext}
                    className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
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

export default ManageCamp;
