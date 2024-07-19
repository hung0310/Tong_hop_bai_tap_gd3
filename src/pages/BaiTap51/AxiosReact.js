import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const AxiosReact = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://qt.levanlau.net/api/blog/blog_category_level_1_get_all_not_auth_api')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h3>AXIOS</h3>
            <DataTable value={data} loading={loading} responsiveLayout="scroll">
                <Column field="id" header="STT" body={(rowData, row) => row.rowIndex + 1} />
                <Column field="name" header="Content" />
            </DataTable>
        </div>
    );
};

export default AxiosReact;