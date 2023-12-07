import { AsyncRouter } from "express-async-router";
import { registerUser, Login } from "../../controllers/User.js";

const router = AsyncRouter();

router.post("/register", registerUser);
router.post("/login", Login);

export default router;
