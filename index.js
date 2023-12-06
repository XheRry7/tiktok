import express from "express";
import "dotenv/config";
import router from "./routes/routes.js";
import cors from "cors";
import sequelize from "./config/sequelize-config.mjs";

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    await sequelize.sync();
    console.log("Models have been synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.use("/", router);

app.listen(port, () => console.log(`Server running on port :  ${port}`));
