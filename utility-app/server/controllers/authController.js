import User from "../schema/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // check if the email already eixsts
    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ error: "Email already exists" });
    }
    // check if the username already exists
    const userAlreadyExists = await User.findOne({ username });
    if (userAlreadyExists) {
      return res.status(400).json({ error: "Username already exists" });
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    // save user in db
    const savedUser = await newUser.save();
    // send new user with response
    res
      .status(200)
      .json({ savedUser, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // check if user exists in the db
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ error: "User not found" });
    }
    // check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ error: "Password invalid" });
    }
    // if password is valid create jwt token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    // send jwt token with response
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
