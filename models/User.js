import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";
import Profile,{ associate as associateProfile }  from "./Profile.js";

const User = sequelize.define("Users", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isActiveUser: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: true,
  },
  birthDay: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  timeAccountCreation: {
    type: DataTypes.DATE,
    defaultValue: Date.now(),
  },
});

User.hasOne(Profile, {
  foreignKey: "userId", // The foreign key in the Profile model
  as: "Profile", // Alias for the association
});

associateProfile({ User });

export default User;
