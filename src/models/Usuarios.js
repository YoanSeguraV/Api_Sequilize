import { DataTypes } from 'sequelize'
import {db} from '../db/database.js'
import {Tareas} from './Tareas.js'

 export const Usuario= db.define("usuarios",{
    nombre:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
        unique:true
    },
    estado:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    }
})
//relacionar tablas
// Aqui se asigna se relaciona y se crea el campo de la relacion en la otra tabla en este caso tareas
// relacion de  uno a muchos
Usuario.hasMany(Tareas,{
    foreignKey:'',
    sourceKey:"id"
})

Tareas.belongsTo(Usuario,{
    foreignKey:'usuarioId',
    targetId:"id"
})


