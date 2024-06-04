// import { useQuery } from '@tanstack/react-query';
// import React, { useState } from 'react';
// import UseAxiosPublic from '../Hooks/UseAxiosPublic';
// import AvailableCampCard from './AvailableCampCard';

// const AvailableCamp = () => {
//     const [search, setsearch] = useState('')
//     const [columns, setColumns] = useState(3);
//     const axiosPublic = UseAxiosPublic()

//     const { data: availablecamp = [], isPending, } = useQuery({
//         queryKey: ['availablecamp', search],
//         queryFn: async () =>
//             await axiosPublic(`availablecamp?search=${search}`)
//                 .then(res => {
//                     console.log(res.data)

//                     return res.data
//                 })
//     })

//     const handlesearch = e => {
//         e.preventDefault()
//         const text = e.target.search.value
//         setsearch(text)

//     }
//     const showTwoColumns = () => {
//         setColumns(2);
//     };

//     return (


//         <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
//             <div>
//                 <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>


//                     <form onSubmit={handlesearch}>
//                         <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
//                             <input
//                                 className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
//                                 type='text'
//                                 name='search'
//                                 placeholder='Enter Job Title'
//                                 aria-label='Enter Job Title'
//                             />

//                             <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
//                                 Search
//                             </button>
//                         </div>
//                     </form>
//                     <div>
//                         <button className='btn'>Sort By Name</button>
//                     </div>
//                     <button onClick={showTwoColumns} className='btn'>Change colum</button>
//                 </div>
//                 <div className={`grid grid-cols-1 gap-4 md:grid-cols-${columns}`}>
//                     {availablecamp.map(camp => (
//                         <AvailableCampCard key={camp._id} camp={camp} />
//                     ))}
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default AvailableCamp;

import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';
import AvailableCampCard from './AvailableCampCard';

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

    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                    <form onSubmit={handleSearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                placeholder='Enter Camp Name'
                                aria-label='Enter Camp Name'
                            />
                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                    <div>
                        <select
                            name='sortOrder'
                            id='sortOrder'
                            className='border p-4 rounded-md'
                            value={sortOrder}
                            onChange={handleSortOrderChange}
                        >
                            <option value='asc'>Sort By Name (Ascending)</option>
                            <option value='desc'>Sort By Name (Descending)</option>
                        </select>
                    </div>
                    <button onClick={showTwoColumns} className='btn'>Change Columns</button>
                </div>
                <div className={`grid grid-cols-1 gap-4 md:grid-cols-${columns}`}>
                    {availablecamp.map(camp => (
                        <AvailableCampCard key={camp._id} camp={camp} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailableCamp;
;
