import User from "../models/User.js";

export const userExist = async (searchObject) => {
  const user = await User.findOne(searchObject);
  return !!user;
};

export const logInUser = async (obj) => {
  const u = await User.findOne(obj);
  return u;
};

export const userExists = async (searchObject) => {
  const user = await User.findOne({ where:searchObject});
  return user;
};

export const create = async (createObject) => {
  const user = new User(createObject);
  await user.save();
  return user;
};

export const getUsers = async () => {
  const users = await User.find();
  if (!users.length) {
    console.log("no users found in db");
  }
  return users;
};
