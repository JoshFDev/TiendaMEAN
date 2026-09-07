import { Router } from "express";
import { getAllProducts, getEditForm, updateProduct, deleteProduct, toggleStatus, createProduct } from "../controllers/productController";

const router = Router();

router.get('/', getAllProducts);
router.get('/update/:id', getEditForm);
router.post('/update/:id', updateProduct);
router.post('/delete/:id', deleteProduct);
router.post('/toggle-status/:id', toggleStatus);
router.post('/productos/agregar', createProduct);

export default router;
