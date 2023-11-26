import Producto from "../Producto";
import { v4 as uuid } from 'uuid';

const Productos = () => {

    const productos = [
        {
            titulo: 'Producto 1',
            img: '/img/producto1.jpg',
            colStart: 'col-start-1',
            colEnd: 'col-end-7'
        },
        {
            titulo: 'Producto 2',
            img: '/img/producto2.jpg',
            colStart: 'col-start-1',
            colEnd: 'col-end-4'
        },
        {
            titulo: 'Producto 3',
            img: '/img/producto3.jpg',
            colStart: 'col-start-4',
            colEnd: 'col-end-7'
        },
        {
            titulo: 'Producto 4',
            img: '/img/producto4.jpg',
            colStart: 'col-start-1',
            colEnd: 'col-end-3'
        },
        {
            titulo: 'Producto 5',
            img: '/img/producto5.jpg',
            colStart: 'col-start-3',
            colEnd: 'col-end-5'
        },
        {
            titulo: 'Producto 6',
            img: '/img/producto6.jpg',
            colStart: 'col-start-5',
            colEnd: 'col-end-7'
        },
    ];

  return (
      <div className="sm:grid sm:grid-cols-6 gap-5">
        
        {
            productos.map(producto => {
                const { titulo, img, colStart, colEnd } = producto;

                return <Producto
                    titulo={titulo}
                    imagen={img}
                    colStart={colStart}
                    colEnd={colEnd}
                    key={uuid()}
                />
            })
        }
    </div>
  )
}

export default Productos