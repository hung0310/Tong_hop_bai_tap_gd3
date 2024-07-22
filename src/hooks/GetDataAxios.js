import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetData = (link_API) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            axios.get(link_API)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
        };
        getData();
    }, [link_API]);

    return { data, loading };
};