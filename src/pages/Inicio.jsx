import Hero from '../components/Hero';
import ListadoCategorias from '../components/Categorias';
import Productos from '../components/Productos';

    
const Inicio = () => {

    return (
        <>
            <Hero />

            <section className="my-10 contenedor">
                <h2 className="text-5xl font-bold text-center mb-10 font-display">Categorías de Productos</h2>

                <ListadoCategorias />
            </section>

            <section
                className="bg-nosotrosTel md:bg-nosotrosTable bg-top bg-[length:100%_100%] bg-no-repeat mb-10 object-cover"
            >
                <div
                    className="contenedor grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-10 h-[500px]"
                >
                    <div
                        className=" row-start-2 md:row-auto md:col-start-2 flex flex-col justify-top md:justify-center px-5"
                    >
                        <h2 className="text-5xl text-white mb-10 font-bold font-display">Sobre Nosotros</h2>

                        <p className="text-white font-normal text-[18px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi odio praesentium voluptatibus aperiam, distinctio reiciendis quo quidem eum maxime quis et commodi voluptas atque modi, quam eveniet expedita incidunt? Nam.</p>
                    </div>
                </div>
            </section>
            
            <main className="contenedor my-10 m-auto">
                <h2 className="text-5xl text-center font-bold font-display mb-10"> Nuestros Productos</h2>

                <Productos />
            </main>
        </>
    )
}

export default Inicio;