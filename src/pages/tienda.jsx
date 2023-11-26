import Productos from "../components/Productos";

const Tienda = () => {
    return (
        <main className="contenedor my-10 m-auto">
            <h2 className="text-5xl text-center font-bold font-display mb-10"> Nuestros Productos</h2>

            <Productos />
        </main>
    )
}

export default Tienda;