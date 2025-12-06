import express from "express"

import {getComments,createComment,updateComment,deleteComment,likeComment} from "../controllers/comments.js"

const router = express.Router()

router.get("/",getComments)
router.post("/",createComment)
router.patch("/:id",updateComment)
router.delete("/:id", deleteComment)
router.patch("/:id/like", likeComment)

export default router

