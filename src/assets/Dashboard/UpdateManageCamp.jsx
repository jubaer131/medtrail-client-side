import { useMutation, useQuery } from "@tanstack/react-query";
import UseAxioussecure from "../Hooks/UseAxioussecure";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";


const UpdateManageCamp = () => {

    const { id } = useParams()
    const { data: managecamp = [], isPending, refetch } = useQuery({
        queryKey: ['managecamp'],
        queryFn: async () =>
            await axiosSecure('/managecamp')
                .then(res => {
                    const match = res.data.find(item => item._id === id);
                    return match
                })
    });
    const { campName,
        image,
        campFees,
        dateTime,
        location,
        healthcareProfessional,
        participantCount,
        description, _id } = managecamp;






    const axiosSecure = UseAxioussecure()
    const { register, handleSubmit, formState: { errors } } = useForm();


    const mutation = useMutation({
        mutationFn: async (campdata) => {
            const { data } = await axiosSecure.put(`/updarecamp/${id}`, campdata);
            return data;
        },
        onSuccess: async (data) => {
            toast.success('Successfully Update camp');



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
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
            <h1 className="text-center text-3xl font-semibold my-7">Update  Camp</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Camp Name</label>
                        <input
                            type="text"
                            defaultValue={campName}
                            {...register('campName', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.campName && <p className="text-red-500 text-sm mt-1">Camp Name is required</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Image</label>
                        <input
                            type="url"
                            defaultValue={image}
                            {...register('image', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.image && <p className="text-red-500 text-sm mt-1">Image URL is required</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Camp Fees</label>
                        <input
                            type="number"
                            defaultValue={campFees}
                            {...register('campFees', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.campFees && <p className="text-red-500 text-sm mt-1">Camp Fees are required</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Date & Time</label>
                        <input
                            type="datetime-local"
                            defaultValue={dateTime}
                            {...register('dateTime', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.dateTime && <p className="text-red-500 text-sm mt-1">Date & Time are required</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Location</label>
                        <input
                            type="text"
                            defaultValue={location}
                            {...register('location', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.location && <p className="text-red-500 text-sm mt-1">Location is required</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Healthcare Professional Name</label>
                        <input
                            type="text"
                            defaultValue={healthcareProfessional}
                            {...register('healthcareProfessional', { required: true })}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.healthcareProfessional && <p className="text-red-500 text-sm mt-1">Healthcare Professional Name is required</p>}
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700">Participant Count </label>
                    <input
                        type="number"

                        {...register('participantCount', { required: true, min: 0 })}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                        defaultValue={participantCount}
                    />
                    {errors.participantCount && <p className="text-red-500 text-sm mt-1">Participant Count is required and must be at least 0</p>}
                </div>

                <div>
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        defaultValue={description}
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

export default UpdateManageCamp;