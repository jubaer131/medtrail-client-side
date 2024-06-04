import { AiOutlineDelete } from "react-icons/ai";

const ManageCampCard = ({ item }) => {

    const { CampName,
        image,
        campFees,
        dateTime,
        location,
        healthcareProfessional,
        participantCount,
        description } = item
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
                    <button><AiOutlineDelete></AiOutlineDelete> </button>
                </td>
                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                    <button>Edite</button>
                </td>
            </tr>
        </tbody>
    );
};

export default ManageCampCard;