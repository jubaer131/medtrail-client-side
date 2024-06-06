import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useState } from "react";
import CampCard from "./CampCard";


const PopularMedicalCamp = () => {

    const axiosPublic = UseAxiosPublic()
    const [visibleCamps, setVisibleCamps] = useState(3);

    const { isPending, data: camps = [], } = useQuery({
        queryKey: ['camps'],
        queryFn: async () =>
            await axiosPublic('/popularmedicalcamp')
                .then(res => {
                    return res.data
                })


    })
    if (isPending) return <div>Loading...</div>;
    const handleSeeAll = () => {
        setVisibleCamps(camps.length); // Show all camps
    };

    return (
        <div className=" container mx-auto md:mt-36">
            <h1 className="text-4xl font-bold text-center my-8">Popular medical camps</h1>
            <p className="text-center mb-8 text-xl">these popular medical camp offers a transformative experience, blending specialized medical care with recreational <br />activities and a supportive community. From educational workshops to outdoor adventures, it provides a holistic approach <br /> to wellness  empowering young patients to thrive despite their challenges. Year after year</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {camps.slice(0, visibleCamps).map((camp) => (
                    <CampCard
                        key={camp._id}
                        camp={camp}
                    />
                ))}
            </div>
            {visibleCamps < camps.length && (
                <div className="text-center mt-4">
                    <button onClick={handleSeeAll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">See All</button>
                </div>
            )}
        </div>
    );
};

export default PopularMedicalCamp;