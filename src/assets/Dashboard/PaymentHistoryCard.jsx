

const PaymentHistoryCard = ({ historydata }) => {

    const { campName,

        PaymentStatus,
        campFees,
        confirmationStatus, _id } = historydata

    return (
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {campName}
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                    ${campFees}
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                    <h2 className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${PaymentStatus === 'Pay' ? 'bg-yellow-100/60 text-yellow-500' : 'bg-green-100/60 text-green-500'}`}>{
                        PaymentStatus}</h2>
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div >

                        <h2 className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${confirmationStatus === 'pending' ? 'bg-yellow-100/60 text-yellow-500' : 'bg-green-100/60 text-green-500'}`}>{confirmationStatus}</h2>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default PaymentHistoryCard;