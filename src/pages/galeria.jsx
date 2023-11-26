import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Overlay from "../components/Overlay";

const Galeria = () => {
    const [ mostrarOverlay, setMostrarOverlay ] = useState(false);
    const [srcImagen, setSrcImagen] = useState('');
    const [images, setImages] = useState([]);
    const [body, setBody] = useState('');

    // Funciones
    // Muestra el Overlay
   const handleClickImage = (e) => {
        setSrcImagen(e.target.src);
        setMostrarOverlay(true);
        setBody('overflow-hidden');
    }

    // Cierra el Overlay
    const handleClickClose = () => {
        setMostrarOverlay(false);
        setBody('');
    }

    // Agrega las imágenes al estado images
    useEffect(() => {
        setImages(() => {
            let newImage = [];
            for (let i = 0; i < 9; i++) {
                newImage.push(`/img/galeria_0${i + 1}.jpg`);
            }
            return newImage;
        });
    }, []);

    // Agregar o quita al dar click una clase al body para que no se pueda dar scroll
    useEffect(() => {
        document.body.className = body;
    }, [handleClickImage, handleClickClose])

    return (
        <div className="py-10 contenedor">
            <h2 className="text-5xl font-bold text-center mb-10 font-display">Galería</h2>

            <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                {
                    images.map(image => {
                        return (
                            <li key={uuid()} className="cursor-pointer h-96" onClick={handleClickImage}>
                                <img loading="lazy" className="w-full h-full object-fill" key={uuid()} width="350" height="400" src={image} alt={`Imagen galería`} />
                            </li>
                        )
                    })
                }
            </ul>

            {
                mostrarOverlay && <Overlay
                        src={srcImagen}
                        alt="Imagen Galería"
                        handleClickClose={handleClickClose}
                    />
            }
        </div>
    )
}


export default Galeria;