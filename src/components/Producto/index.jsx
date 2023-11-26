import { formatearDinero } from "../../helpers"
import Button from "../Boton";

const Producto = ({ titulo, imagen, colStart, colEnd }) => {
    
    return (
        <div className={`my-5 sm:my-0 ${colStart} ${colEnd} sm:first-of-type:grid sm:first-of-type:grid-cols-6`}>
            <div className="sm:col-start-1 sm:col-end-5">
                <img className="w-full h-full" src={imagen} alt="Imagen producto 1"/>
            </div>

            <div
                className={`bg-blue py-5 px-10 sm:px-5 text-center overflow-hidden sm:col-start-5 sm:col-end-7 sm:flex sm:flex-col sm:justify-center`}
            >
                <h3 className="text-white text-3xl font-bold my-5">{titulo}</h3>
                <p className="text-white text-[18px] my-2 leading-5">
                    Proin condimentum sodales risus ut aliquet. Nuns eu neque quis sapien Fuegian posuere sed nec mauris.
                </p>

                <p className="text-white text-5xl sm:text-2xl md:text-3xl xl:text-5xl my-5">{formatearDinero(1000000)}</p>

                <Button
                    contenido="Agregar Carrito"
                    ancho="w-full"
                />
            </div>
        </div>
    )
}

export default Producto;