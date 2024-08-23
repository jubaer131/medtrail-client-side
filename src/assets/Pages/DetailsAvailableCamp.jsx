
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
import BookingModal2 from "../Component/BookingModal2";
import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";
import Navbar from "../Component/Navbar";
import { PuffLoader } from "react-spinners";


const DetailsAvailableCamp = () => {
    const [gender, setGender] = useState('');
    const [close, setClose] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(true);

    const axiosPublic = UseAxiosPublic()
    const { id } = useParams()

    const { isPending, data: availablecamp = [], refetch } = useQuery({
        queryKey: ['availablecamp', id],
        queryFn: async () =>
            await axiosPublic('/availablecamp')
                .then(res => {
                    const match = res.data.find(item => item._id === id);
                    return match
                })


    })



    const { campName, dateTime, image,
        campFees,
        location,
        healthcareProfessional,
        participantCount,
        _id,
        description
    } = availablecamp

    console.log(availablecamp)

    // form related task from here 


    const handleChange = (e) => {

        setGender(e.target.value);
    };

    if (isPending) return <PuffLoader color="green-500" size={70}></PuffLoader>



    return (
        <div>
            <div>
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-2xl gap-6 px-8 my-12 container mx-auto shadow-emerald-400">
                    <div className="lg:w-6/12 py-8">
                        <figure><img className="w-full lg:h-[650px] bg-cover bg-no-repeat rounded-3xl" src={image} alt="Album" /></figure>
                    </div>

                    <div className=" lg:w-6/12 p-6">
                        <div className="  mx-auto space-y-16 ">
                            <article className="space-y-4  text-black">
                                <div className="space-y-6">
                                    <h1 className="text-3xl font-semibold md:tracking-tight md:text-4xl">{campName}</h1>
                                    <h2 className="text-[20px] font-medium flex items-center gap-3"><IoLocationSharp className="text-emerald-400" />  {location}</h2>
                                </div>

                                <hr className=" border-t border-dashed border-emerald-400" />
                                <p className="text-[20px] font-medium flex items-center gap-3"> <BsCalendarDate className="text-emerald-400" /> {dateTime} </p>
                                {/* <hr className=" border-b border-dashed border-gray-400" /> */}
                                <p >  <span className="text-[20px] font-medium">  </span></p>

                            </article>
                            <div>
                                <div className="flex flex-wrap items-center justify-start md:gap-10 mb-5">
                                    <h2 className="flex items-center gap-4"><IoIosPricetag className="text-emerald-400"></IoIosPricetag> <span className="text-[20px] font-medium">  CampFees :{campFees} </span>  </h2>
                                    <h2 className="flex items-center gap-4 text-[20px] font-medium"><FaUserDoctor className="text-emerald-400"></FaUserDoctor> Health Care Professional : {healthcareProfessional}</h2>

                                </div>
                                <div className="space-y-5">
                                    <hr className=" border-t border-dashed border-emerald-400" />

                                    <p className="flex items-start gap-4">  <MdOutlineDescription className="text-emerald-400 text-3xl" /> {description.slice(0, 350)}  </p>

                                </div>


                                <div className="mt-6 lg:mb-8 mb-5">

                                    <h2 className="text-[20px] font-medium flex justify-start items-center gap-4">  <FaMonument className="text-emerald-400"> </FaMonument>  Participant : <div className="badge badge-lg text-emerald-400">{participantCount}</div>  </h2>
                                </div>
                                {/* add modals */}

                                {
                                    <BookingModal2 availablecamp={availablecamp} refetch={refetch}></BookingModal2>
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailsAvailableCamp;