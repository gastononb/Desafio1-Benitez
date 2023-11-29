import { Router } from "express";
import {getProductMocking} from "../controllers/mockingController.js"

const router = Router()

router.get('/mockingproducts', getProductMocking )

export default router