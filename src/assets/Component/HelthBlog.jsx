import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const HelthBlog = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };

    return (
        <>

            <div className='space-y-6 text-center my-28 p-5 '>
                <h className='text-4xl font-bold '>Essential Health Tips for a Better Lifestyle</h>
                <p className='text-[17px]'> Understanding and applying these health tips can lead to increased energy, better mood, and overall enhanced well-being. <br /> By adopting these habits, you can enjoy a more vibrant and active life</p>
            </div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-xl border-2 border-emerald-400 ">
                        <div className="card-body">
                            <h2 className="card-title">Stay Hydrated</h2>
                            <p> 💧  Drinking enough water is crucial for your overall health. Aim for at least 8 glasses of water a day to keep your body hydrated, maintain energy levels, and support essential bodily functions.</p>
                            <p > 💧  Improves digestion, boosts skin health, enhances brain function, and prevents headaches.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-xl border-2 border-emerald-400">
                        <div className="card-body">
                            <h2 className="card-title"> Eat a Balanced Diet</h2>
                            <p>🥗 A diet rich in fruits, vegetables, whole grains, and lean proteins provides the necessary nutrients your body needs. Avoid excessive sugar, salt, and processed foods to maintain a healthy weight .</p>
                            <p>🥗 Strengthens the immune system, supports healthy weight, lowers the risk of heart disease.</p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-xl border-2 border-emerald-400">
                        <div className="card-body">
                            <h2 className="card-title"> Exercise Regularly</h2>
                            <p>🏃 Incorporate at least 30 minutes of moderate physical activity into your daily routine. Regular exercise improves cardiovascular health, strengthens muscles, enhances mood, and helps manage weight.</p>
                            <p>🏃 Reduces the risk of chronic diseases, improves mental health, enhances sleep quality.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-xl border-2 border-emerald-400">
                        <div className="card-body">
                            <h2 className="card-title">  Get Enough Sleep</h2>
                            <p>😴 Adequate sleep (7-9 hours per night) is essential for mental and physical well-being. Quality sleep improves memory, boosts mood, supports immune function, reduces stress levels.</p>
                            <p>😴 Enhances cognitive function, supports weight management, improves mood, and boosts immune health.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card bg-base-100 w-96 shadow-xl border-2 border-emerald-400">
                        <div className="card-body">
                            <h2 className="card-title"> Practice Stress Management</h2>
                            <p>🧘 Chronic stress can have negative effects on your health. Engage in relaxation techniques like meditation, deep breathing, or hobbies to manage stress effectively </p>
                            <p>🧘 Reduces anxiety, lowers blood pressure, improves mood, and promotes emotional well-being..</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <p className="append-buttons">
                <button onClick={() => prepend2()} className="prepend-2-slides">

                </button>
                <button onClick={() => prepend()} className="prepend-slide">

                </button>
                <button onClick={() => append()} className="append-slide">

                </button>
                <button onClick={() => append2()} className="append-2-slides">

                </button>
            </p>
        </>
    );
};

export default HelthBlog;