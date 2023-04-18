const { Schema, model} = require('mongoose');


const usuarioSchema = Schema({
    name:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    typeU: {
        type: String,
        required: true
    }
});

module.exports = model('Usuario', usuarioSchema);