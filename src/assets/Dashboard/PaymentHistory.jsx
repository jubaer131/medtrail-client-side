import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import PaymentHistoryCard from "./PaymentHistoryCard";


const PaymentHistory = () => {

    const axiosPublic = UseAxiosPublic()

    const { data: history = [], isPending, refetch } = useQuery({
        queryKey: ['history'],
        queryFn: async () =>
            await axiosPublic('/paymenthistory')
                .then(res => {
                    return res.data;
                })
    });


    return (
        <div>
            <section className="container px-4 mx-auto pt-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <h2 className="text-lg font-medium text-gray-800">Payment History</h2>
                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full"></span>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                                            >
                                                <div className="flex items-center gap-x-3">
                                                    <span>Camp Name</span>
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                                            >
                                                <span>Camp Fees</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                                            >
                                                <button className="flex items-center gap-x-2">
                                                    <span>Payment Status</span>
                                                </button>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                                            >
                                                Confirmation Status
                                            </th>
                                        </tr>
                                    </thead>
                                    {
                                        history.map(historydata => <PaymentHistoryCard historydata={historydata} refetch={refetch}></PaymentHistoryCard>)

                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PaymentHistory;