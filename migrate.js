import sequelize from "./config/sequelize-config.mjs";

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Models have been synchronized successfully.");
  } catch (error) {
    console.error("Unable to do migration:", error);
  }
  process.exit();
})();
