import { Router } from 'express';
import { createProduct } from '../controllers/product/create_product';

const router = Router();

router.post('/', createProduct);

export default router;
