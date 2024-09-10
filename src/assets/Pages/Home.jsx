import Slider from "../Component/Slider";
import PopularMedicalCamp from "../Component/PopularMedicalCamp";
import FeedbackSection from "../Component/FeedbackSection";
import ChildrenSection from "../Component/ChildrenSection";
import { Helmet } from "react-helmet";
import HelthBlog from "../Component/HelthBlog";
import Navbar from "../Component/Navbar";
import { Parallax } from 'react-parallax';

const Home = () => {
    return (
        <div className="relative">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="absolute w-full z-50">
                <Navbar></Navbar>
            </div>
            <Slider></Slider>
            <div className='bg-[url(https://i.ibb.co/q0bV56r/design.png)] text-center bg-no-repeat bg-contain bg-top pt-32 -mt-4 md:-mt-12 relative z-50'>
                <PopularMedicalCamp ></PopularMedicalCamp>
            </div>
            <ChildrenSection></ChildrenSection>
            <div className="mt-20 w-full bg-green-200 ">
                <Parallax blur={10} bgImage="https://i.ibb.co.com/mc0S7Ty/smiling-young-male-doctor-wearing-medical-robe-stethoscope-sitting-desk-with-work-tools-putting-hand.jpg" bgImageAlt="the cat" strength={400} >
                    <div className="w-[90%] md:max-w-5xl mx-auto">

                        <FeedbackSection></FeedbackSection>
                    </div>
                </Parallax>

            </div>
            <div className="my-28 max-w-7xl mx-auto">
                <HelthBlog></HelthBlog>
            </div>

        </div>
    );
};

export default Home;