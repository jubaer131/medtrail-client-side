import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import UseAxioussecure from "../Hooks/UseAxioussecure";
import { toast } from "react-toastify";
import { BiLogOutCircle } from "react-icons/bi";


const AddaCamp = () => {

    const axiosSecure = UseAxioussecure()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const mutation = useMutation({
        mutationFn: async (campdata) => {
            const { data } = await axiosSecure.post('/addacamp', campdata);
            return data;
        },
        onSuccess: async (data) => {

            toast.success('Successfully add a camp');
            reset();



        },

    });

    const onSubmit = async (data) => {

        console.log(data);
        const campName = data.campName
        const image = data.image
        const campFees = data.campFees
        const dateTime = data.dateTime
        const location = data.location
        const healthcareProfessional = data.healthcareProfessional
        const participantCount = parseInt(data.participantCount)
        const description = data.description

        const campdata = {
            campName,
            image,
            campFees,
            dateTime,
            location,
            healthcareProfessional,
            participantCount,
            description
        }
        console.log(campdata)
        try {
            await mutation.mutateAsync(campdata);

        } catch (error) {
            console.error('Error during mutation:', error);
        }



    };

    return (

        <div className="max-w-7xl mx-auto rounded-3xl p-4 flex  justify-center gap-5 shadow-md   bg-cover lg:mt-12 shadow-lime-500 hover:shadow-emerald-500">
            <div className="w-1/2 max-sm:hidden bg-[url('https://i.ibb.co/wJbtKd2/stethoscope-with-lung-shape-desk-23-2148533070.jpg')]">

            </div >

            <div className="lg:w-1/2 px-6">

                <h1 className="text-center text-3xl font-semibold  text-black mb-5">Add medical Camp</h1>
                <p className="text-center mb-5 p-2">A medical camp is an organized effort to provide essential healthcare services to communities in need, often in underserved or remote areas. These camps bring together medical professionals, volunteers, and resources to offer free or low-cost medical check-ups, treatments, and health education.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block  text-black ">Camp Name</label>
                            <input
                                type="text"
                                {...register('campName', { required: true })}
                                className="w-full mt-1 p-2  border-gray-300 rounded  border border-t-lime-500 "
                            />
                            {errors.campName && <p className="text-red-500 text-sm mt-1">Camp Name is required</p>}
                        </div>
                        <div>
                            <label className="block  text-black">Image Url</label>
                            <input
                                type="url"
                                {...register('image', { required: true })}
                                className="w-full mt-1 p-2  border-gray-300 rounded  border border-t-lime-500"
                            />
                            {errors.image && <p className="text-red-500 text-sm mt-1">Image URL is required</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block  text-black">Camp Fees</label>
                            <input
                                type="number"
                                {...register('campFees', { required: true })}
                                className="w-full mt-1 p-2  border-gray-300 rounded  border border-t-lime-500"
                            />
                            {errors.campFees && <p className="text-red-500 text-sm mt-1">Camp Fees are required</p>}
                        </div>
                        <div>
                            <label className="block text-black">Date & Time</label>
                            <input
                                type="datetime-local"
                                {...register('dateTime', { required: true })}
                                className="w-full mt-1 p-2  border-gray-300 rounded  border border-t-lime-500"
                            />
                            {errors.dateTime && <p className="text-red-500 text-sm mt-1">Date & Time are required</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-black">Location</label>
                            <input
                                type="text"
                                {...register('location', { required: true })}
                                className="w-full mt-1 p-2  border-gray-300 rounded  border border-t-lime-500"
                            />
                            {errors.location && <p className="text-red-500 text-sm mt-1">Location is required</p>}
                        </div>
                        <div>
                            <label className="block text-black">Healthcare Professional Name</label>
                            <input
                                type="text"
                                {...register('healthcareProfessional', { required: true })}
                                className="w-full mt-1 p-2  border-gray-300 rounded  border border-t-lime-500"
                            />
                            {errors.healthcareProfessional && <p className="text-red-500 text-sm mt-1">Healthcare Professional Name is required</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-black">Participant Count </label>
                        <input
                            type="number"
                            {...register('participantCount', { required: true, min: 0 })}
                            className="w-full mt-1 p-2  border-gray-300 rounded  border border-t-lime-500"
                            defaultValue={0}
                            readOnly
                        />
                        {errors.participantCount && <p className="text-red-500 text-sm mt-1">Participant Count is required and must be at least 0</p>}
                    </div>

                    <div>
                        <label className="block text-black">Description</label>
                        <textarea
                            {...register('description', { required: true })}
                            className="w-full mt-1 p-2  border-gray-300 rounded  border border-t-lime-500"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
                    </div>

                    <div className="">
                        {/* <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                        >
                            Submit
                        </button> */}
                        <div className="card-actions mt-4">
                            <button type="submit" className="relative w-[99%] mx-auto border border-lime-400 inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                                <span className="h-48 w-full rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white">Submit</span>
                            </button>
                        </div>


                    </div>
                </form>
            </div>

        </div>

    );
};

export default AddaCamp;