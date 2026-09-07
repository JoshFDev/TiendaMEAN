import Productos from "../models/Productos";

export const getAllProducts = async (req, res) => {
    const productos = await Productos.find().lean();
    console.log(productos);
    res.render("index", {productos: productos});
};

export const getEditForm = async (req, res) => {
    try{
        const productos = await Productos.findById(req.params.id).lean();
        res.render("editar", {productos});
    }catch(error){
        console.log(error);
    }
};

export const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        await Productos.findByIdAndUpdate(id, req.body);
        res.redirect("/");
    }catch(error){
        console.log(error);
        res.redirect("/");
    }
};

export const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        await Productos.findByIdAndDelete(id);
        res.redirect("/");
    }catch(error){
        console.log(error);
        res.redirect("/");
    }
};

export const toggleStatus = async (req, res) => {
    try{
        const {id} = req.params;
        const producto = await Productos.findById(id);
        producto.status = !producto.status;
        await producto.save();
        res.redirect("/");
    }catch(error){
        console.log(error);
        res.redirect("/");
    }
};

export const createProduct = async (req, res) => {
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
};
