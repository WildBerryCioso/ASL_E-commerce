const { Schema, model} = require('mongoose');

const productoSchema = Schema({
    titulo:{
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true
    },

    cantidad: {
        type: Number,
        required: true
    }
});

module.exports = model('Producto', productoSchema);