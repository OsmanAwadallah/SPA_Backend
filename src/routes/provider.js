import express from "express"

import {getProviders,createProvider,updateProvider} from "../controllers/provider.js"

const router = express.Router()

router.get("/",getProviders)
router.post("/",createProvider)
router.patch("/:id",updateProvider)

export default router

