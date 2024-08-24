import { Link } from "react-router-dom";
import { FaLocationDot, FaMonument } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { MdSupervisorAccount } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
const AvailableCampCard = ({ camp }) => {

    const {
        campName, dateAndTime, image,
        campFees,
        location,
        healthcareProfessional,
        participantCount,
        _id
    } = camp

    return (
        <div>
            <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-emerald-50 dark:text-gray-800">

                <div className='space-y-4'>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{campName}</h2>
                    <p className="text-sm dark:text-gray-600 flex items-center gap-3 "><FaLocationDot className="text-emerald-400" /> {location}.</p>
                    <p className="flex items-center gap-3 "> <FaUserDoctor className="text-emerald-400" /> {healthcareProfessional}</p>
                    <p>  {dateAndTime}</p>

                    <h2 className="text-[20px] font-medium flex justify-start items-center gap-4">  <FaMonument className="text-emerald-400"> </FaMonument>  Participant : <div className="badge badge-lg text-emerald-400">{participantCount}</div>  </h2>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        <Link to={`/detailsavailablecamp/${_id}`}>  <button className="relative px-5 py-2 font-medium  group  md:inline mt-5 pl-4">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>

                            <span className="flex items-center gap-2 relative"><BiLogOutCircle className="text-xl"></BiLogOutCircle> Details</span>
                        </button></Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AvailableCampCard;