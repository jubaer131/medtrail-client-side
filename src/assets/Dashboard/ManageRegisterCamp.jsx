import { useQuery } from "@tanstack/react-query";
import UseAxioussecure from "../Hooks/UseAxioussecure";
import ManageRegisterCard from "./ManageRegisterCard";
import { useEffect, useState } from "react";


const ManageRegisterCamp = () => {
    const [search, setsearch] = useState('')
    const [itemperpage, setitemperpage] = useState(3)
    const [count, setcount] = useState(1)
    const [currentpage, setcurrentpage] = useState('')

    const axiosSecure = UseAxioussecure()


    const Numberofpage = Math.ceil(count / itemperpage)
    const pages = [...Array(Numberofpage).keys()].map(item => item + 1)




    const { data: registercamp = [], isPending, refetch } = useQuery({
        queryKey: ['registercamp', search, currentpage, itemperpage],
        queryFn: async () =>
            await axiosSecure(`/manageregistercamp?search=${search}&page=${currentpage}&size=${itemperpage}`)
                .then(res => {
                    console.log(res.data);
                    return res.data;
                })
    });

    useEffect(() => {
        fetch('http://localhost:8000/countpage')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setcount(data.count)
            })

    }, [])
    console.log(count)


    const handlesearch = e => {
        e.preventDefault()
        const text = e.target.search.value
        setsearch(text)
        refetch()
        e.target.reset()
    }

    const handlebtn = value => {
        setcurrentpage(value)
    }
    const handlepagination = e => {
        console.log(e)
        setcurrentpage(e)
        refetch()
    }


    return (

        <section className='container px-4 mx-auto pt-12'>
            <div className='flex items-center gap-x-3 justify-around'>
                <div className="flex gap-2">
                    <h2 className='text-2xl font-bold text-[#0055B4] '>Register Camp</h2>
                </div>

                <form onSubmit={handlesearch}>
                    <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            placeholder='  Camp Name Search'
                            aria-label='Enter Job Title'
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#0055B4] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
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
                                                <span>Participant Name </span>
                                            </div>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>Camp Name</span>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Camp Fees</span>
                                            </button>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Payment status
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Confirmation Status
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Cencel
                                        </th>
                                    </tr>
                                </thead>
                                {registercamp.map(camp => <ManageRegisterCard camp={camp} refetch={refetch}></ManageRegisterCard>)}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* pagination  */}
            <div className='flex justify-center mt-12'>
                <button
                    disabled={currentpage === 1}
                    onClick={() => handlepagination(currentpage - 1)}
                    className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
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
                        className={`hidden ${currentpage === btnNum ? 'bg-blue-500' : 'bg-white'} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}

                <button
                    disabled={currentpage === Numberofpage}
                    onClick={() => handlepagination(currentpage + 1)}
                    className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
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
            {/* pagination  */}
        </section>

    );
};

export default ManageRegisterCamp;