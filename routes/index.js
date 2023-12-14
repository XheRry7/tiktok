import { AsyncRouter } from "express-async-router";
import UserRoutes from "./user/userRoutes.js";
import ProfileRoutes from "./profile/profileRoutes.js";

const router = AsyncRouter();

router.use("/user", UserRoutes);
router.use("/profile", ProfileRoutes);

export default router;
