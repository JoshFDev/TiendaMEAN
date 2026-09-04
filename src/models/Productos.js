import { Schema, model } from "mongoose";

const productoEsquema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true //Eliminar espacios
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        option: {
            type: Boolean,
            default: false
        },

    },
        {
            timestamps: true,
            versionKey: false
        }
);

export default model("Productos", productoEsquema);