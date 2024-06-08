
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { Link } from "react-router-dom";

const ParticipantRegisterdCard = ({ registercamp, refetch }) => {

    const axiosPublic = UseAxiosPublic()

    const { campName,

        partcipentName,
        PaymentStatus,
        campFees,
        confirmationStatus, _id } = registercamp

    const handleDeleteRegistation = id => {
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

                axiosPublic.delete(`/cencelRegistation/${id}`)
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
                    {campName}
                </td>
                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    $ {campFees}
                </td>

                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>

                    {partcipentName}
                </td>
                {/* payment setap */}
                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    {PaymentStatus === 'Pay' ? <Link to={`/dashboard/payment/${_id}`}><button className="text-yellow-500 btn">Pay</button></Link> : <p className=" text-green-500">Paid</p>


                    }
                </td>
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                    <h2 className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${confirmationStatus === 'pending' ? 'bg-yellow-100/60 text-yellow-500' : 'bg-green-100/60 text-green-500'}`}>{confirmationStatus}</h2>

                </td>
                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                    {
                        PaymentStatus === 'paid' && confirmationStatus === 'Confirmed' ? <h2><RiDeleteBin5Line className="text-xl text-red-400"></RiDeleteBin5Line></h2> : <button onClick={() => handleDeleteRegistation(_id)} className="btn"><RiDeleteBin5Line className="text-xl text-green-400"></RiDeleteBin5Line></button>

                    }
                </td>
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                    {
                        PaymentStatus === 'paid' && confirmationStatus === 'Confirmed' ? <Link to='/dashboard/feedback'><button>Feedback</button></Link> : <h2>N/A</h2>

                    }
                </td>
            </tr>
        </tbody>
    );
};

export default ParticipantRegisterdCard;