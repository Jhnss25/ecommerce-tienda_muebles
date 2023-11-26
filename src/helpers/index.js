
const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return formatter.format(valor);
}

const validarNombre = (nombre) => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,40}$/;
    return regex.test(nombre);
}

const validarEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return regex.test(email);
}

const validarTelefono = (telefono) => {
    const regex = /^0\d{9}$/;
    return regex.test(telefono);
}

const mostrarErrores = (formData) => {
    const { nombre, asunto, email, telefono, mensaje, pais, tipoUsuario, categoria } = formData;

    const errores = [];

    if (!nombre || !asunto || !email || !telefono || !mensaje || !pais || !tipoUsuario) {
        errores.push('Los campos no pueden estar vacíos');
    }

    if (!validarNombre(nombre)) {
        errores.push('El Nombre no es valido, máximo 40 caracteres');
    }

    if (!validarEmail(email)) {
        errores.push('Ingrese un Email valido');
    }

    if (!validarTelefono(telefono)) {
        errores.push('El teléfono debe contener 10 números');
    }

    return errores;
}

export {
    formatearDinero,
    mostrarErrores
}