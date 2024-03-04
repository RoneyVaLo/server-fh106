import { Router } from "express";
import { createUser, getUser } from '../controllers/user.controller.js';

const router = Router();

router.post("/users/signup", createUser);
router.post("/users/signin", getUser);

export default router;
