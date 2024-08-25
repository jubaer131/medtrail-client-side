import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { FaMonument, FaUserDoctor } from "react-icons/fa6";
import { MdSupervisorAccount } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CampCard = ({ camp }) => {

    const { campName, dateAndTime, image,
        campFees,
        location,
        healthcareProfessional,
        participantCount,
        _id
    } = camp


    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
        });
    }, []);

    return (
        <div data-aos="zoom-in-up" className="flex flex-col  p-10 space-y-6  rounded-lg shadow-2xl bg-emerald-100 overflow-visible bg-opacity-80   border-4 border-emerald-100">

            <div className='space-y-4 '>
                <img src={image} alt="" className="object-cover  w-full h-80 mb-4 " />
                <h2 className="text-xl text-gray-900 text-start font-semibold mb-8"> {campName}</h2>

                <p className="text-sm text-gray-900 flex  items-center gap-3"> <IoLocationSharp className='text-[22px] text-emerald-600' /> {location}.</p>
                <p className='flex text-gray-900 items-center gap-3'> <FaUserDoctor className='text-emerald-600' /> {healthcareProfessional}</p>
                <p className='flex text-gray-900 items-center gap-3'> <BsCalendarDate className='text-[16px] text-emerald-500' /> {dateAndTime}</p>

                {/* <div className="divider  divider-start"></div> */}
                <hr className=" border-t border-dashed border-emerald-400 " />

                <h2 className="text-[20px] text-gray-900 font-medium flex justify-start items-center gap-4">  <FaMonument className="text-emerald-400"> </FaMonument>  Participant : <div className="badge bg-emerald-50 badge-lg text-emerald-400">{participantCount}</div>  </h2>
            </div>
            <div className="flex flex-wrap justify-between">

                <div >
                    <Link to={`/popularcampdetails/${_id}`} class="relative px-5 py-2 font-medium text-white group ">

                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:skew-x-12"></span>
                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:-skew-x-12"></span>
                        <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-emerald-400 -rotate-12"></span>
                        <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-emerald-400 -rotate-12"></span>
                        <span class="relative ">Details</span>

                    </Link>
                </div>

            </div>
        </div>


    );
};

export default CampCard;