import { addPost, update, getUserPostsById, deletePost } from "../services/post_Service.js";
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
  const videoPath = req.file.path;
  const postData = req?.body;
  const userId = req?.params.userId;
  if (userId) {
    postData.userId = userId;
  }
  if (videoPath) {
    postData.videoPath = videoPath;
  }
  console.log(":::::", postData);
  try {
    const post = await addPost(postData);
    return res.send({ statusCode: 200, data: post });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const updatePost = async (req, res) => {
  const videoPath = req.file.path;
  const id = req.params.id;
  const data = req.body;
  if (!id || !data) {
    return res.send({
      message: "ID is required in parameters",
      statusCode: 500,
    });
  }
  if (videoPath) {
    data.videoPath = videoPath;
  }
  try {
    await update(id, data);
    return res.send({ message: "data updated successfully", statusCode: 200 });
  } catch (err) {
    return res.send({ statusCode: 500, message: err?.message });
  }
};

export const delPost = async (req, res) => {
  const id = req.query.postId;
  if (!id) {
      return res.send({ message: "postId is required in parameters", statusCode: 500 })
  }
  try {
      await deletePost(id);
      return res.send({ message: "Post deleted successfully", statsCode: 200 })
  }
  catch (err) {
      return res.send({ statusCode: 500, message: err?.message })
  }
}