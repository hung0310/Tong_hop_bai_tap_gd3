import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../assets/styles/stylePaginate.css';

export const useReactPaginate = (totalPage) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 2, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 2, totalPage));
    };

    const PaginationComponent = () => ( 
        <div className='d-flex'>
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="button-prev-next"
                style={{
                    fontSize: '24px'
                }}
            >
                &laquo;
            </button>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPage}
                previousLabel="<"
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
                forcePage={currentPage - 1}
            />
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPage}
                className="button-prev-next"
                style={{
                    fontSize: '24px'
                }}
            >
                &raquo;
            </button>
        </div>
    );

    return { currentPage, PaginationComponent };
};
