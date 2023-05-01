/* eslint-disable react/prop-types */
import { Card } from "../components";

const CardContainer = ({ products, orderBy, page, toShow }) => {
    const sortedProducts = products && [...products];

    if (orderBy === "price -") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (orderBy === "price +") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 lg:px-2 mt-2">
            {sortedProducts?.slice((page - 1) * toShow, page * toShow).map((p) => (
                <Card key={p._id} product={p} />
            ))}
        </div>
    );
};

export default CardContainer;