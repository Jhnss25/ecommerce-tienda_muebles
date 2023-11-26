import { useState, useEffect } from "react"
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import FieldInput from "../components/FieldInput"
import { mostrarErrores } from "../helpers";
import MostrarAlerta from "../components/MostrarAlerta";


const Contacto = () => {

    const [formData, setFormData] = useState(
        {
            nombre: '',
            asunto: '',
            email: '',
            telefono: '',
            mensaje: '',
            pais: '',
            tipoUsuario: '',
            categoria: ''
        }
    );
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [alertaCorrecto, setAlertaCorrecto] = useState(false);
    const [errores, setErrores] = useState([]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value.trim(),
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrores(mostrarErrores(formData));

        if (!Object.values(formData).some(dato => dato === '')) {            
            
            setAlertaCorrecto(true);
        
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formDataToSend)
            // };
            
            // fetch('/api/submitForm', requestOptions)
            // .then(response => response.json())
            // .then(data => console.log(data))
            // .catch(error => console.log(error));
            
            setFormData({
                nombre: '',
                asunto: '',
                email: '',
                telefono: '',
                mensaje: '',
                pais: '',
                tipoUsuario: '',
                categoria: ''
            });

            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
        
    }

    useEffect(() => {
        if (errores.length > 0) {
            setMostrarAlerta(true);

            setTimeout(() => {
                setMostrarAlerta(false);
            }, 4000);
        } else {
            setMostrarAlerta(false);
        }
    }, [errores]);


    return (
        <div className="my-10">
            <h2 className="text-5xl font-bold text-center mb-10 font-display">Contacto</h2>

            <form
                className="w-[95%] max-w-[600px] mx-auto"
                onSubmit={handleSubmit}

            >
                <fieldset className="border-2 border-solid border-gray-400 mb-10">
                    <legend className="text-2xl uppercase bg-sky-800 text-white font-bold py-2 w-[90%] text-center mx-auto mb-8">Tu Datos</legend>

                    <FieldInput
                        type="text"
                        label="Nombre"
                        value={formData.name}
                        fnHandleChange={handleChange}
                    />
                    <FieldInput
                        type="text"
                        label="Asunto"
                        value={formData.asunto}
                        fnHandleChange={handleChange}
                    />
                    <FieldInput
                        type="email"
                        label="Email"
                        value={formData.email}
                        fnHandleChange={handleChange}
                    />
                    <FieldInput
                        type="tel"
                        label="Telefono"
                        value={formData.telefono}
                        fnHandleChange={handleChange}
                    />

                    <div className="sm:grid sm:grid-cols-6 mb-5 px-5 sm:gap-5">
                        <label
                            className="sm:col-start-1 sm:col-end-2 text-[18px] font-bold text-blue pt-1"
                            htmlFor='mensaje'
                        >
                            Mensaje:
                        </label>
                        <textarea
                            className="border w-full sm:col-start-2 sm:col-end-7 py-2 px-5 h-52"
                            name='mensaje'
                            id="mensaje"
                            defaultValue={formData.mensaje}
                            placeholder="Tu Mensaje"
                            onChange={handleChange}
                        >
                            {/* {formData.mensaje} */}
                        </textarea>
                    </div>
                </fieldset>

                <fieldset className="border-2 border-solid border-gray-400 mb-10">
                    <legend className="text-2xl uppercase bg-sky-800 text-white font-bold py-2 w-[90%] text-center mx-auto mb-8">País</legend>

                    <div className="grid grid-cols-6 mb-5 px-5 items-center gap-5">
                        <label
                            className=" col-start-1 col-end-2 text-[18px] font-bold text-blue"
                            htmlFor='mensaje'
                        >
                            País
                        </label>

                        <select
                            className="border w-full col-start-2 col-end-7 py-2 px-5  text-sky-900 outline-none"
                            name='pais'
                            defaultValue={formData.pais} //value={formData.pais}
                            onChange={handleChange}
                        >
                            <option disable="true" value=''>--Seleccione--</option>
                            <option value='MX'>México</option>
                            <option value='PE'>Perú</option>
                            <option value='CO'>Colombia</option>
                            <option value='ECU'>Ecuador</option>
                            <option value='ES'>España</option>
                            <option value='CL'>Chile</option>
                        </select>
                    </div>
                    
                </fieldset>

                <fieldset className="border-2 border-solid border-gray-400 mb-10">
                    <legend className="text-2xl uppercase bg-sky-800 text-white font-bold py-2 w-[90%] text-center mx-auto mb-8">Información Extra</legend>

                    <div className="grid grid-cols-2 justify-center sm:grid-cols-6 mb-5 px-5 items-center sm:gap-5">
                        <label
                            className=" sm:col-start-1 sm:col-end-2 text-[18px] font-bold text-blue"
                            htmlFor='mensaje'
                            
                        >
                            Cliente
                        </label>

                        <input
                            type="radio"
                            id="cliente"
                            name="tipoUsuario"
                            value="cliente"
                            checked={formData.tipoUsuario === 'cliente'}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-2 justify-center sm:grid-cols-6 mb-5 px-5 items-center sm:gap-5">
                        <label
                            className=" sm:col-start-1 sm:col-end-2 text-[18px] font-bold text-blue"
                            htmlFor='mensaje'
                        >
                            Proveedor
                        </label>

                        <input
                            type="radio"
                            id="proveedor"
                            value="proveedor"
                            name="tipoUsuario"
                            checked={formData.tipoUsuario === 'proveedor'}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="sm:grid sm:grid-cols-6 mb-5 px-5 sm:items-center sm:gap-5">
                        <label
                            className=" sm:col-start-1 sm:col-end-2 text-[16px] font-bold text-blue"
                            htmlFor='categoria'
                        >
                            Categoría de Interés
                        </label>

                        <input
                            className="border w-full sm:col-start-2 sm:col-end-7 py-2 px-5 h-14 "
                            type="text"
                            list="categorias"
                            id= "categoria"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                        />

                        <datalist id="categorias">
                            <option value="Cocina" />
                            <option value="Exterior" />
                            <option value="Recamaras" />
                            <option value="Oficina" />
                            <option value="Television" />
                        </datalist>
                    </div>
                </fieldset>

                <button
                    type="submit"
                    className={`bg-lime-500 w-full md:w-1/3 block uppercase text-white py-3 rounded-md hover:bg-lime-600 transition-colors duration-300 text-center`}
                >
                    Enviar Formulario
                </button>
            </form>

            {
                (mostrarAlerta && errores.length > 0) && (
                    <MostrarAlerta
                        mensaje={errores[0]}
                        key={uuid()}
                        alerta='bg-red-500'
                    />
                )
            }
            {
                alertaCorrecto && (
                    <MostrarAlerta
                        mensaje='Mensaje enviado Correctamente'
                        key={uuid()}
                        alerta='bg-green-500'
                    />
                )
            }
        </div>
    )
}

export default Contacto;