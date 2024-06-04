import { useForm } from "react-hook-form";
import UseAuth from "../Hooks/UseAuth";
import UseOrganizer from "../Hooks/UseOrganizer";


const UpdateProfile = () => {

    const { user } = UseAuth()
    const [item, isLoading] = UseOrganizer()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form data submitted:', data);

    };

    return (
        <div className="mt-16">
            <h1 className="text-center text-3xl font-semibold">Update Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 mx-auto md:mt-10 mt-4 p-6 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center box-border">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Name:
                        <input
                            defaultValue={user?.displayName}
                            type="text"
                            {...register('name', { required: true })}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.name && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Email:
                        <input
                            defaultValue={user?.email}
                            type="email"
                            {...register('email', { required: true })}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Photo URL:
                        <input
                            defaultValue={user?.photoURL}
                            type="url"
                            {...register('photoURL')}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Phone Number:
                        <input
                            type="tel"
                            {...register('phoneNumber', { required: true })}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                    </label>
                </div>
                <button type="submit" className="mt-4 p-2 w-full bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Update
                </button>
            </form>
        </div>


    );
};

export default UpdateProfile;