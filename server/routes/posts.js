import express from "express";
import postController from "../controllers/postController.js";
const router = express.Router();

//GET

router.get("/", postController.getPosts);

router.get("/:id", postController.getPost);

//POST

router.post("/", postController.createPost);

//PUT

router.put("/:id", postController.updatePost);

// DELETE
router.delete("/:id", postController.deletePost);

export default router;
