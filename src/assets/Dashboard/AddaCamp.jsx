import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import UseAxioussecure from "../Hooks/UseAxioussecure";
import { toast } from "react-toastify";


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

        <div className="max-w-4xl mx-auto p-8  shadow-md rounded-lg bg-[#0055B4]">
            <h1 className="text-center text-3xl font-semibold my-7 text-white">Add A Camp</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 text-white">Camp Name</label>
                        <input
                            type="text"
                            {...register('campName', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.campName && <p className="text-red-500 text-sm mt-1">Camp Name is required</p>}
                    </div>
                    <div>
                        <label className="block  text-white">Image Url</label>
                        <input
                            type="url"
                            {...register('image', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.image && <p className="text-red-500 text-sm mt-1">Image URL is required</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block  text-white">Camp Fees</label>
                        <input
                            type="number"
                            {...register('campFees', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.campFees && <p className="text-red-500 text-sm mt-1">Camp Fees are required</p>}
                    </div>
                    <div>
                        <label className="block text-white">Date & Time</label>
                        <input
                            type="datetime-local"
                            {...register('dateTime', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.dateTime && <p className="text-red-500 text-sm mt-1">Date & Time are required</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-white">Location</label>
                        <input
                            type="text"
                            {...register('location', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.location && <p className="text-red-500 text-sm mt-1">Location is required</p>}
                    </div>
                    <div>
                        <label className="block text-white">Healthcare Professional Name</label>
                        <input
                            type="text"
                            {...register('healthcareProfessional', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.healthcareProfessional && <p className="text-red-500 text-sm mt-1">Healthcare Professional Name is required</p>}
                    </div>
                </div>

                <div>
                    <label className="block text-white">Participant Count (starts at 0)</label>
                    <input
                        type="number"
                        {...register('participantCount', { required: true, min: 0 })}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                        defaultValue={0}
                    />
                    {errors.participantCount && <p className="text-red-500 text-sm mt-1">Participant Count is required and must be at least 0</p>}
                </div>

                <div>
                    <label className="block text-white">Description</label>
                    <textarea
                        {...register('description', { required: true })}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    ></textarea>
                    {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    );
};

export default AddaCamp;