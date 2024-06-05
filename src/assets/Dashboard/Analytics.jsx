import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';

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
        return <div>Loading...</div>;
    }

    // const data = chartdata.map(camp => ({
    //     name: camp.campName,
    //     fee: camp.campFees
    // }));

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
        <div className='flex justify-center h-screen mt-8'>
            <ResponsiveContainer width="100%" height={400}>
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
    );
};

export default Analytics;

