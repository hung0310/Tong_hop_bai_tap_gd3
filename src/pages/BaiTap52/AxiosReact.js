import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useGetData } from '../../hooks/GetDataAxios';

const AxiosReact = () => {

    const { data, loading } = useGetData('https://qt.levanlau.net/api/blog/blog_category_level_1_get_all_not_auth_api');

    return (
        <div className='container pt-5'>
            <DataTable value={data} stripedRows loading={loading} responsiveLayout="scroll">
                <Column field="id" header="STT" body={(rowData, row) => row.rowIndex + 1} />
                <Column field="name" header="Content" />
            </DataTable>
        </div>
    );
};

export default AxiosReact;