import express from 'express';
import { adddata, getData } from '../controller/Reg.controller';

const router = express.Router();

router.get("/get-data", getData);
router.post("/add-data", adddata);

export default router;
