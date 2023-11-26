import { Link } from "react-router-dom";


const Button = ({enlace = '#',contenido, ancho}) => {
    return (
        <Link
            to={enlace}
            className={`bg-lime-500 w-full ${ancho} block uppercase text-white py-3 rounded-md hover:bg-lime-600 transition-colors duration-300 text-center`}
        >
            {contenido}
        </Link>
    )
}

export default Button;