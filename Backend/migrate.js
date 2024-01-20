import config from "./config/db";

(async () => {
  try {
    await config.authenticate();
    await config.sync({ force: true });
    console.log("Models have been synchronized successfully.");
  } catch (error) {
    console.error("Unable to do migration:", error);
  }
  process.exit();
})();
