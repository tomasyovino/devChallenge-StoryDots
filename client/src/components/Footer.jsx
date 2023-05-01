import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, YouTube, LocationOn } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="py-4 lg:py-8 px-6 lg:px-20 bg-black text-white flex flex-col lg:flex-row justify-between items-start">
            <div className="flex flex-row gap-x-4 lg:gap-x-20 mb-8 lg:mb-0">
                <div className="flex flex-col gap-y-2">
                    <span className="text-base font-medium mb-2">Comprar por categoría</span>
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Más vendidos</Link>
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Mejor precio</Link>  
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Ofertas</Link>  
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Próximos</Link>  
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Vistos</Link>  
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Running</Link>  
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Unisex</Link>  
                </div>
                <div className="flex flex-col gap-y-2">
                    <span className="text-base font-medium mb-2">Nosotros</span>
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Contáctanos</Link>
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Sobre nosotros</Link>  
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Carreras</Link>  
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Sitios</Link>  
                </div>
                <div className="flex flex-col gap-y-2">
                    <span className="text-base font-medium mb-2">Política</span>
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Devoluciones</Link>
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Términos de uso</Link>  
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Mapa del lugar</Link>  
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Seguridad</Link>  
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Privacidad</Link>  
                    <Link to="/" className="text-[#B6B6B6] font-normal hover:text-white ease-in-out duration-300">Compilación EPR</Link>  
                </div>
            </div>
            <div className="flex flex-col gap-y-3">
                <div className="flex gap-2 mb-8">
                    <Link to="/" className="rounded-full bg-white text-black p-1">
                        <Facebook />
                    </Link>
                    <Link to="/" className="rounded-full bg-white text-black p-1">
                        <Instagram />
                    </Link>
                    <Link to="/" className="rounded-full bg-white text-black p-1">
                        <Twitter />
                    </Link>
                    <Link to="/" className="rounded-full bg-white text-black p-1">
                        <YouTube />
                    </Link>
                </div>
                <div className="flex items-center gap-1">
                    <LocationOn />
                    <span>Argentina, Buenos Aires</span>
                </div>
                <span className="text-sm text-[#B6B6B6]">© 2021 | Nike All Rights Reserved</span>
            </div>
        </footer>
    )
}

export default Footer