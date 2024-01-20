import {
  addProfile,
  update,
  getSingleProfileById,
  deleteProfile
} from "../services/profile_Service.js";
// import { uploadImage } from "../s3";

export const getProfileByID = async (req, res) => {
  const id = req.params.id;
  if (!id)
    return res.send({
      message: "ID is required in parameters",
      statusCode: 500,
    });
  try {
    const profile = await getSingleProfileById(id);
    return res.send({ statusCode: 200, data: profile });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const createUserProfile = async (req, res) => {
  const file = req?.files?.filename;
  const profileData = req?.body;
  const userId = req?.params.userId;
  if (userId) {
    profileData.userId = userId;
  }
  if (file) {
    profileData.images = file;
  }
  try {
    const profile = await addProfile(profileData);
    return res.send({ statusCode: 200, data: profile });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const updateProfile = async (req, res) => {
  const id = req.params.id;
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
  const id = req.query.userId;
  if (!id) {
      return res.send({ message: "userId is required in parameters", statusCode: 500 })
  }
  try {
      await deleteProfile(id);
      return res.send({ message: "profile deleted successfully", statsCode: 200 })
  }
  catch (err) {
      return res.send({ statusCode: 500, message: err?.message })
  }
}