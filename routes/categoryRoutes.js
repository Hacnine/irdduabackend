import express from 'express';
import { getAllDatas, getDuasByCategory, getSubcategoriesByCategoryId } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/categories', getAllDatas('category'));
router.get('/subcategories', getAllDatas('sub_category'));
router.get('/subcategoriesbyid', getSubcategoriesByCategoryId);
router.get('/duas', getDuasByCategory);

export default router;