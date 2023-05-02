import { useState } from "react";
import { Pagination } from "../components";
import { useGetProductsQuery } from "../api/api";
import CardContainer from "../container/CardContainer";
import brandBackground from "../assets/brand_background.png";

const StorePage = () => {
  const [toShow, setToShow] = useState(9);
  const [orderBy, setOrderBy] = useState("position");
  const [page, setPage] = useState(1);
  const { data: products } = useGetProductsQuery();

  return (
    <section className="pb-8">
      <div
        className="flex flex-col justify-center items-start pl-6 h-80 bg-no-repeat bg-cover bg-center text-white mb-8"
        style={{ backgroundImage: `url(${brandBackground})` }}
      >
        <h2 className="font-bold">UP TO 70% OFF</h2>
        <h1 className="font-bold">BLACK FRIDAY</h1>
      </div>
      <div className="container mx-auto flex flex-col gap-y-6 px-2 lg:flex-row lg:justify-between lg:items-start">
        {/* FILTER */}
        <div className="flex justify-between items-center lg:w-3/12 lg:flex-col lg:items-start lg:gap-y-4 lg:shadow-xl lg:rounded-xl lg:p-4">
          <span className="hidden font-medium lg:block">Mostrando {((page - 1) * toShow) + 1} - {Math.min(page * toShow, products?.length)} de {products?.length} artículos</span>
          <div className="flex w-full items-center justify-between lg:flex-col lg:gap-y-6 lg:items-start">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium">Mostrar</span>
              <select
                name="Mostrar"
                className="bg-white"
                defaultValue={"9"}
                onChange={(e) => setToShow(e.target.value)}
              >
                <option value={9}>9</option>
                <option value={12}>12</option>
                <option value={15}>15</option>
              </select>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium">Ordenar por</span>
              <select
                name="Ordenar por"
                className="bg-white"
                defaultValue={"position"}
                onChange={(e) => setOrderBy(e.target.value)}
              >
                <option value="position">Posición</option>
                <option value="price +">Precio ↑</option>
                <option value="price -">Precio ↓</option>
              </select>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="lg:w-10/12 flex flex-col items-center gap-y-2 lg:items-start">
          <CardContainer products={products} orderBy={orderBy} page={page} toShow={toShow} />
          <Pagination
            page={page}
            setPage={setPage}
            products={products}
            toShow={toShow}
          />
        </div>
      </div>
    </section>
  )
}

export default StorePage