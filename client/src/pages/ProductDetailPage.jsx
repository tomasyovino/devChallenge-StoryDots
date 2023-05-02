import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Carousel } from "../components";
import { useGetProductsQuery } from "../api/api";


const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { data: products } = useGetProductsQuery();

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async (id) => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    getProduct(id);
  }, [id]);

  const handleQuantity = (type) => {
      if(type === "dec") {
          if(quantity > 1) setQuantity(quantity - 1);
      } else {
          if(quantity < 10) setQuantity(quantity + 1);
      }
    };

  return (
    <section className="container mx-auto px-2 my-8 flex flex-col">
      <div className="flex gap-2 items-center font-medium">
        <Link to={"/store"}>Zapatillas</Link>
        <p>/</p>
        <span>{product?.name}</span>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start lg:justify-start">
        <img src={product?.image_url} alt={product?.name} className="h-96 p-4 rounded-xl shadow" draggable="false" />
        <div className="flex flex-col gap-4">
          <div className="font-semibold">
            <h2 className="text-2xl">{product?.name}</h2>
            <p className="text-base text-[#626262]">{product?.description}</p>
          </div>
          <span className="text-3xl font-bold">${product?.price}</span>
          <div className="flex flex-wrap justify-between lg:items-center">
            <div className="flex flex-col font-semibold">
              <span>Detalles de Entrega</span>
              <p className="text-base text-[#626262]">Comprobar fecha estimada de entrega.</p>
            </div>
            <div className="flex justify-end items-center relative lg:w-1/2">
              <input type="text" placeholder="Aplicar cupón de descuento" className="bg-white pl-4 pr-20 py-2 w-full" />
              <button className="absolute bg-transparent text-blue-400 border-none font-semibold">VER</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold">Cantidad:</span>
            <div className="flex items-center gap-2">
              <Remove 
                onClick={() => handleQuantity("dec")} 
                className="cursor-pointer text-white bg-blue-400 rounded"
              />
              <p>{quantity}</p>
              <Add 
                onClick={() => handleQuantity("add")} 
                className="cursor-pointer text-white bg-blue-400 rounded"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            <button className="bg-[#EDAE65]">Agregar al carrito</button>
            <button className="bg-blue-400 text-white">Agregar a deseados</button>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Puede que también te guste</h3>
        { products && <Carousel products={products} /> }
      </div>
    </section>
  )
}

export default ProductDetailPage