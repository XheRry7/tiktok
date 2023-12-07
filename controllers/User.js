import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { create, userExists } from "../services/user_Service.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password, phoneNumber } = req.body;
    const user = await userExists({ email: email.toLowerCase() });
    if (user) {
      res.status(200).json({ message: "User with this email already exists" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await create({ username, email, password: hashedPassword, phoneNumber });
    res.status(200).json({ message: "User Created Successfully!" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).send("All input is required");
    }
    const user = await userExists({ email: email.toLowerCase() });
    if (
      user &&
      user?.password &&
      (await bcrypt.compare(password, user?.password))
    ) {
      const jwtSecret = process.env.JWT_SECRET;
      const token = Jwt.sign({ user_id: user._id, email }, jwtSecret, {
        expiresIn: "2h",
      });
      const data = {
        id: user._id,
        token,
        email,
      };
      res.status(200).json(data);
    }
  } catch (err) {
    console.log(err);
  }
};

