import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="border-t-2 md:sticky md:top-0 bg-white pb-1 shadow-lg z-40">
            <div className="contenedor md:flex justify-evenly my-5">
                <Link
                    className="block text-center text-[20px] hover:text-blue transition ease-in-out duration-300 text-gray-700"
                    to="/"
                >
                    Inicio
                </Link>
                <Link 
                    className="block text-center text-[20px] hover:text-blue transition ease-in-out duration-300 text-gray-700" to="nosotros">Nosotros</Link>
                <Link className="block text-center text-[20px] hover:text-blue transition ease-in-out duration-300 text-gray-700" 
                    to="tienda"
                >
                    Tienda
                </Link>
                <Link
                    className="block text-center text-[20px] hover:text-blue transition ease-in-out duration-300 text-gray-700"
                    to="blog"
                >
                    Blog
                </Link>
                <Link
                    className="block text-center text-[20px] hover:text-blue transition ease-in-out duration-300 text-gray-700"
                    to="galeria"
                >
                    Galería
                </Link>
                <Link
                    className="block text-center text-[20px] hover:text-blue transition ease-in-out duration-300 text-gray-700"
                    to="contacto"
                >
                    Contacto
                </Link>
            </div>
        </nav>
    )
}

export default Nav;