

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide
                    className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url(https://i.ibb.co/zJzFLvM/doctor-conducting-health-screenings-public-event-1280275-229675.jpg)' }}>
                    <div className='flex justify-center items-center h-[600px] text-red-50 bg-black bg-opacity-50 pt-20'>
                        <div className=' text-center'>
                            <h1 className='font-medium text-[18px] mb-2'>WELCOME TO MEDICAL CAMP</h1>
                            <h1 className='text-5xl px-5 font-semibold text-emerald-500'> YOUR HEALTH, OUR PRIORITY</h1>
                            <p className='w-[70%] mx-auto mt-4 mb-7'>Providing expert care and medical services to ensure a healthier community.
                                Join us in our mission to make healthcare accessible for everyone.</p>


                            <Link to='' class="relative px-5 py-2 font-medium text-white group ">

                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:skew-x-12"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:-skew-x-12"></span>
                                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-emerald-400 -rotate-12"></span>
                                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-emerald-400 -rotate-12"></span>
                                <span class="relative ">Join the team</span>

                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url(https://i.ibb.co/sHDVwgG/doctor-administering-vaccine-child-checkup-1280275-230177.jpg)' }}>
                    <div className='flex justify-center items-center h-[600px] text-red-50 bg-black bg-opacity-50 pt-20'>
                        <div className=' text-center'>
                            <h1 className='font-medium text-[18px] mb-2'>WELCOME TO CHILDREN MEDICAL CAMP</h1>
                            <h1 className='text-5xl px-5 font-semibold text-emerald-500'>YOUR HEALTH, OUR PRIORITY </h1>
                            <p className='w-[70%] mx-auto mt-4 mb-7'>Dedicated to the health and well-being of our youngest patients.
                                Providing specialized care, screenings, and treatments to ensure a bright and healthy future for every child.</p>

                            <Link to="#childrenSec" class="relative px-5 py-2 font-medium text-white group ">

                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:skew-x-12"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:-skew-x-12"></span>
                                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-emerald-400 -rotate-12"></span>
                                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-emerald-400 -rotate-12"></span>
                                <span class="relative ">Children Event</span>

                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url(https://i.ibb.co/1ryrmbT/purple-and-white-Line-Modern-Medical-Care-Banner-landscape-3.png)' }}>
                    <div className='flex justify-center items-center h-[600px] text-red-50 bg-black bg-opacity-50 pt-20'>
                        <div className=' text-center'>
                            <h1 className='font-medium text-[18px] mb-2'>OUR MISSION</h1>
                            <h1 className='text-5xl px-5 font-semibold text-emerald-500'> HEALTH THROUGH COMPASSIONATE CARE</h1>
                            <p className='w-[70%] mx-auto mt-4 mb-7'>At the heart of our mission lies a deep commitment to empowering individuals and communities by providing accessible healthcare with compassion and integrity.</p>

                            <Link to='' class="relative px-5 py-2 font-medium text-white group ">

                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:skew-x-12"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:-skew-x-12"></span>
                                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-emerald-400 -rotate-12"></span>
                                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-emerald-400 -rotate-12"></span>
                                <span class="relative ">Read More</span>

                            </Link>
                        </div>
                    </div>
                </SwiperSlide>






            </Swiper>
        </>
    );
}