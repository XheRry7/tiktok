import express from "express";
import "dotenv/config";
import router from "./routes/index.js";
import cors from "cors";
import sequelize from "./config/config.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    // sequelize.sync({ alter: true }).then(() => {
    //   console.log("Database and tables synced!");
    // });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.use("/api", router);

app.listen(port, () => console.log(`Server running on port :  ${port}`));
