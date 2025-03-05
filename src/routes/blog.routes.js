import { Router } from "express";
import { getBlog, getBlogById, updateBlog, postBlog, deleteBlog } from "../controllers/blogController.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.route('/blog')
    .get(getBlog)
    .post(authenticateUser, postBlog)

router.route('/blog/:id')
    .get(getBlogById)
    .put(updateBlog)
    .delete(deleteBlog)



export default router