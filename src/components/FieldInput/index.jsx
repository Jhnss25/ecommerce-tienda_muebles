
const FieldInput = ({ type, label, value, fnHandleChange }) => {
    const valor = label.toLowerCase();

    return (
        <div className="sm:grid sm:grid-cols-6 mb-5 px-5 sm:items-center sm:gap-5">
            <label className=" sm:col-start-1 sm:col-end-2 text-[18px] font-bold text-blue" htmlFor={valor}>{label}:</label>

            <input
                className="border w-full sm:col-start-2 sm:col-end-7 py-2 px-5 "
                type={type}
                id={valor}
                name={valor}
                // required
                placeholder={`Tú ${label}`}
                value={value}
                onChange={fnHandleChange}
            />
        </div>
    )
}

export default FieldInput;