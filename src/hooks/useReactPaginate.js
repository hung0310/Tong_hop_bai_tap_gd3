import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export const useReactPaginate = (totalPage) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    };

    const PaginationComponent = () => (
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
            forcePage={currentPage - 1}
        />
    );

    return { currentPage, PaginationComponent };
};