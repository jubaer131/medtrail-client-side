import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useState } from "react";
import CampCard from "./CampCard";
import { PropagateLoader, PuffLoader } from 'react-spinners';

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
    if (isPending) return <div className="w-full h-[660px] flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader> </div>

    const handleSeeAll = () => {
        setVisibleCamps(camps.length); // Show all camps
    };

    return (

        <div className="max-w-6xl mx-auto md:mt-36">
            <h1 className="md:text-4xl text-xl font-bold text-center md:my-8 mt-8  ">Popular medical camps</h1>
            <p className="text-center mb-8 md:text-xl max-sm:p-6">these popular medical camp offers a transformative experience, blending specialized medical care with recreational <br />activities and a supportive community. From educational workshops to outdoor adventures, it provides a holistic approach <br /> to wellness  empowering young patients to thrive despite their challenges. Year after year</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-8">
                {camps.slice(0, visibleCamps).map((camp) => (
                    <CampCard
                        key={camp._id}
                        camp={camp}
                    />
                ))}
            </div>
            {visibleCamps < camps.length && (

                <div className="text-center mt-8">

                    <a href="#_" class="relative px-5 py-2 font-medium text-white group">
                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-emerald-600 group-hover:bg-emerald-700 group-hover:skew-x-12"></span>
                        <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg--700 group-hover:bg-emerald-500 group-hover:-skew-x-12"></span>
                        <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-emerald-600 -rotate-12"></span>
                        <span class="absolute bottom-0 right-0 hidden w-20 h-50 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-emerald-400 -rotate-12"></span>
                        <span class="relative">  <button onClick={handleSeeAll} className="  font-bold py-2 px-4 rounded">See All</button></span>
                    </a>
                </div>
            )}
        </div>

    );
};

export default PopularMedicalCamp;