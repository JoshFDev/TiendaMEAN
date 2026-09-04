import { Router } from "express";
import Productos from "../models/Productos";

const router = Router();

router.get('/', async(req,res) => {
    const productos = await Productos.find().lean();
    console.log(productos);
    res.render("index", {productos: productos});
});

router.get('/update/:id', async (req,res) => {
    try{
        const productos = await Productos.findById(req.params.id).lean();
        res.render("editar", {productos});
    }catch(error){
        console.log(error);

    }

});

router.post('/update/:id',async(req,res) =>{
    try{
        const {id} = req.params;
        await Productos.findByIdAndUpdate(id, req.body);
        res.redirect("/");
    }catch(error){
        console.log(error);
        res.redirect("/");
    }
});

router.post('/delete/:id', async (req,res) => {
    try{
        const {id} = req.params;
        await Productos.findByIdAndDelete(id);
        res.redirect("/");
    }catch(error){
        console.log(error);
        res.redirect("/");
    }
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
