import { Link } from "react-router-dom";

const ListadoCategorias = () => {

    return (
        <div className="sm:grid sm:grid-cols-3 gap-5">
            <div className="mb-5 md:mb-0">
                <img 
                    className="w-full"
                    src="/img/categoria1.jpg"
                    alt="Imagen Oficina" 
                />
                <Link
                    className="block py-5 text-center text-2xl hover:bg-blue hover:text-white rounded-ee-lg" 
                    to="#"
                >
                    Oficina
                </Link>
            </div>
            
            <div className="mb-5 md:mb-0">
                <img 
                    className="w-full"
                    src="/img/categoria2.jpg"
                    alt="Imagen Hogar" 
                />
                <Link
                    className="block py-5 text-center text-2xl hover:bg-blue hover:text-white rounded-ee-lg"
                    to="#"
                >
                    Hogar
                </Link>
            </div>

            <div className="mb-5 md:mb-0">
                <img 
                    className="w-full"
                    src="/img/categoria3.jpg"
                    alt="Imagen Cocina" 
                />
                <Link
                    className="block py-5 text-center text-2xl hover:bg-blue hover:text-white rounded-ee-lg"
                    to="#"
                >
                    Cocina
                </Link>
            </div>
        </div>
    )
}

export default ListadoCategorias;