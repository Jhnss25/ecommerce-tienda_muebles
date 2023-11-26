import Button from "../components/Boton"


const Blog = () => {
    return (
        <div className="my-10 contenedor">
            <h2 className="text-5xl font-bold text-center mb-10 font-display">Nuestro Blog</h2>

            <div className="md:grid md:grid-cols-6 gap-10">
                <div className="md:col-start-1 md:col-end-5">

                    <article className="py-5">
                        <h2 className="text-3xl font-bold font-display mt-5 mb-10">Guía de Colores</h2>

                        <img className="w-full block" src="/img/nosotros.jpg" alt=""/>

                        <div className="my-5 md:flex md:justify-between xl:px-5">
                            <p className="text-[18px] font-bold leading-10">Fecha: <span className="text-blue">22 de Octubre de 2022</span></p>
                            <p className="text-[18px] font-bold leading-10">Escrito por: <span className="text-blue">TiendaMuebles</span></p>
                        </div>

                        <p className="font-light mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id numquam ducimus alias commodi eveniet, impedit amet! Quidem et tempore obcaecati vitae voluptatibus ipsam? Quae repudiandae sequi quas numquam nam.
                        </p>

                        <p className="font-light mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores amet maiores pariatur ea quisquam voluptatem numquam? In, nobis
                        </p>

                        <Button
                            contenido="Leer"
                            ancho="md:w-1/2"
                            enlace='/entrada'
                        />
                    </article>

                    <article className="py-5">
                        <h2 className="text-3xl font-bold font-display my-5">Guía de Colores</h2>

                        <img className="w-full block" src="/img/nosotros.jpg" alt=""/>

                        <div className="my-5 md:flex md:justify-between">
                            <p className="text-[18px] font-bold leading-10">Fecha: <span className="text-blue">22 de Octubre de 2022</span></p>
                            <p className="text-[18px] font-bold leading-10">Escrito por: <span className="text-blue">TiendaMuebles</span></p>
                        </div>

                        <p className="font-light mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id numquam ducimus alias commodi eveniet, impedit amet! Quidem et tempore obcaecati vitae voluptatibus ipsam? Quae repudiandae sequi quas numquam nam.
                        </p>

                        <p className="font-light mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores amet maiores pariatur ea quisquam voluptatem numquam? In, nobis
                        </p>

                        <Button
                            contenido="Leer"
                            ancho="md:w-1/2"
                            enlace='/entrada'
                        />
                    </article>
                </div>

                <aside className="md:col-start-5 md:col-end-7 py-5">
                    <h3 className="text-2xl font-bold font-display my-5 md:mb-10">Otras Entradas de Blog</h3>

                    <ul className="list-disc pl-10 font-light">
                        <li>Guía de Colores</li>
                        <li>Nuevos Modelos</li>
                        <li>Guía para diseño de interiores</li>
                        <li>Guía para diseño de exteriores</li>
                    </ul>
                </aside>
            </div>
        </div>
    )
}

export default Blog