/* eslint-disable react/prop-types */
import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Carousel = ({ products }) => {
    const sortedProducts = products && [...products].sort((a, b) => b.createdAt - a.createdAt);
    const newestProducts = sortedProducts?.slice(0, 10);

    return (
        <ReactCarousel responsive={responsive} infinite={true}>
            {
                newestProducts?.map((prod) => (
                    <div className="flex justify-center mx-2" key={prod._id}>
                        <Card product={prod} />
                    </div>
                ))
            }
        </ReactCarousel>
    );
};

export default Carousel;