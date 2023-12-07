import { AsyncRouter } from "express-async-router";
import UserRoutes from './user/userRoutes.js'

const router = AsyncRouter();

router.use("/user", UserRoutes);

export default router;
