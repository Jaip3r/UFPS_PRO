import { DataTypes } from 'sequelize';

// Importamos el modelo de conexión
import sequelize from '../database/db.js';


// Creamos el esquema del modelo
const Inscripcion = sequelize.define('inscripciones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_inscripcion: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty:{
                msg: "La fecha de inscripcion no puede estar vacia"
            },
            isDate: {
                msg: "Favor ingresar un formato de fecha valido"
            }
        }
    },
    fecha_inicio_prueba: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: "Favor ingresar un formato de fecha valido"
            }
        }
    },
    fecha_finalizacion_prueba: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: "Favor ingresar un formato de fecha valido"
            }
        }
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    convocatoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'convocatorias',
            key: 'id'
        },
    }
}, {
    timestamps: false
});


// Exportamos el modelo de inscripciones
export default Inscripcion;