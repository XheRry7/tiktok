import Post from "../models/post.js";

export const getSinglePost = async (id) => {
  const post = await Post.find({ pid: id });
  if (!post) return "no post found ";
  return post;
};

export const getUserPostsById = async (id) => {
  const post = await Post.findAll({
    where: { userId: id },
  });
  if (!post) return "no post found ";
  return post;
};

export const addPost = async (postData) => {
  const post = new Post(postData);
  await post.save();
  return post;
};

export const update = async (id, data) => {
  const updated = await Post.update(data, {
    where: { userId: id },
    returning: true,
  });
  return updated;
};

export const deletePost = async (id) => {
  const del = await Post.destroy({where: { id: id }, returning: true});
  return del;
};