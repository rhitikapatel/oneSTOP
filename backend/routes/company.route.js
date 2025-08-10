import express from 'express';
import { getCompany } from '../controller/company.controller.js';  

const router=express.Router();

router.get("/",getCompany);

export default router;

