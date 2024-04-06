import { Router } from 'express';
import { createProduct } from '../controllers/product/create_product';
import { getAllProducts } from '../controllers/product/get_all_products';
import { getProductById } from '../controllers/product/get_product_by_id';
import { updateProduct } from '../controllers/product/update_product';
import { deleteProduct } from '../controllers/product/delete_product';

const router = Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
