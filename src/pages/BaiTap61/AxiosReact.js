import React, { useState, useEffect } from 'react';
import { GetData_Not_auth_API } from '../../Apis/StudentAPI';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useReactPaginate } from '../../hooks/useReactPaginate';

const AxiosReact = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);
    const [totalPage, setTotalPage] = useState(0);
    const [pageSize, setPageSize] = useState(0);

    const { currentPage, PaginationComponent } = useReactPaginate(totalPage);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await GetData_Not_auth_API(currentPage);
                setData(result.data || []);
                const total = Math.ceil(result.totalRows / result.page_size); 
                setPageSize(result.page_size);
                setTotalPage(total);
            } catch (err) {
                setError(err); 
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    const getRowNumber = (index) => {
        return (currentPage - 1) * pageSize + index + 1;
    };
    
    if (error) {
        return <div className='d-flex justify-content-center align-items-center fw-bold display-6 mt-5'>Error: {error.message}</div>;
    }

    return (
        <div 
            className="container pt-5"
            style={{
                width: '1000px',
                marginTop: '50px',
                marginBottom: '100px'
            }}
        >
            <div className='d-flex justify-content-center align-items-center my-4'>
                {/* <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPage}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />                 */}
                <PaginationComponent />
            </div>

            <DataTable
                value={data}
                stripedRows
                emptyMessage="No records found"
                loading={loading}
            >
                <Column
                    field="id"
                    header="STT"
                    body={(rowData, row) => getRowNumber(row.rowIndex)}
                />
                <Column field="title" header="Content" />
            </DataTable>
        </div>
    );
};

export default AxiosReact;