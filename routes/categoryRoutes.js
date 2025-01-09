import express from 'express';
import { getAllDatas } from '../controllers/categoryController.js';

const router = express.Router();

router.get('/categories', getAllDatas('category'));
router.get('/subcategories', getAllDatas('sub_category'));
router.get('/duas', getAllDatas('dua'));

export default router;