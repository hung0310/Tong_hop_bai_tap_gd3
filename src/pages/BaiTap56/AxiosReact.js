import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getDataBlogAllAPI } from '../../Apis/getDataAPI';
import Cookies from 'js-cookie';

const useGetData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false);
    const accessToken = Cookies.get("accessToken");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(false);
            try {
                alert(">>> accessToken: " + accessToken);
                const result = await getDataBlogAllAPI(accessToken);
                console.log('Here: ', result);
                setData(result);
            } catch (err) {
                setError(err); 
            } finally {
                setLoading(false);
            }
        };

        if (accessToken) {
            fetchData();
        }
    }, [accessToken]);

    return { data, loading, error };
}

const AxiosReact = () => {
    const { data, loading, error } = useGetData();
    if (error) {
        return <div className='d-flex justify-content-center align-items-center fw-bold display-6 mt-5'>Error: {error.message}</div>;
    }

    return (
        <div className="container pt-5">
            <DataTable
                value={data}
                stripedRows
                loading={loading}
                emptyMessage="No records found"
            >
                <Column
                    field="id"
                    header="STT"
                    body={(rowData, row) => row.rowIndex + 1}
                />
                <Column field="name" header="Content" />
            </DataTable>
        </div>
    );
};

export default AxiosReact;