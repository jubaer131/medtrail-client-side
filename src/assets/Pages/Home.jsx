import Slider from "../Component/Slider";
import PopularMedicalCamp from "../Component/PopularMedicalCamp";
import FeedbackSection from "../Component/FeedbackSection";
import ChildrenSection from "../Component/ChildrenSection";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <div className='bg-[url(https://i.ibb.co/q0bV56r/design.png)] text-center bg-no-repeat bg-contain bg-top pt-32 -mt-4 md:-mt-12 relative z-50'>
                <PopularMedicalCamp ></PopularMedicalCamp>
            </div>
            <ChildrenSection></ChildrenSection>
            <div className="mt-20 w-full bg-green-200">
                <div className="w-[90%] md:max-w-5xl mx-auto">
                    <FeedbackSection></FeedbackSection>
                </div>
            </div>


        </div>
    );
};

export default Home;