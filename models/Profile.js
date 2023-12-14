import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";

const Profile = sequelize.define("Profiles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  bio: {
    type: DataTypes.STRING,
  },
  posts: {
    type: DataTypes.JSON,
  },
  followers: {
    type: DataTypes.JSON,
    defaultValue: 0,
  },
  following: {
    type: DataTypes.JSON,
    defaultValue: 0,
  },
  likes: {
    type: DataTypes.INTEGER,
  },
  liked: {
    type: DataTypes.INTEGER,
  },
  ProfilePicture: {
    type: DataTypes.BLOB,
  },
});

const associate = (models) => {
  const { User } = models;
  Profile.belongsTo(User, {
    foreignKey: "userId", // The foreign key in the Profile model
    as: "user", // Alias for the association
  });
};

export { associate };
export default Profile;
