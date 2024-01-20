import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth.js";
import {
  createUserPost,
  updatePost,
  getUserPosts,
  delPost,
} from "../../controllers/post.js";
import multer from "multer";
import { storage } from "../../middleware/imageuploader/imageUploader.js";

const upload = multer({ storage });

const router = AsyncRouter();

router.post(
  "/createPost/:userId",
  withAuth,
  upload.single('videoPath'),
  createUserPost
);
router.put("/updatePost/:id", withAuth,  upload.single('videoPath'), updatePost);
router.get("/getUserPosts/:userId", withAuth, getUserPosts);
router.delete("/delPost/:postId", withAuth, delPost);

export default router;
