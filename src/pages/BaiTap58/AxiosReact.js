import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { GetAll_WithToken, GetAll_WithoutToken } from '../../Apis/utilsAxios';
import Cookies from 'js-cookie';

const useGetData = (accessToken = null) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(false);
            try {
                if(accessToken) {
                    const result = await GetAll_WithToken(accessToken);
                    setData(result);                    
                } else {
                    const result = await GetAll_WithoutToken();
                    setData(result);
                }
            } catch (err) {
                setError(err); 
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [accessToken]);

    return { data, loading, error };
}

const AxiosReact = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const accessToken = Cookies.get("accessToken");
    const { data: dataWithAcc, loading: loadingWithAcc, error: errorWithAcc } = useGetData(accessToken);
    const { data: dataWithoutAcc, loading: loadingWithoutAcc, error: errorWithoutAcc } = useGetData();

    const btn_get_with_acc = () => {
        setData(dataWithAcc);
        setLoading(loadingWithAcc);
        setError(errorWithAcc);
    };

    const btn_get_without_acc = () => {
        setData(dataWithoutAcc);
        setLoading(loadingWithoutAcc);
        setError(errorWithoutAcc);
    };
    
    if (error) {
        return <div className='d-flex justify-content-center align-items-center fw-bold display-6 mt-5'>Error: {error.message}</div>;
    }

    return (
        <div className="container pt-5">
            <div className='d-flex justify-content-center align-items-center my-4'>
                <Button
                  type="submit"
                  label="Get data with AccessToken"
                  className="p-button-raised"
                  style={{
                    borderRadius: "8px",
                  }}
                  onClick={btn_get_with_acc}
                />

                <Button
                  label="Get data without AccessToken"
                  className="p-button-raised ml-4"
                  style={{
                    borderRadius: "8px",
                  }}
                  onClick={btn_get_without_acc}
                />
            </div>
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