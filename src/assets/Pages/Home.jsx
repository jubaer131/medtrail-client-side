import Slider from "../Component/Slider";
import PopularMedicalCamp from "../Component/PopularMedicalCamp";
import FeedbackSection from "../Component/FeedbackSection";
import ChildrenSection from "../Component/ChildrenSection";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularMedicalCamp ></PopularMedicalCamp>
            <FeedbackSection></FeedbackSection>
            <ChildrenSection></ChildrenSection>
        </div>
    );
};

export default Home;