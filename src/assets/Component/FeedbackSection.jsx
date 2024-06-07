import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import FeedbackDetails from "./FeedbackDetails";


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
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800 mt-16">
                <div className="container  mx-auto space-y-8">
                    <div className="space-y-8 text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#38679d]">Participant Feedback</h2>
                        <p className="font-serif text-[18px] dark:text-gray-600 ">These glowing reviews not only inspire us to maintain our high standards but also serve as a source of confidence <br /> for prospective guests seeking a memorable and enjoyable stay with us..</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
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