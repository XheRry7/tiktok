import { addPost, update, getUserPostsById } from "../services/post_Service.js";
// import { uploadImage } from "../s3";

export const getUserPosts = async (req, res) => {
  const id = req.params.userId;
  if (!id)
    return res.send({
      message: "ID is required in parameters",
      statusCode: 500,
    });
  try {
    const post = await getUserPostsById(id);
    return res.send({ statusCode: 200, data: post });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const createUserPost = async (req, res) => {
  const file = req?.files?.filename;
  const postData = req?.body;
  const userId = req?.params.userId;
  if (userId) {
    postData.userId = userId;
  }
  if (file) {
    postData.images = file;
  }
  try {
    const post = await addPost(postData);
    return res.send({ statusCode: 200, data: post });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const updatePost = async (req, res) => {
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
