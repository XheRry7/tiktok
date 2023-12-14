import {
  profile,
  deleteProfile,
  addProfile,
  update,
  getSingleProfile,
  getSingleProfileId,
  getShopKeeperProfile,
} from "../services/profile_Service.js";
// import { uploadImage } from "../s3";

export const getProfile = async (req, res) => {
  try {
    const profileData = await profile();
    return res.send({ statusCode: 200, data: profileData });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const getProfileByID = async (req, res) => {
  const id = req.params.id;
  if (!id)
    return res.send({
      message: "ID is required in parameters",
      statusCode: 500,
    });
  try {
    const profile = await getSingleProfile(id);
    return res.send({ statusCode: 200, data: profile });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const getUserProfile = async (req, res) => {
  const id = req.params.id;
  if (!id)
    return res.send({
      message: "ID is required in parameters",
      statusCode: 500,
    });
  try {
    const profile = await getSingleProfile(id);
    return res.send({ statusCode: 200, data: profile });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const getProfilewithPk = async (req, res) => {
  const id = req.params.id;
  if (!id)
    return res.send({
      message: "ID is required in parameters",
      statusCode: 500,
    });
  try {
    const profile = await getSingleProfileId(id);
    return res.send({ statusCode: 200, data: profile });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const editProfile = async (req, res) => {
  const id = req.params.id;
  const file = req.file;
  const profileData = req.body;
  if (!id)
    return res.send({
      message: "ID is required in parameters",
      statusCode: 500,
    });
  try {
    if (req.file) {
      profileData.images = file?.filename; // update the image filename/path
    }
    await update(id, profileData);
    return res.send({ message: "data updated successfully", statusCode: 200 });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const createUserProfile = async (req, res) => {
  const file = req.files.filename;
  const profileData = req.body;
  const userId = req.params;

  profileData.images = file;

  console.log("profileData", profileData, userId);

  // try {
  //     const profile = await addProfile(profileData);
  //     return res.send({ statusCode: 200, data: profile })
  // }
  // catch (err) {
  //     return res.send({ statusCode: 500, message: err?.message })
  // }
};

export const updateProfile = async (req, res) => {
  const id = req.query.id;
  const data = req.body;
  if (!id || !data) {
    return res.send({
      message: "ID is required in parameters",
      statusCode: 500,
    });
  }
  try {
    await update(id, data);
    return res.send({ message: "data updated successfully", statusCode: 200 });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const delProfile = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.send({
      message: "ID is required in parameters",
      statusCode: 500,
    });
  }
  try {
    await deleteProfile(id);
    return res.send({
      message: "profile deleted successfully",
      statsCode: 200,
    });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const getShopManagerProfile = async (req, res) => {
  const id = req.params.id;
  if (!id)
    return res.send({
      message: "shopManagerID is required in parameters",
      statusCode: 500,
    });
  try {
    const shop = await getShopKeeperProfile(id);
    return res.send({ statusCode: 200, data: shop });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};
