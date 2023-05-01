import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../api/api";
import { Card } from "../components";
import { East } from "@mui/icons-material";
import bannerImage from "../assets/banner_image.png";
import brandBackground from "../assets/brand_background.png";
import marketBackground1 from "../assets/market_background_1.png";
import marketBackground2 from "../assets/market_background_2.png";

const HomePage = () => {
  const { data: products } = useGetProductsQuery();

  const sortedProducts = products && [...products].sort((a, b) => b.createdAt - a.createdAt);
  const newestProducts = sortedProducts?.slice(0, 4);

  return (
    <>
      <main className="container mx-auto flex flex-col-reverse lg:flex-row lg:justify-between items-center py-5 px-4 lg:px-20 mb-16">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-6xl font-bold">Air Jordan 1</h2>
          <h3 className="text-3xl text-blue-400 font-bold">Mid SE Craft</h3>
          <p className="text-md">Su construcción inspirada en el {`"revés"`}, que incluye capas únicas y detalles de espuma a la vista, sube la apuesta de esta silueta atemporal de Jordan Brand. Detalles como la costura deco en el Swoosh añaden un atractivo codiciado, mientras que el sombreado inesperado, la rica mezcla de materiales y la estética envejecida de la entresuela dan a este lanzamiento un acabado artesanal.</p>
          <div className="flex gap-6 justify-end items-center">
            <Link to="/store" className="text-white text-md font-bold py-3 px-6 bg-blue-400 rounded-full hover:bg-blue-700 ease-in-out duration-300">BUY NOW</Link>
            <Link to="/store" className="text-white text-md font-bold py-3 px-6 bg-blue-400 rounded-full hover:bg-blue-700 ease-in-out duration-300">VIEW MORE</Link>
          </div>
        </div>
        <img src={bannerImage} alt="Air Jordan 1" className="w-full lg:w-1/2" />
      </main>

      <section className="flex flex-col container mx-auto py-5 px-4 lg:px-20 mb-16">
        <div className="flex justify-between">
          <h4 className="text-xl font-semibold">Novedades</h4>
          <Link to="/store" className="font-semibold leading-6 ease-in-out duration-300 hover:text-blue-400">Ver todo</Link>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-2 lg:px-2 mt-2">
          {
            newestProducts?.map((product) => (
              <Card key={product._id} product={product} />
            ))
          }
        </div>
      </section>

      <section className="py-12 bg-gray-200">
        <div className="container mx-auto flex flex-col px-4">
          <div
            className="flex flex-col justify-center items-start pl-6 h-96 rounded-xl bg-no-repeat bg-cover  bg-center text-white mb-8"
            style={{ backgroundImage: `url(${brandBackground})` }}
          >
            <span className="text-xl">ESTILO DE VIDA</span>
            <p className="text-4xl font-bold w-1/3">El mejor producto de la mejor marca</p>
          </div>
          <div className="flex justify-between items-center gap-x-8">
            <div 
              className="flex flex-col justify-between items-end pr-2 pl-2 lg:pr-6 pt-8 pb-4 w-1/2 h-60 rounded-xl bg-no-repeat bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${marketBackground1})` }}
            >
              <p className="text-2xl font-bold lg:w-1/3">¿Por qué Nike?</p>
              <Link to="/" className="p-4 bg-blue-400 text-white rounded-full hover:bg-blue-700 ease-in-out duration-300"><East /></Link>
            </div>
            <div 
              className="flex flex-col justify-between items-end pr-2 pl-2 lg:pr-6 pt-8 pb-4 w-1/2 h-60 rounded-xl bg-no-repeat bg-cover text-white"
              style={{ backgroundImage: `url(${marketBackground2})` }}
            >
              <p className="text-2xl font-bold lg:w-1/3">Deportivas & Running</p>
              <Link to="/" className="p-4 bg-blue-400 text-white rounded-full hover:bg-blue-700 ease-in-out duration-300"><East /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage