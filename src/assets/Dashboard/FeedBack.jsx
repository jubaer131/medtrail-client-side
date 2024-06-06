

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import UseAuth from "../Hooks/UseAuth";
import { toast } from "react-toastify";


const FeedBack = () => {

    const [startDate, setStartDate] = useState(new Date())
    const navigate = useNavigate()
    const axiosPublic = UseAxiosPublic()
    const { user } = UseAuth()

    const handlereview = async (e) => {
        e.preventDefault()
        console.log('is running')
        const form = e.target
        const username = user.displayName
        const photo = user.photoURL
        const email = user.email
        const timestamp = startDate
        const comment = form.comment.value
        const rating = form.rating.value
        const datareview = { username, email, timestamp, comment, rating, photo }
        console.log(datareview)

        try {
            const { data } = await axiosPublic.post('/feedback', datareview);
            console.log(data);
            toast.success('your feedback successfull')
            navigate('/dashboard/registeredcamp')
        } catch (err) {
            console.log(err);
        }


    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Your Feedback
                </h2>

                <form onSubmit={handlereview}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                User Name
                            </label>
                            <input
                                defaultValue={user?.displayName}
                                readOnly
                                id='username'
                                name='username'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                defaultValue={user?.email}
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Deadline</label>
                            <DatePicker className="border p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                            {/* Date Picker Input Field */}
                        </div>


                        <div>
                            <label className='text-gray-700 ' htmlFor='rating'>
                                Rating (1-5)
                            </label>
                            <input
                                id='rating'
                                name='rating'
                                type='number'
                                min='1'
                                max='5'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='comment'>
                            comment
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='comment'
                            id='comment'
                        ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default FeedBack;