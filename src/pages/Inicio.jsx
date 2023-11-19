import Hero from '../components/hero';
import ListadoCategorias from '../components/Categorias';
import SobreNosotros from '../components/SobreNosotros';
    
const Inicio = () => {


    return (
        <>
            <Hero />

            <section className="my-10 contenedor">
                <h2 className="text-4xl font-bold text-center mb-10">Categorías de Productos</h2>

                <ListadoCategorias />
            </section>

            <SobreNosotros />
            
        </>
    )
}

export default Inicio;