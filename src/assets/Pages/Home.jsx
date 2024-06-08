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
            <PopularMedicalCamp ></PopularMedicalCamp>
            <FeedbackSection></FeedbackSection>
            <ChildrenSection></ChildrenSection>
        </div>
    );
};

export default Home;