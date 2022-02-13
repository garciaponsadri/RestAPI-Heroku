import { Schema, model } from "mongoose";
import { boolean } from "webidl-conversions";
// Definimos el Schema
const almacenesSchema = new Schema({
    _id: {
        type: Number // para acceder en la subclase
    },
    _Posicion: {
        type: Number
    },

    _CapacidadMax: {
        type: Number
    },

    _Mozos: {
        type: Array
    },
    
    _Repartidores: {
        type: Array
    }
})

export type iAlmacen = {
    _id: number | null, // para acceder en la subclase
    _Posicion: number | null,
    _CapacidadMax: number | null,
    _Mozos: Array<any> | null
    _Repartidores: Array<any> | null
  }

// La colección de la BD (Plural siempre)
export const AlmacenesDB = model('almacenes', almacenesSchema)