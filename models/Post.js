import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
});

const associate = (models) => {
  const { User } = models;
  Post.hasOne(User, {
    foreignKey: "userId", // The foreign key in the Profile model
    as: "User", // Alias for the association
  });
};

export { associate };
export default Post;
