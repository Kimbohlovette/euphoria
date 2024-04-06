import { Router } from 'express';
import { createCategory } from '../controllers/category/create_category';
import { getCategories } from '../controllers/category/get_categories';

const router = Router();

router.get('/', getCategories);
router.post('/', createCategory);

export default router;
