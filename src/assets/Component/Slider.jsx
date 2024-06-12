

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover md:h-[38rem] h-[280px] rounded-2xl p-3'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/kJXfPJv/irak-313-1.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='text-center'>
                                <h1 className='text-sm font-semibold text-white lg:text-2xl'>
                                    Empowering Health: A Triumph of Success at the Annual Medical Camp
                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover md:h-[38rem] h-[280px] rounded-2xl p-3'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/B4dkCTB/1-2048x1365.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full '>
                            <div className='text-center'>
                                <h1 className='text-sm font-semibold text-white lg:text-2xl'>
                                    Transforming Lives: How a Medical Camp Became a Beacon of Hope and Healing"
                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover md:h-[38rem] h-[280px] rounded-2xl p-3'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/v47GzqX/DSC-9046-1200x630.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full max-sm:h-[200px]'>
                            <div className='text-center'>
                                <h1 className='text-sm font-semibold text-white lg:text-2xl'>
                                    Miracles in Motion: The Unprecedented Success Story of Our Medical Camp
                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover md:h-[38rem] h-[280px] rounded-2xl p-3'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/vDTyRz9/medical-team-giving-highfive-little-child-after-successful-examination-celebrating-end-appointment-m.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full '>
                            <div className='text-center'>
                                <h1 className='text-sm font-semibold text-white lg:text-2xl'>
                                    Breaking Barriers: The Remarkable Impact of Our Successful Medical Camp
                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}