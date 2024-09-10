import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import FeedbackDetails from "./FeedbackDetails";
import { PuffLoader } from "react-spinners";


const FeedbackSection = () => {

    const axiosPublic = UseAxiosPublic()

    const { data: review = [], isPending, refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () =>
            await axiosPublic('/reviewsection')
                .then(res => {
                    return res.data;
                })
    });

    console.log(review)

    if (isPending) return <div className="w-full h-[660px] flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader> </div>
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800 mb-10">

                <div className="container  mx-auto space-y-4">
                    <div className="space-y-4 text-center mb-8">
                        <h2 className="md:text-4xl text-2xl font-bold text-white">Participant Feedback</h2>
                        <p className="font-serif md:text-[18px] text-gray-50 p-4">These glowing reviews not only inspire us to maintain our high standards but also serve as a source of confidence <br /> for prospective guests seeking a memorable and enjoyable stay with us..</p>

                    </div>
                    <div className="grid grid-cols-1 gap-x-4 md:gap-y-8 gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {
                            review.map(item => <FeedbackDetails item={item} isPending={isPending}></FeedbackDetails>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeedbackSection;