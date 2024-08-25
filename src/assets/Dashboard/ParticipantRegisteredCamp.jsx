

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import ParticipantRegisterdCard from "./ParticipantRegisterdCard";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const ParticipantRegisteredCamp = () => {
    const [search, setSearch] = useState('');
    const axiosPublic = UseAxiosPublic();

    const [itemPerPage, setItemPerPage] = useState(10);
    const [count, setCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const Numberofpage = Math.ceil(count / itemPerPage);
    const pages = [...Array(Numberofpage).keys()].map(item => item + 1);

    const { data: participantcamp = [], isPending, refetch } = useQuery({
        queryKey: ['participantcamp', search, currentPage, itemPerPage],
        queryFn: async () => {
            const response = await axiosPublic(`/paymenthistory?search=${search}&page=${currentPage}&size=${itemPerPage}`);
            return response.data;
        }
    });

    useEffect(() => {
        fetch('https://medtrail-server.vercel.app/countpamenthistory')
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
            })

    }, [])

    const handlesearch = e => {
        e.preventDefault()
        const text = e.target.search.value
        setSearch(text)
        setCurrentPage(1); // Reset current page to 1 when searching
        refetch()
        e.target.reset()

    }

    const handlebtn = value => {
        setCurrentPage(value)
        refetch()
    }

    const handleNext = () => {
        if (currentPage < Numberofpage) {
            setCurrentPage(currentPage + 1);
            refetch()
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            refetch()
        }
    };

    if (isPending) {
        return <div className="w-full h-[660px] flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader> </div>
    }

    return (
        <div className='max-w-6xl px-4 mx-auto   border   bg-gray-100 rounded-3xl'>
            <section className='max-w-6xl px-4 mx-auto pt-12'>
                <div className='md:flex items-center gap-x-3 justify-between'>
                    <h2 className='lg:text-3xl text-xl font-bold text-lime-500 max-sm:mb-5'>Participant Registered Camp</h2>

                    <form onSubmit={handlesearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 max-sm:w-52 rounded-l-2xl py-4 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                placeholder='Enter Camp Name'
                                aria-label='Enter Camp Name'
                            />

                            <button className='px-1 md:px-4 rounded-r-2xl py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-lime-600 rounded-md hover:bg-lime-700 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                <table className='min-w-full divide-y divide-gray-200'>
                                    <thead className='bg-gray-50'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <div className='flex items-center gap-x-3'>
                                                    <span>Camp Name</span>
                                                </div>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <span>Camp fees</span>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                <button className='flex items-center gap-x-2'>
                                                    <span>Participant Name</span>
                                                </button>
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Payment Status
                                            </th>

                                            <th
                                                scope='col'
                                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                            >
                                                Payment confirmation Status
                                            </th>

                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                Cencel
                                            </th>
                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                Feedback
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        participantcamp.map(registercamp => <ParticipantRegisterdCard registercamp={registercamp} refetch={refetch}></ParticipantRegisterdCard>)
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* pagination */}
                <div className='flex justify-center my-12'>
                    <button
                        disabled={currentPage === 1}
                        onClick={handlePrevious}
                        className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-lime-500  hover:text-white'>
                        <div className='flex items-center -mx-1'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 mx-1 rtl:-scale-x-100'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M7 16l-4-4m0 0l4-4m-4 4h18'
                                />
                            </svg>

                            <span className='mx-1'>previous</span>
                        </div>
                    </button>

                    {pages.map(btnNum => (
                        <button
                            onClick={() => handlebtn(btnNum)}
                            key={btnNum}
                            className={`hidden ${currentPage === btnNum ? 'bg-lime-500 text-gray-900' : 'bg-white text-gray-900'} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-lime-500  hover:text-gray-900`}
                        >
                            {btnNum}
                        </button>
                    ))}

                    <button
                        disabled={currentPage === Numberofpage}
                        onClick={handleNext}
                        className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-lime-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                        <div className='flex items-center -mx-1'>
                            <span className='mx-1'>Next</span>

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6 mx-1 rtl:-scale-x-100'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
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
        </div>
    );
};

export default ParticipantRegisteredCamp;

