/* eslint-disable react/prop-types */
import { Pagination as PaginationMUI} from "@mui/material";

const Pagination = ({ page, setPage, products, toShow }) => {
    const totalPages = Math.ceil(products?.length / toShow);
    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <PaginationMUI
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            color="primary"
            className="my-4"
        />
    );
};

export default Pagination;