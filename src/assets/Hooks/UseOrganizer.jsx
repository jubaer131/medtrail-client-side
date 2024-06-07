
import { useQuery } from '@tanstack/react-query'
import UseAuth from './UseAuth';
import UseAxiosPublic from './UseAxiosPublic';

const UseOrganizer = () => {
    const { user, loading } = UseAuth();
    console.log('Current User from Useorganizer:', user);
    const axiosPublic = UseAxiosPublic()

    const { data: item = '', isLoading, error } = useQuery({
        queryKey: ['role', user?.email],
        // enabled: !loading && !!user?.email,
        queryFn: async () => {

            const { data } = await axiosPublic.get(`/user/${user?.email}`);
            console.log('Received data:', data);
            return data;
        },
    });



    return [item, isLoading];
};

export default UseOrganizer;
