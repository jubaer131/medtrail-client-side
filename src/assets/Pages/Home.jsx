import Slider from "../Component/Slider";
import PopularMedicalCamp from "../Component/PopularMedicalCamp";
import FeedbackSection from "../Component/FeedbackSection";
import ChildrenSection from "../Component/ChildrenSection";
import { Helmet } from "react-helmet";
import HelthBlog from "../Component/HelthBlog";
import Navbar from "../Component/Navbar";
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
            <div className="mt-20 w-full bg-green-200 bg-[url(https://i.ibb.co/RhFSkwH/alternating-arrowhead-2.png)] rounded-full">
                <div className="w-[90%] md:max-w-5xl mx-auto">

                    <FeedbackSection></FeedbackSection>
                </div>
            </div>
            <div className="my-28 max-w-7xl mx-auto">
                <HelthBlog></HelthBlog>
            </div>

        </div>
    );
};

export default Home;