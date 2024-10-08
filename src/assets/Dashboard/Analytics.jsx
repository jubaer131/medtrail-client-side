import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';
import { PuffLoader } from 'react-spinners';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Analytics = () => {
    const axiosPublic = UseAxiosPublic();

    const { data: chartdata = [], isPending, refetch } = useQuery({
        queryKey: ['chartdata'],
        queryFn: async () =>
            await axiosPublic('/analytics')
                .then(res => {
                    console.log(res.data);
                    return res.data;
                })
    });

    if (isPending) {
        return <div className="w-full h-[660px] flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader> </div>
    }

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <>
            <div className='space-y-4 mt-8 p-5'>
                <h1 className='text-center text-3xl  font-bold'>Participant Fee Data Overview</h1>
                <p className='text-center text-xl  font-medium'>This analytics report is based on the  registration fees paid by camp participants</p>
            </div>
            <div className='flex justify-center h-screen mt-4 md:mt-20'>

                <ResponsiveContainer width="95%" height={600}>
                    <BarChart
                        data={chartdata}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey='campName' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="campFees" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default Analytics;

