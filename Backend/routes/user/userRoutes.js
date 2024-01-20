import { AsyncRouter } from "express-async-router";
import { registerUser, Login, getUserData } from "../../controllers/User.js";

const router = AsyncRouter();

router.post("/register", registerUser);
router.post("/login", Login);
router.get("/userData/:userId", getUserData);

export default router;
