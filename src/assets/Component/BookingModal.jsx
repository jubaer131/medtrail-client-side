import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'
import UseAuth from '../Hooks/UseAuth'
import { useMutation } from '@tanstack/react-query';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';
import { toast } from 'react-toastify';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm2 from './CheckoutForm2';
import { Link } from 'react-router-dom';
import { BiLogOutCircle } from 'react-icons/bi';



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);


const BookingModal = ({ campdetails, refetch }) => {


    let [isOpen, setIsOpen] = useState(false)
    const [gender, setGender] = useState('');
    const axiosPublic = UseAxiosPublic()
    const { user } = UseAuth()

    const { campName, dateAndTime, image,
        campFees,
        location,
        healthcareProfessional,
        participantCount,
        _id,
        description
    } = campdetails


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
        mutationFn: async (itemdata) => {
            const { data } = await axiosPublic.post('/joincamp', itemdata);
            return data;
        },
        onSuccess: async (data) => {
            toast.success('joining camp successful');

            // Update participant count
            await axiosPublic.patch(`/joincampdetails/${_id}`, {
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
        const partcipentName = user.displayName;
        const partcipentEmail = user.email;
        const PaymentStatus = 'paid';
        const confirmationStatus = 'pending';

        const itemdata = {
            age,
            phoneNumber,
            gender,
            emergencyContact,
            campName,
            campFees,
            location,
            healthcareProfessional,
            dateAndTime,
            partcipentName,
            partcipentEmail,
            confirmationStatus,
            PaymentStatus
        };

        try {
            await mutation.mutateAsync(itemdata);

        } catch (error) {
            console.error('Error during mutation:', error);
        }



    };





    return (
        <>
            {/* <Button
                onClick={open}
                className="rounded-md bg-sky-500 mt-5 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
            >
                Join Camp
            </Button> */}
            <button onClick={open} className="relative px-5 py-2 font-medium  group  md:inline mt-5 pl-4">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>

                <span className="flex items-center gap-2 relative"><BiLogOutCircle className="text-xl"></BiLogOutCircle> Join Camp</span>
            </button>

            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none " onClose={close}>
                    <div className="fixed inset-0 z-10  overflow-y-auto p-10">
                        <div className="flex min-h-full items-center justify-center  ">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-lg rounded-xl bg-white  border-2 border-emerald-200 shadow-2xl">
                                    <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                        Payment successful
                                    </DialogTitle>
                                    {/* from here */}

                                    <form onSubmit={handleSubmit} className="space-y-4 p-6">
                                        <div className='flex gap-5'>
                                            <div>
                                                <label className="block mb-2 font-medium ">Camp Name</label>
                                                <input type="text" readOnly className="w-full lg:w-[220px] p-2 border rounded" defaultValue={campName} />
                                            </div>
                                            <div>
                                                <label className="block mb-2 font-medium">Camp Fees</label>
                                                <input type="text" readOnly className="w-full lg:w-[220px]  p-2 border rounded" defaultValue={campFees} />
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
                                                className="w-full p-2 border rounded"
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
                                                className="w-full p-2 border rounded"
                                            />
                                        </div>


                                        <div>
                                            {/* payment */}
                                            <Elements stripe={stripePromise}>
                                                <CheckoutForm2 _id={_id}></CheckoutForm2>
                                            </Elements>
                                        </div>

                                        <button onClick={close} type="submit" className="btn my_modal_6 bg-emerald-400 w-full">Join Camp</button>

                                    </form>


                                    {/* <div className="mt-4">
                                        <Button
                                            className="inline-flex items-center gap-2 rounded-md bg-[#0055B4] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={close}
                                        >
                                            Cancel
                                        </Button>
                                    </div> */}
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default BookingModal;