import moment from 'moment-timezone';

/**
 * Función encargada de validar la coherencia de las fechas manejadas por el software
 * @param {Date} fecha_inicio 
 * @param {Date} fecha_fin 
 * @returns 
 */
export function validarFechaCoherente(fecha_inicio, fecha_fin) {


    // Zona horaria a trabajar
    const format = 'YYYY-MM-DD HH:mm';

    // Fechas a comparar
    const fechaActual = moment().tz('America/Bogota');
    const fecha_inicio_format = moment(fecha_inicio, format).tz('America/Bogota');
    const fecha_fin_format = moment(fecha_fin, format).tz('America/Bogota');

    const fecha_inicio_col = fecha_inicio_format.add(5, 'hours');
    const fecha_fin_col = fecha_fin_format.add(5, 'hours');

    if (fecha_inicio_col.isBefore(fechaActual)) {
        return 'La fecha de inicio de la convocatoria no es coherente';
    }

    if(fecha_fin_col.isBefore(fechaActual)) {
        return 'La fecha de fin de la convocatoria no es coherente';
    }

    if(fecha_inicio_col.isSameOrAfter(fecha_fin_col)) {
        return 'La fecha de inicio de la convocatoria no puede ser mayor o igual que la de fin';
    }
  
    return null;

}

