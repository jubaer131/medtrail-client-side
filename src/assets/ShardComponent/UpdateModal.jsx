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
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className=" space-y-4 border bg-white p-12">
                        <DialogTitle className="font-bold">Update Profile</DialogTitle>
                        <Description>You can update your profile from here</Description>
                        <form onSubmit={handleSubmit(onSubmit)} className=" md:w-[450px] mx-auto md:mt-10 mt-4 p-6 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-center box-border">
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
                                        readOnly
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
                            {/* Uncomment this section if you need to update phone number
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Phone Number:
                                    <input
                                        defaultValue={user?.phoneNumber}
                                        type="tel"
                                        {...register('phoneNumber')}
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                                </label>
                            </div>
                            */}
                            <button type="submit" className="mt-4 p-2 w-full bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Update
                            </button>
                        </form>
                        <div className="flex gap-4 mt-4">
                            <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default UpdateModal;
