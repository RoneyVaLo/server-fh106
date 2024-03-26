import { Router } from "express";
import { createPost, getPosts, getPost, patchPost } from "../controllers/post.controller.js";

const router = Router();

router.post("/posts", createPost);
router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.put("/posts/:id", patchPost);

export default router;