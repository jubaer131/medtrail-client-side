

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
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/kJXfPJv/irak-313-1.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='text-center'>
                                <h1 className='text-xl font-semibold text-white lg:text-2xl'>
                                    A number of qualified personnel came from UK to train the medical officers in modern methods in this field.
                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/0Qs2P0K/1000-F-503372865-Kf-SGe-ALf0iz-Xrkpe-Afdz-Dv-HKLY2-MThw-O.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full '>
                            <div className='text-center'>
                                <h1 className='text-xl font-semibold text-white lg:text-2xl'>
                                    Ms. Millicent Kaoga (carrying blue sling bag) representing the Karen Hospital
                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/HqLs51h/DSC-9046-1200x630.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full '>
                            <div className='text-center'>
                                <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                    Build your new <span class='text-blue-400'>Saas</span> Project
                                </h1>
                                <br />

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className='w-full bg-center bg-cover h-[38rem]'
                        style={{
                            backgroundImage: `url("https://i.ibb.co/gPXt80w/medical2020-28-scaled.jpg")`,
                        }}
                    >
                        <div className='flex items-center justify-center w-full h-full '>
                            <div className='text-center'>
                                <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                    Build your new <span class='text-blue-400'>Saas</span> Project
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