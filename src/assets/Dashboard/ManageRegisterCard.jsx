import { useMutation } from "@tanstack/react-query";
import UseAxioussecure from "../Hooks/UseAxioussecure";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import { RiChatDeleteLine } from "react-icons/ri";
import Swal from "sweetalert2";

const ManageRegisterCard = ({ camp, refetch }) => {
    const axiosSecure = UseAxioussecure();
    const {
        campName,
        campFees,
        partcipentName,
        confirmationStatus,
        PaymentStatus,
        _id
    } = camp;

    const mutation = useMutation({
        mutationFn: async (confirmed) => {
            const { data } = await axiosSecure.patch(`/updatestatus/${_id}`, confirmed);
            return data;
        },
        onSuccess: (data) => {
            refetch();
            console.log(data);
            toast.success('Confirmation status Confirmed!');
        },

    });

    const handleUpdate = async () => {
        try {
            await mutation.mutateAsync({ confirmationStatus: 'Confirmed' });
        } catch (error) {
            console.error('Error during mutation:', error);
        }
    };

    const handledelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/registerdelete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Camp has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });
    }

    return (
        <tbody className='bg-white divide-y divide-gray-200 '>
            <tr>
                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    {partcipentName}
                </td>

                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    {campName}
                </td>

                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    ${campFees}
                </td>
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                    <div className='flex items-center gap-x-2'>
                        <p
                            className={`px-3 py-1 rounded-full  ${PaymentStatus === 'paid' ? 'text-green-500' : 'text-yellow-500'} text-xs`}
                        >
                            {PaymentStatus === 'paid' ? 'Paid' : 'Unpaid'}
                        </p>
                    </div>
                </td>
                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>

                    <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${confirmationStatus === 'pending' ? 'bg-yellow-100/60 text-yellow-500' : 'bg-green-100/60 text-green-500'}`}>
                        <button onClick={handleUpdate}>{confirmationStatus}</button>
                    </div>
                </td>
                <td className='px-4 py-4 text-sm whitespace-nowrap'>


                    {
                        PaymentStatus === 'paid' && confirmationStatus === 'Confirmed' ? <button><RiChatDeleteLine className="text-red-400 text-2xl"></RiChatDeleteLine></button> : <button onClick={() => handledelete(_id)}><AiFillDelete className="text-green-400 text-2xl"></AiFillDelete></button>

                    }



                </td>
            </tr >
        </tbody >
    );
};

export default ManageRegisterCard;
