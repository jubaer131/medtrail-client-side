import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaMonument } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { IoIosPricetag } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { FaUserDoctor } from "react-icons/fa6";
import { useState } from "react";
import BookingModal from "../Component/BookingModal";


const PopularCampDetails = () => {
    const [gender, setGender] = useState('');
    const [close, setClose] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(true);

    const axiosPublic = UseAxiosPublic()
    const { id } = useParams()

    const { isPending, data: campdetails = [], refetch } = useQuery({
        queryKey: ['campdetails', id],
        queryFn: async () =>
            await axiosPublic('/popularmedicalcamp')
                .then(res => {
                    const match = res.data.find(item => item._id === id);
                    return match
                })


    })
    
    if (isPending) return <div>Loading...</div>;

    const { campName, dateAndTime, image,
        campFees,
        location,
        healthcareProfessional,
        participantCount,
        _id,
        description
    } = campdetails

    // form related task from here 


    const handleChange = (e) => {

        setGender(e.target.value);
    };





    return (
        <div>
            <div>

                <div className="card lg:card-side bg-base-100 shadow-xl gap-6 px-8 mt-10 container mx-auto">
                    <div className="lg:w-6/12 ">
                        <figure><img className="w-full h-[650px] bg-cover bg-no-repeat rounded-3xl" src={image} alt="Album" /></figure>
                    </div>

                    <div className=" lg:w-6/12 p-6">
                        <div className="  mx-auto space-y-16 ">
                            <article className="space-y-4  text-black">
                                <div className="space-y-6">
                                    <h1 className="text-3xl font-semibold md:tracking-tight md:text-4xl">{campName}</h1>
                                    <h2 className="text-[20px] font-medium">Location : {location}</h2>
                                </div>

                                <hr className=" border-t border-dashed border-gray-400" />
                                <p className="text-[20px] font-medium">  Date and time : {dateAndTime} </p>
                                {/* <hr className=" border-b border-dashed border-gray-400" /> */}
                                <p >  <span className="text-[20px] font-medium">  </span></p>

                            </article>
                            <div>
                                <div className="flex flex-wrap items-center justify-start md:gap-10 mb-5">
                                    <h2 className="flex items-center gap-4"><IoIosPricetag></IoIosPricetag> <span className="text-[20px] font-medium">  CampFees :{campFees} </span>  </h2>
                                    <h2 className="flex items-center gap-4 text-[20px] font-medium"><FaUserDoctor></FaUserDoctor> Health Care Professional : {healthcareProfessional}</h2>

                                </div>
                                <div className="space-y-5">
                                    <hr className=" border-t border-dashed border-gray-400" />

                                    <p className="flex items-center gap-4"> <GiFamilyHouse></GiFamilyHouse><span className="text-[20px] font-medium">  Description : {description.slice(0, 350)}  </span> </p>

                                </div>


                                <div className="mt-6">
                                    <h2 className="text-[20px] font-medium flex justify-start items-center gap-4"><FaMonument> </FaMonument> ParticipantCount : {participantCount} </h2>

                                </div>
                                {/* add modals */}
                                <BookingModal campdetails={campdetails} refetch={refetch}></BookingModal>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopularCampDetails;