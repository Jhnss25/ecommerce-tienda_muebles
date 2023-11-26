

const MostrarAlerta = ({ mensaje, alerta }) => {
    
    return (
        <div className={`${alerta} text-white my-5 py-2 w-[95%] max-w-[600px] mx-auto rounded`}>
            <p className="text-center text-[16px] ">
                {mensaje}
            </p>
      </div>
    )
}

export default MostrarAlerta