import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize-config.mjs";

const User = sequelize.define("Users", {
  id: {
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

export default User;
