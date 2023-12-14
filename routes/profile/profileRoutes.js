import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth.js";
import {
  getProfile,
  createUserProfile,
  updateProfile,
  delProfile,
  getProfileByID,
  getProfilewithPk,
  getUserProfile,
  editProfile,
  getShopManagerProfile,
} from "../../controllers/profile.js";
import multer from "multer";
import { storage } from "../../middleware/imageuploader/imageUploader.js";

const upload = multer({ storage: storage });

const router = AsyncRouter();

router.get("/getProfile", getProfile);
router.post(
  "/createProfile/:userId",
  withAuth,
  upload.single("picture"),
  createUserProfile
);
router.put(
  "/updateProfile",
  withAuth,
  upload.array("pictures", 10),
  updateProfile
);
router.get("/getProfileByID/:id", getProfileByID);
router.get("/getProfilewithPk/:id", getProfilewithPk);
router.delete("/deleteProfile", withAuth, delProfile);
router.get("/getUserProfile/:id", getUserProfile);
router.put("/editProfile/:id", upload.single("pictures"), editProfile);
router.get("/getShopManagerProfile/:id", getShopManagerProfile);

export default router;
