import Slider from "../Component/Slider";
import PopularMedicalCamp from "../Component/PopularMedicalCamp";
import FeedbackSection from "../Component/FeedbackSection";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularMedicalCamp ></PopularMedicalCamp>
            <FeedbackSection></FeedbackSection>
        </div>
    );
};

export default Home;