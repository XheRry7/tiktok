import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";

const Profile = sequelize.define("Profiles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  posts: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  followers: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  following: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  liked: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ProfilePicture: {
    type: DataTypes.BLOB,
    allowNull: true,
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
