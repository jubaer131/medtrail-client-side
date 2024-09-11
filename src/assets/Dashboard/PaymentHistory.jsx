
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import PaymentHistoryCard from "./PaymentHistoryCard";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { BiLogOutCircle } from "react-icons/bi";


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
        fetch('https://medtrail-server.vercel.app/countpamenthistory')
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
        return <div className="w-full h-[660px] flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader> </div>
    }

    return (
        <div className='max-w-6xl px-4 mx-auto py-10  border  bg-gray-100 rounded-3xl'>
            <section >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 justify-between max-sm:space-y-4">
                    <h2 className="lg:text-2xl max-sm:px-5 text-xl font-bold text-lime-700 max-sm:ml-2">Participant Payment History</h2>
                    <form onSubmit={handlesearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg  focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 max-sm:w-62 py-2  rounded-l-2xl text-gray-500 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                placeholder='Enter Camp Name'
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

                            <span className='mx-1'>previous</span>
                        </div>
                    </button>

                    {pages.map(btnNum => (
                        <button
                            onClick={() => handlebtn(btnNum)}
                            key={btnNum}
                            className={`hidden ${currentpage === btnNum ? 'bg-lime-500 text-gray-900' : 'bg-white text-gray-900'} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-lime-500  hover:text-white`}
                        >
                            {btnNum}
                        </button>
                    ))}

                    <button
                        disabled={currentpage === Numberofpage}
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
                {/* pagination */}
            </section>

        </div>
    );
};

export default PaymentHistory;
