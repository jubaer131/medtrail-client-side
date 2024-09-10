// import React, { useRef, useState } from 'react';


// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';


// const HelthBlog = () => {
//     const [swiperRef, setSwiperRef] = useState(null);

//     let appendNumber = 4;
//     let prependNumber = 1;

//     const prepend2 = () => {
//         swiperRef.prependSlide([
//             '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
//             '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
//         ]);
//     };

//     const prepend = () => {
//         swiperRef.prependSlide(
//             '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
//         );
//     };

//     const append = () => {
//         swiperRef.appendSlide(
//             '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
//         );
//     };

//     const append2 = () => {
//         swiperRef.appendSlide([
//             '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
//             '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
//         ]);
//     };

//     return (
//         <>

//             <div className='space-y-6 text-center my-28 p-5 '>
//                 <h className='text-4xl font-bold '>Essential Health Tips for a Better Lifestyle</h>
//                 <p className='text-[17px]'> Understanding and applying these health tips can lead to increased energy, better mood, and overall enhanced well-being. <br /> By adopting these habits, you can enjoy a more vibrant and active life</p>
//             </div>
//             <Swiper
//                 onSwiper={setSwiperRef}
//                 slidesPerView={3}
//                 centeredSlides={true}
//                 spaceBetween={30}
//                 pagination={{
//                     type: 'fraction',
//                 }}
//                 navigation={true}
//                 modules={[Pagination, Navigation]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div className="card bg-base-100 w-96 shadow-xl border border-emerald-400 ">
//                         <div className="card-body">
//                             <h2 className="card-title">Stay Hydrated</h2>
//                             <p> 💧  Drinking enough water is crucial for your overall health. Aim for at least 8 glasses of water a day to keep your body hydrated, maintain energy levels, and support essential bodily functions.</p>
//                             <p > 💧  Improves digestion, boosts skin health, enhances brain function, and prevents headaches.</p>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="card bg-base-100 w-96 shadow-xl border border-emerald-400">
//                         <div className="card-body">
//                             <h2 className="card-title"> Eat a Balanced Diet</h2>
//                             <p>🥗 A diet rich in fruits, vegetables, whole grains, and lean proteins provides the necessary nutrients your body needs. Avoid excessive sugar, salt, and processed foods to maintain a healthy weight .</p>
//                             <p>🥗 Strengthens the immune system, supports healthy weight, lowers the risk of heart disease.</p>

//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="card bg-base-100 w-96 shadow-xl border border-emerald-400">
//                         <div className="card-body">
//                             <h2 className="card-title"> Exercise Regularly</h2>
//                             <p>🏃 Incorporate at least 30 minutes of moderate physical activity into your daily routine. Regular exercise improves cardiovascular health, strengthens muscles, enhances mood, and helps manage weight.</p>
//                             <p>🏃 Reduces the risk of chronic diseases, improves mental health, enhances sleep quality.</p>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide>
//                     <div className="card bg-base-100 w-96 shadow-xl border border-emerald-400">
//                         <div className="card-body">
//                             <h2 className="card-title">  Get Enough Sleep</h2>
//                             <p>😴 Adequate sleep (7-9 hours per night) is essential for mental and physical well-being. Quality sleep improves memory, boosts mood, supports immune function, reduces stress levels.</p>
//                             <p>😴 Enhances cognitive function, supports weight management, improves mood, and boosts immune health.</p>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <div className="card bg-base-100 w-96 shadow-xl border border-emerald-400">
//                         <div className="card-body">
//                             <h2 className="card-title"> Practice Stress Management</h2>
//                             <p>🧘 Chronic stress can have negative effects on your health. Engage in relaxation techniques like meditation, deep breathing, or hobbies to manage stress effectively </p>
//                             <p>🧘 Reduces anxiety, lowers blood pressure, improves mood, and promotes emotional well-being..</p>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//             </Swiper>

//             <p className="append-buttons">
//                 <button onClick={() => prepend2()} className="prepend-2-slides">

//                 </button>
//                 <button onClick={() => prepend()} className="prepend-slide">

//                 </button>
//                 <button onClick={() => append()} className="append-slide">

//                 </button>
//                 <button onClick={() => append2()} className="append-2-slides">

//                 </button>
//             </p>
//         </>
//     );
// };

// export default HelthBlog;



import { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";

import "keen-slider/keen-slider.min.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";

import { PuffLoader } from "react-spinners";
import { AiOutlineCaretRight } from "react-icons/ai";

import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const HelthBlog = () => {
    const sliderRef = useRef(null);
    const axiosPublic = UseAxiosPublic();
    const [slider, setSlider] = useState(null);

    const { data: recommendations = [], isPending } = useQuery({
        queryKey: ["recommendations"],
        queryFn: async () => {
            const res = await axiosPublic.get("/recommendations");
            return res.data;
        },
    });

    useEffect(() => {
        if (!sliderRef.current || recommendations.length === 0) return;

        const newSlider = new KeenSlider(sliderRef.current, {
            loop: true,
            slides: {
                origin: "center",
                perView: 1.25,
                spacing: 16,
            },
            breakpoints: {
                "(min-width: 1024px)": {
                    slides: {
                        origin: "auto",
                        perView: 1.5,
                        spacing: 32,
                    },
                },
            },
        });

        setSlider(newSlider);

        return () => {
            newSlider.destroy();
        };
    }, [recommendations]);

    if (isPending) {
        return (
            <div className="w-full h-[200px] flex items-center justify-center">
                <PuffLoader color="#2EE9B1"></PuffLoader>
            </div>
        );
    }

    const handlePrevClick = () => {
        if (slider) {
            slider.prev();
        }
    };

    const handleNextClick = () => {
        if (slider) {
            slider.next();
        }
    };

    return (
        <section className="mt-10 md:max-w-[90%] mx-auto -mb-7">
            <div className="px-4 py-8 sm:px-6 lg:px-8">
                <div className='space-y-6 text-center mb-10 p-5 '>
                    <h className='text-3xl font-bold '> Health Tips </h>
                    <p className='text-[17px]'> Understanding and applying these health tips can lead to increased energy, better mood, and overall enhanced well-being. <br /> By adopting these habits, you can enjoy a more vibrant and active life</p>
                </div>

                <div className="mt-8 sm:mt-12 flex flex-col lg:flex-row gap-5 text-gray-800">
                    <div className="lg:w-[40%] hidden lg:flex items-center justify-center bg-gray-50 rounded-[7px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-4">
                        <div className=" text-center">
                            <h2 className="text-xl font-bold">
                                Unique Health Plans for a Balanced Life!
                            </h2>
                            <p className="mt-4">
                                Explore unique health plans crafted for your lifestyle, providing personalized strategies to enhance well-being, boost energy, and achieve a balanced life
                            </p>
                            {/* button */}
                            <div className="hidden lg:flex justify-center gap-3 mt-8">
                                <button
                                    id="keen-slider-previous-desktop"
                                    className="p-3 border border-white rounded-full bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] text-white"
                                    onClick={handlePrevClick}
                                >
                                    <IoIosArrowBack></IoIosArrowBack>
                                </button>
                                <button
                                    id="keen-slider-next-desktop"
                                    className="p-3 border border-white rounded-full bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] text-white"
                                    onClick={handleNextClick}
                                >
                                    <IoIosArrowForward></IoIosArrowForward>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* sliders */}
                    <div ref={sliderRef} className="keen-slider">
                        {recommendations.map((item) => (
                            <div key={item.title} className="keen-slider__slide">
                                <blockquote className="flex h-full flex-col justify-between p-4 sm:p-6 lg:p-10 bg-[#ECFFFB] rounded-[7px]">
                                    <div>
                                        <div className="">
                                            <p className="text-2xl font-bold   sm:text-3xl">
                                                {item.title}
                                            </p>

                                            <p className="mt-2 leading-relaxed">
                                                {item.content.slice(0, 200)}
                                            </p>
                                            <p className=" font-medium mt-2">
                                                Suggestions:
                                            </p>
                                            <ul className="text-xs">
                                                <li className="flex items-start gap-1">
                                                    <AiOutlineCaretRight className="  text-[18px] w-5"></AiOutlineCaretRight>{" "}
                                                    <span>{item.suggested_actions[0]}</span>
                                                </li>
                                                <li className="flex items-start gap-1">
                                                    <AiOutlineCaretRight className=" text-[18px] w-5"></AiOutlineCaretRight>{" "}
                                                    <span>{item.suggested_actions[1]}</span>
                                                </li>
                                                <li className="flex items-start gap-1">
                                                    <AiOutlineCaretRight className=" text-[18px] w-5"></AiOutlineCaretRight>{" "}
                                                    <span>{item.suggested_actions[2]}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <footer className="mt-2 text-sm ">
                                        &mdash; {item.suggestor_name}
                                    </footer>
                                </blockquote>
                            </div>
                        ))}
                    </div>

                    {/* button for small device */}
                    <div className="flex lg:hidden justify-center gap-3 mt-8">
                        <button
                            id="keen-slider-previous"
                            className="p-3 border border-white rounded-full bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] text-white"
                            onClick={handlePrevClick}
                        >
                            <IoIosArrowBack></IoIosArrowBack>
                        </button>
                        <button
                            id="keen-slider-next"
                            className="p-3 border border-white rounded-full bg-gradient-to-r from-[#24BAD2] to-[#31EDAF] text-white"
                            onClick={handleNextClick}
                        >
                            <IoIosArrowForward></IoIosArrowForward>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelthBlog;
