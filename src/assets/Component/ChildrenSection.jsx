import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { Description } from "@headlessui/react";


const ChildrenSection = () => {


    const axiosPublic = UseAxiosPublic()

    const { data: children = [], isPending, refetch } = useQuery({
        queryKey: ['children'],
        queryFn: async () =>
            await axiosPublic('/childrencamp')
                .then(res => {
                    console.log(res.data);
                    return res.data;
                })
    });

    return (
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center mb-16">
                    <h2 className="md:text-3xl text-2xl font-bold mb-8 text-[#355c88]">Specialized Medical Camps for children</h2>
                    <p className="font-serif text-[16px] dark:text-gray-600 p-4">these camps often involve pediatric cardiologists, nurses, and other healthcare  professionals who <br /> specialize in treating CHD, ensuring that the children receive the medical care they need while also enjoying a fun and enriching camp experience.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 ">
                    {
                        children.map(item => <article className="flex flex-col dark:bg-gray-50">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={item.image} />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>

                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Camp Name :{item.campName}</h3>
                                <p>{item.healthcareProfessional}</p>
                                <p>{item.description}</p>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                    <span>{item.dateAndTime}</span>
                                    <span>{item.location}</span>
                                </div>
                            </div>
                        </article>)
                    }

                </div>
            </div>
        </section>
    );
};

export default ChildrenSection;