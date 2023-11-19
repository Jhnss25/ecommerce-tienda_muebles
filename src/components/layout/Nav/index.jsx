import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="border-t-2">
            <div className="contenedor md:flex justify-between my-5">
                <Link
                    className="block text-center text-[20px] hover:text-blue transition ease-in-out duration-300 text-gray-700"
                    to="/"
                >
                    Inicio
                </Link>
                <Link 
                    className="block text-center text-[20px] hover:text-blue transition ease-in-out duration-300 text-gray-700" to="Nosotros">Nosotros</Link>
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