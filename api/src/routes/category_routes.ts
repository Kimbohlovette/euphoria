import { Router } from 'express';
import { createCategory } from '../controllers/category/create_category';
import { getCategories } from '../controllers/category/get_categories';
import { getCategoryById } from '../controllers/category/get_category_by_id';

const router = Router();

router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.post('/', createCategory);

export default router;
