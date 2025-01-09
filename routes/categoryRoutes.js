import express from 'express';
import { getAllCategories } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/categories', getAllCategories('category'));
router.get('/subcategories', getAllCategories('sub_category'));
router.get('/duas', getAllCategories('dua'));

export default router;