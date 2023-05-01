/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ product: { _id, name, price, image_url } }) => {
    return (
        <div className="flex flex-col rounded-xl py-2 border shadow hover:shadow-xl ease-in-out duration-300">
            <Link to={`/shoes/${_id}`}>
                <img src={image_url} alt={name} className="w-52" draggable="false" />
            </Link>
            <div className="flex justify-between items-center px-4">
                <span>{name}</span>
                <span>${price}</span>
            </div>
        </div>
    );
};

export default Card;