import dayjs from 'dayjs';

/**
 * Función encargada de validar la coherencia de las fechas manejadas por el software
 * @param {Date} fecha_inicio 
 * @param {Date} fecha_fin 
 * @returns 
 */
export function validarFechaCoherente(fecha_inicio, fecha_fin) {


    // Zona horaria a trabajar
    const format = 'DD-MM-YYYY HH:mm';

    // Fechas a comparar
    const fechaActual = dayjs();
    const fecha_inicio_format = dayjs(fecha_inicio, format);
    const fecha_fin_format = dayjs(fecha_fin, format);

    console.log('Fecha inicio', fecha_inicio);
    console.log('Fecha Fin', fecha_fin);

    console.log(fechaActual);
    console.log(fecha_inicio_format);
    console.log(fecha_fin_format);

    if (fecha_inicio_format.isBefore(fechaActual)) {
        return 'La fecha de inicio de la convocatoria no es coherente';
    }

    if(fecha_fin_format.isBefore(fechaActual)) {
        return 'La fecha de fin de la convocatoria no es coherente';
    }

    if(fecha_inicio_format.isSameOrAfter(fecha_fin_format)) {
        return 'La fecha de inicio de la convocatoria no puede ser mayor o igual que la de fin';
    }
  
    return null;

}

