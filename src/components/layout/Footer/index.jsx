import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
    const styleIcon = {
        fontSize: '24px',
        display: 'inline-block',
        marginRight: '3px',
        color: '#037bc0'
    }

    return (
      <footer className="border-t-2 pt-10">
        <div className="contenedor grid md:grid-cols-3">
            <div className="text-center md:text-left mb-10">
                <h2 className="font-display text-3xl font-bold mb-5">Categorías</h2>
                <ul className="text-[16px] leading-7">
                    <li className="hover:text-blue">
                        <a href="#">Cocina</a>
                    </li>
                    <li className="hover:text-blue">
                        <a href="#">Oficina</a>
                    </li>
                    <li className="hover:text-blue">
                        <a href="#">Jardín</a>
                    </li>
                    <li className="hover:text-blue">
                        <a href="#">Cochera</a>
                    </li>
                    <li className="hover:text-blue">
                        <a href="#">Dormitorios</a>
                    </li>
                </ul>
            </div>

            <div className="text-center md:text-left mb-10">
                <h2 className="font-display text-3xl font-bold mb-5">
                Sobre Nosotros
                </h2>
                <ul className="text-[16px] leading-7">
                    <li className="hover:text-blue">
                        <a href="#">Nuestra Historia</a>
                    </li>
                    <li className="hover:text-blue">
                        <a href="#">Misión, Visión y Valores</a>
                    </li>
                    <li className="hover:text-blue">
                        <a href="#">Carreras</a>
                    </li>
                    <li className="hover:text-blue">
                        <a href="#">Política de Privacidad</a>
                    </li>
                    <li className="hover:text-blue">
                        <a href="#">Términos del Servicio</a>
                    </li>
                </ul>
          </div>

          <div className="text-center md:text-left mb-10">
                <h2 className="font-display text-3xl font-bold mb-5">Soporte</h2>
                <ul className="text-[16px] leading-7">
                    <li className="hover:text-blue">
                        <a href="#">Preguntas Frecuentes</a>
                    </li>
                    <li className="hover:text-blue">
                        <a href="#">Ayuda en línea</a>
                    </li>
                    <li className="hover:text-blue">
                        <a href="#">Confianza y Seguridad</a>
                    </li>
                </ul>
          </div>
        </div>

        <p className="text-center font-bold text-[16px] mb-5">
            <AiFillCopyrightCircle color="#037bc0" style={styleIcon} />
            Todos los derechos Reservados |{" "} <span className="text-blue">TiendaMuebles</span>
        </p>
      </footer>
    );
}

export default Footer;