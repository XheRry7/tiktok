import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth.js";
import {
  createUserProfile,
  updateProfile,
  getProfileByID,
  delProfile
} from "../../controllers/profile.js";
import multer from "multer";
import { storage } from "../../middleware/imageuploader/imageUploader.js";

const upload = multer({ storage: storage });

const router = AsyncRouter();

router.post(
  "/createProfile/:userId",
  withAuth,
  upload.single("picture"),
  createUserProfile
);
router.put(
  "/updateProfile/:id",
  withAuth,
  upload.single("picture"),
  updateProfile
);
router.get("/getProfileById/:id", withAuth, getProfileByID);
router.delete("/delProfile/:userId", withAuth, delProfile);

export default router;
