import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getData } from '../../Apis/APIEx52';

const AxiosReact = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        try {
            const result = await getData();
            setData(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
      };

      fetchData();
    }, []);

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