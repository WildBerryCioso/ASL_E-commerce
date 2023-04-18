const { response } = require('express');
const Producto = require('../models/Producto')


const crearProductos = async (req, res = response) => {
    
    console.log( req.body);

    const producto = new Producto( req.body );

    try {
        
        const productoGuardado = await producto.save();

        res.json({
            ok: true,
            producto: productoGuardado
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin'
        });
    }
}

const obtenerProducto = async (req, res = response) => {

    const producto = await Producto.find();

    res.json({
        ok: true,
        producto
    })
}

const actualizarProductos = async (req, res = response) => {

    const productoId = req.params.id;

    try {

        const producto = await Producto.findById(productoId);

        if(!producto){
            return res.status(404).json({
                ok: false,
                msg: 'Producto no existe por ese id'
            });
        }

        const nuevoProducto = {
            ...req.body
        }

        const productoActualizado = await Producto.findByIdAndUpdate( productoId, nuevoProducto, {new: true});
        res.json({
            ok: true,
            evento: productoActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin'
        });
    }
}

const eliminarProductos = async (req, res = response) => {

    const productoId = req.params.id;

    try {

        const producto = await Producto.findByIdAndDelete(productoId);

        if(!producto){
            return res.status(404).json({
                ok: false,
                msg: 'Producto no existe por ese id'
            });
        }

        const nuevoProducto = {
            ...req.body
        }

        await Producto.findByIdAndUpdate( productoId);
        res.json({
            ok: true,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el admin'
        });
    }
}

module.exports = {
    obtenerProducto,
    crearProductos,
    actualizarProductos,
    eliminarProductos
}
