

import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';
import { toast } from 'react-toastify';
import UseAuth from '../Hooks/UseAuth';
import { BiLogOutCircle } from 'react-icons/bi';

const BookingModal2 = ({ availablecamp, refetch }) => {

    let [isOpen, setIsOpen] = useState(false)
    const [gender, setGender] = useState('');
    const axiosPublic = UseAxiosPublic()
    const { user } = UseAuth()

    const { campName, dateTime, image,
        campFees,
        location,
        healthcareProfessional,
        participantCount,
        _id,
        description
    } = availablecamp


    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }
    const handleChange = (e) => {

        setGender(e.target.value);
    };





    const mutation = useMutation({
        mutationFn: async (availablecampdata) => {
            const { data } = await axiosPublic.post('/saveavailablecamp', availablecampdata);
            return data;
        },
        onSuccess: async (data) => {
            toast.success('joining successful');
            // Update participant count
            await axiosPublic.patch(`/bookingmodal2/${_id}`, {
                participantCount: 1,
            });
            setIsOpen(false);
            refetch()

        },

    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const age = form.age.value;
        const phoneNumber = form.phoneNumber.value;
        const gender = form.gender.value;
        const emergencyContact = form.emergencyContact.value;
        const partcipentName = user?.displayName;
        const partcipentEmail = user?.email;
        const PaymentStatus = 'Pay';
        const confirmationStatus = 'pending';

        const availablecampdata = {
            age,
            phoneNumber,
            gender,
            emergencyContact,
            campName,
            campFees,
            location,
            healthcareProfessional,
            dateTime,
            partcipentName,
            partcipentEmail,
            PaymentStatus,
            confirmationStatus
        };

        try {
            await mutation.mutateAsync(availablecampdata);

        } catch (error) {
            console.error('Error during mutation:', error);
        }



    };





    return (
        <>

            <button onClick={open} className="relative px-5 py-2 font-medium  group  md:inline mt-5 pl-4">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>

                <span className="flex items-center gap-2 relative"><BiLogOutCircle className="text-xl"></BiLogOutCircle> Join Camp</span>
            </button>

            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-lg rounded-xl bg-white p-8 border-2 border-emerald-200 shadow-2xl ">
                                    <DialogTitle as="h3" className="text-base/7 font-medium text-white">

                                    </DialogTitle>
                                    {/* from here */}

                                    <form onSubmit={handleSubmit} className="space-y-4 ">
                                        <div className='flex gap-5'>
                                            <div>
                                                <label className="block mb-2 font-medium">Camp Name</label>
                                                <input type="text" readOnly className=" w-full lg:w-[220px] p-2 border rounded" defaultValue={campName} />
                                            </div>
                                            <div>
                                                <label className="block mb-2 font-medium">Camp Fees</label>
                                                <input type="text" readOnly className="w-full lg:w-[220px] p-2 border rounded" defaultValue={campFees} />
                                            </div>
                                        </div>
                                        <div className='flex gap-5'>
                                            <div>
                                                <label className="block mb-2 font-medium">Location</label>
                                                <input type="text" readOnly className="w-full lg:w-[220px] p-2 border rounded" defaultValue={location} />
                                            </div>
                                            <div>
                                                <label className="block mb-2 font-medium">Doctor</label>
                                                <input type="text" readOnly className="w-full lg:w-[220px] p-2 border rounded" defaultValue={healthcareProfessional} />
                                            </div>
                                        </div>
                                        <div className='flex gap-5'>
                                            <div>
                                                <label className="block mb-2 font-medium"> Name</label>
                                                <input type="text" readOnly className="w-full lg:w-[220px] p-2 border rounded" defaultValue={user?.displayName} />
                                            </div>
                                            <div>
                                                <label className="block mb-2 font-medium"> Email</label>
                                                <input type="text" readOnly className="w-full lg:w-[220px] p-2 border rounded" defaultValue={user?.email} />
                                            </div>
                                        </div>

                                        <div className='flex gap-5'>
                                            <div>
                                                <label className="block mb-2 font-medium">Age</label>
                                                <input
                                                    type="number"
                                                    name="age"

                                                    required
                                                    className="w-full lg:w-[220px] p-2 border rounded"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 font-medium">Phone Number</label>
                                                <input
                                                    type="number"
                                                    name="phoneNumber"

                                                    required
                                                    className="w-full lg:w-[220px] p-2 border rounded"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block mb-2 font-medium">Gender</label>
                                            <select
                                                name="gender"
                                                value={gender} // Set the 'value' attribute to the selected gender state
                                                onChange={handleChange} // Call the handleChange function when the selection changes
                                                required
                                                className="w-full  p-2 border rounded"
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block mb-2 font-medium">Emergency Contact </label>
                                            <input
                                                type="number"
                                                name="emergencyContact"

                                                required
                                                className="w-full  p-2 border rounded"
                                            />
                                        </div>


                                        <div>
                                            {/* payment */}

                                        </div>

                                        {/* <button onClick={close} type="submit" className="btn my_modal_6 bg-emerald-400 w-full">Join Camp</button> */}
                                        <div className="card-actions mt-4">
                                            <button type="submit" className="relative w-[99%] mx-auto border border-lime-400 inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group">
                                                <span className="h-48 w-full rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                <span className="relative w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white">join camp</span>
                                            </button>
                                        </div>
                                    </form>




                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default BookingModal2;