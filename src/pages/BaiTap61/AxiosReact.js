import React, { useState, useEffect } from 'react';
import { GetAll_Post_Not_auth_API } from '../../utils/studentApi';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ReactPaginate from 'react-paginate';

const AxiosReact = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const result = await GetAll_Post_Not_auth_API(currentPage);
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

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    };

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
                <ReactPaginate
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
                />                
            </div>

            <DataTable
                value={data}
                stripedRows
                emptyMessage="No records found"
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