import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth.js";
import {
  createUserPost,
  updatePost,
  getUserPosts,
} from "../../controllers/post.js";
import multer from "multer";
import { storage } from "../../middleware/imageuploader/imageUploader.js";

const upload = multer({ storage: storage });

const router = AsyncRouter();

router.post("/createPost/:userId", withAuth, createUserPost);
router.put("/updatePost/:id", withAuth, updatePost);
router.get("/getUserPosts/:userId", withAuth, getUserPosts);

export default router;
