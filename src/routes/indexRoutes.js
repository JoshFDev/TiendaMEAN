import { Router } from "express";
import Productos from "../models/Productos";

const router = Router();

router.get('/', (req,res) => {
    res.render("index");
});

router.get('/update', (req,res) => {
    res.render("editar");
});

router.post('/productos/agregar', async (req,res) => {
    try {
        const producto = new Productos(req.body);
        const productoAlmacenado = await producto.save();
        console.log("Producto agregado:");
        console.log(productoAlmacenado);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

export default router;
