
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxioussecure from "../Hooks/UseAxioussecure";
import { Link } from "react-router-dom";

const ManageCampCard = ({ item, refetch }) => {

    const axiosSecure = UseAxioussecure()

    const { CampName,
        image,
        campFees,
        dateTime,
        location,
        healthcareProfessional,
        participantCount,
        description, _id } = item


    const handleDeleteCamp = id => {
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

                axiosSecure.delete(`/delete/${id}`)
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
                    {CampName}
                </td>

                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    {dateTime}
                </td>

                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    {location}
                </td>
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                    {healthcareProfessional}

                </td>
                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                    <button onClick={() => handleDeleteCamp(_id)}><FaTrashAlt className="text-red-600"></FaTrashAlt> </button>
                </td>
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                    <Link to='/dashboard/updatemanagecamp'><button>Edite</button></Link>
                </td>
            </tr>
        </tbody>
    );
};

export default ManageCampCard;