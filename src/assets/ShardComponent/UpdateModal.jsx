import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import UseAuth from '../Hooks/UseAuth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateModal = () => {
    let [isOpen, setIsOpen] = useState(false)
    const { user, updateUserProfile } = UseAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data)

        try {
            const { name, email, photoURL } = data;
            await updateUserProfile(name, photoURL);
            console.log('Profile updated');
            toast.success('Update successful');
        } catch (error) {
            console.error('An error occurred:', error);
            toast.error('An error occurred while updating the profile');
        }
        setIsOpen(false)
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="p-2  text-white rounded-md ">
                Update Profile
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">
                    <DialogPanel className=" space-y-4  bg-lime-100 p-12 border border-lime-100 rounded-3xl">
                        <DialogTitle className="font-bold text-2xl text-center">Update Profile</DialogTitle>
                        <Description className="text-center ">You can update your profile from here</Description>
                        <form onSubmit={handleSubmit(onSubmit)} className=" md:w-[450px] mx-auto md:mt-10 mt-4 p-6 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center box-border">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Name:
                                    <input
                                        defaultValue={user?.displayName}
                                        type="text"
                                        {...register('name', { required: true })}
                                        className="mt-1 px-4 py-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                                        readOnly
                                        {...register('email', { required: true })}
                                        className="mt-1 px-4 py-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
                                        className="mt-1 px-4 py-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </label>
                            </div>

                            {/* <button type="submit" className="mt-4 p-2 w-full bg-lime-500 text-white rounded-md hover:bg-lime-600">
                                Update
                            </button> */}
                            <button type="submit" class="relative px-5 py-2 font-medium text-white group">
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-lime-500 group-hover:bg-lime-700 group-hover:skew-x-12"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-lime-700 group-hover:bg-lime-500 group-hover:-skew-x-12"></span>
                                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-lime-600 -rotate-12"></span>
                                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-lime-400 -rotate-12"></span>
                                <span class="relative">Update</span>
                            </button>
                        </form>

                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default UpdateModal;
