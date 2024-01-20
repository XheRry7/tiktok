import { AsyncRouter } from "express-async-router";
import UserRoutes from "./user/userRoutes.js";
import ProfileRoutes from "./profile/profileRoutes.js";
import PostRoutes from "./posts/postsRoutes.js";

const router = AsyncRouter();

router.use("/user", UserRoutes);
router.use("/profile", ProfileRoutes);
router.use("/post", PostRoutes);

export default router;
