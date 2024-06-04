import { Link } from "react-router-dom";


const AvailableCampCard = ({ camp }) => {

    const {
        CampName, dateAndTime, image,
        campFees,
        location,
        healthcareProfessional,
        participantCount,
        _id
    } = camp

    return (
        <div>
            <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">

                <div className='space-y-2'>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">Camp Name : {CampName}</h2>
                    <p className="text-sm dark:text-gray-600">Location : {location}.</p>
                    <p> Health care Professional : {healthcareProfessional}</p>
                    <p> Date And Time : {dateAndTime}</p>
                    <p>Participant Count : {participantCount}</p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        <Link to={`/detailsavailablecamp/${_id}`}> <button className='btn'>Details</button></Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AvailableCampCard;