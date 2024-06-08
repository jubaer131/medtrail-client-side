

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import PaymentHistoryCard from "./PaymentHistoryCard";
import { useEffect, useState } from "react";


const PaymentHistory = () => {
    const [search, setSearch] = useState('');
    const [itemPerPage, setItemPerPage] = useState(10);
    const [count, setCount] = useState(1);
    const [currentpage, setCurrentPage] = useState(1); // Initialize with default value 1
    const axiosPublic = UseAxiosPublic();

    const Numberofpage = Math.ceil(count / itemPerPage);
    const pages = [...Array(Numberofpage).keys()].map(item => item + 1);

    const { data: history = [], isPending, refetch } = useQuery({
        queryKey: ['history', search, currentpage, itemPerPage],
        queryFn: async () => {
            const response = await axiosPublic(`/paymenthistory?search=${search}&page=${currentpage}&size=${itemPerPage}`);
            return response.data;
        }
    });

    useEffect(() => {
        fetch('http://localhost:8000/countpamenthistory')
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
            })

    }, [currentpage])

    const handlebtn = value => {
        setCurrentPage(value);
        refetch();
    };

    const handlePagination = value => {
        setCurrentPage(value);
        refetch();
    };

    const handlesearch = e => {
        e.preventDefault()
        const text = e.target.search.value;
        setSearch(text);
        setCurrentPage(1);
        refetch();
        e.target.reset();
    }

    const handleNext = () => {
        if (currentpage < Numberofpage) {
            handlePagination(currentpage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentpage > 1) {
            handlePagination(currentpage - 1);
        }
    };

    if (isPending) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <section className="container px-4 mx-auto pt-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 justify-around">
                    <h2 className="text-2xl font-bold text-[#0055B4]">Payment History</h2>
                    <form onSubmit={handlesearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                placeholder='Enter Camp Name'
                                aria-label='Enter Job Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#0055B4] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                                            >
                                                <div className="flex items-center gap-x-3">
                                                    <span>Camp Name</span>
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                                            >
                                                <span>Camp Fees</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                                            >
                                                <button className="flex items-center gap-x-2">
                                                    <span>Payment Status</span>
                                                </button>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                                            >
                                                Confirmation Status
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        history.map(historydata => <PaymentHistoryCard historydata={historydata} refetch={refetch}></PaymentHistoryCard>)

                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* pagination */}

                <div className='flex justify-center mt-12'>
                    <button
                        disabled={currentpage === 1}
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

                            <span className='mx-1'>previous</span>
                        </div>
                    </button>

                    {pages.map(btnNum => (
                        <button
                            onClick={() => handlebtn(btnNum)}
                            key={btnNum}
                            className={`hidden ${currentpage === btnNum ? 'bg-blue-500' : 'bg-white'} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                        >
                            {btnNum}
                        </button>
                    ))}

                    <button
                        disabled={currentpage === Numberofpage}
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
                {/* pagination */}
            </section>

        </div>
    );
};

export default PaymentHistory;
