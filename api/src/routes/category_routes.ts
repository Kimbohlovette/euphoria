import { Router } from 'express';
import { createCategory } from '../controllers/category/create_category';

const router = Router();

router.post('/', createCategory);

export default router;
