import { AsyncRouter } from "express-async-router";
import { withAuth } from "../../middleware/withAuth.js";
import {
  // getProfile,
  createUserProfile,
  updateProfile,
  // delProfile,
  getProfileByID,
  // getUserProfile,
  // editProfile,
  // getShopManagerProfile,
  // getUserData,
} from "../../controllers/profile.js";
import multer from "multer";
import { storage } from "../../middleware/imageuploader/imageUploader.js";

const upload = multer({ storage: storage });

const router = AsyncRouter();

// router.get("/getProfile", getProfile);
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
router.get("/getProfileById/:id", getProfileByID);
// router.get("/getProfilewithPk/:id", getUserData);
// router.delete("/deleteProfile", withAuth, delProfile);
// router.get("/getUserProfile/:id", getUserProfile);
// router.put("/editProfile/:id", upload.single("pictures"), editProfile);
// router.get("/getShopManagerProfile/:id", getShopManagerProfile);

export default router;
