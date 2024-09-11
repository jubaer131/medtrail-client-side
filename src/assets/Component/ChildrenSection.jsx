import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { Description } from "@headlessui/react";
import { MdOutlineDateRange, MdOutlineDescription } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaCircleChevronRight, FaUserDoctor } from "react-icons/fa6";
import { GiPlayButton } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";


const ChildrenSection = () => {


    const axiosPublic = UseAxiosPublic()

    const { data: children = [], isPending, refetch } = useQuery({
        queryKey: ['children'],
        queryFn: async () =>
            await axiosPublic('/childrencamp')
                .then(res => {
                    console.log(res.data);
                    return res.data;
                })
    });

    return (
        <section id="section1" className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800 mt-10 ">
            <div className="max-w-7xl  p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center mb-12">
                    <h2 className="md:text-3xl text-2xl font-bold mb-4 ">Specialized Medical Camps for children</h2>
                    <p className="font-serif text-[16px] dark:text-gray-600 p-4">these camps often involve pediatric cardiologists, nurses, and other healthcare  professionals who <br /> specialize in treating CHD, ensuring that the children receive the medical care they need while also enjoying a fun and enriching camp experience.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 ">


                    {
                        children.map(item => <div
                            data-aos="zoom-in"
                            className="bg-[#2EE2B5] rounded-[7px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition-all duration-400 text-gray-800"
                        >
                            <div className="card h-full rounded-[7px] bg-gray-50 hover:bg-[#28b69c] hover:text-white rounded-tr-[150px] rounded-bl-[px] rounded-tl-[px] rounded-br-[px] group transition-all duration-400">
                                <div className="card-body relative">

                                    <div
                                        data-aos="fade-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="800"
                                        className="mask mask-decagon w-36 h-36 flex justify-center items-center bg-gradient-to-r from-[#25BCCF] to-[#2EE9B1] mx-auto "
                                    >
                                        <img className="mask mask-decagon w-32 h-32 " src={item.image} />
                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="800"
                                        className="flex-grow"
                                    >
                                        <h3 className="text-xl font-semibold my-1">{item.campName}</h3>
                                        <p className="text-base text-body-color leading-relaxed mb-2">

                                        </p>
                                        <ul className="list-disc text-[15px]">
                                            <li className="list-none">
                                                {" "}
                                                <span className="flex items-center gap-2">
                                                    <FaUserDoctor className="text-[#2ee2b5] text-[12px] group-hover:text-[#2EE9B1]" />

                                                    {item.healthcareProfessional}
                                                </span>
                                            </li>
                                            <li className="list-none">
                                                {" "}
                                                <span className="flex  gap-2">
                                                    <MdOutlineDescription className="text-[#2ee2b5] text-[28px] group-hover:text-[#2EE9B1]" />

                                                    {item.description}
                                                </span>
                                            </li>
                                            <li className="list-none">
                                                {" "}
                                                <span className="flex items-center gap-2">
                                                    <CiCalendarDate className="text-[#2ee2b5] group-hover:text-[#2EE9B1]" />

                                                    Date :{item.dateAndTime}
                                                </span>
                                            </li>
                                            <li className="list-none">
                                                {" "}
                                                <span className="flex items-center gap-2">
                                                    <IoLocationSharp className="text-[#2ee2b5] group-hover:text-[#2EE9B1]" />

                                                    {item.location}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="800"
                                        className="mt-auto"
                                    >
                                        <button className="p-3 rounded-full bg-[#E1F6F9] group-hover:hidden transition-all duration-400 mb-2">
                                            <GiPlayButton className=" text-[#2ee2b5]" />
                                        </button>
                                        <Link >
                                            <button className="py-3 px-5 rounded-full bg-gradient-to-r from-[#2ee2b5] to-[#2EE9B1] hidden group-hover:inline-block transition-all duration-400 text-white">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default ChildrenSection;