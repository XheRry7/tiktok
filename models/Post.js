import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
  category: {
    type: DataTypes.STRING,
  },
  likes: {
    type: DataTypes.ARRAY(DataTypes.BLOB),
  },
  comments: {
    type: DataTypes.ARRAY(DataTypes.BLOB),
  },
  shares: {
    type: DataTypes.ARRAY(DataTypes.BLOB),
  },
  bookmarks: {
    type: DataTypes.ARRAY(DataTypes.BLOB),
  },
  numberOfPlays: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  videoPath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // postType:{
  //   type: DataTypes.STRING
  // }
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
