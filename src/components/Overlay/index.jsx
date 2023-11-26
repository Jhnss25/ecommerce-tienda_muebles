
const Overlay = ({src, alt = 'imagen', handleClickClose}) => {

    return ( 
        <div
            className="w-screen h-screen fixed top-0 right-0 bottom-0 left-0 z-50 sm:bg-dark"
        >
            <div
                className="w-full h-full flex gap-2 items-center justify-center relative "
            >
                <img
                    className="w-full h-full object-fill block sm:w-3/4 sm:h-2/3 lg:w-3/5 lg:h-3/4 rounded"
                    loading="lazy"
                    width="350"
                    height="400"
                    src={src}
                    alt={alt} />
                <p
                    className="bg-red-700 hover:bg-red-900 transition duration-300  w-9 h-9 text-2xl uppercase font-bold font-display rounded-full text-white flex justify-center items-center absolute top-5 right-10 sm:top-10 lg:right-20 cursor-pointer"
                    onClick={handleClickClose}
                >
                    x
                </p>
            </div>
        </div>
    )
}

export default Overlay;