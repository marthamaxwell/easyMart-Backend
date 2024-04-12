import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;

    if (!name || !email || !username || !password) {
      res.status(400).json({
        success: false,
        message: "All required field needed.",
      });
      return;
    }

    //checking for existing email
    const existingEmail = await User.findOne({ email: req.body.email }).exec();

    // check for existing username
    const existingUsername = await User.findOne({
      username: req.body.username,
    }).exec();

    if (existingEmail) {
      res.status(409).json({
        success: false,
        message: "Email already in use, choose another.",
      });
      return;
    }

    if (existingUsername) {
      res.status(409).json({
        success: false,
        message: "Username already in use, choose another.",
      });
      return;
    }

    //password encryption
    const salt = await bcrypt.genSalt(15);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      password: encryptedPassword,
      name,
      email,
      username,
    });
    res.status(201).json({
      success: true,
      message: "User registered succefully",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User not created",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  //check if email is valid in the database
  const validEmail = await User.findOne({ email: email }).exec();

  if (!validEmail) {
    res.status(404).json({
      success: false,
      message: "Invalid credentials.",
    });
    return;
  }

  //check if the password is correct
  const validPassword = await bcrypt.compare(password, validEmail.password);

  if (!validPassword) {
    res.status(409).json({
      success: false,
      message: "Invalid credentials.",
    });
    return;
  }

  //access token and refresh token generated using jwt
  const accessToken = Jwt.sign(
    {
      access1: validEmail.username,
      access2: validEmail._id,
    },
    process.env.BLABLA,
    {
      expiresIn: "60",
    }
  );

  const refreshToken = Jwt.sign(
    {
      access1: validEmail.username,
      access2: validEmail._id,
    },
    process.env.BLAREFBLA,
    {
      expiresIn: "1d",
    }
  );

  const userData = {
    _id: validEmail?._id,
    name: validEmail?.name,
    username: validEmail?.username,
    bio: validEmail?.bio,
    admin: validEmail?.isAdmin,
    phone_number: validEmail?.phone_number,
  };

  //push to cookies
  res.cookie("hellomiss", accessToken, {
    httponly: true,
    secure: true,
    sameSite: "none",
    maxAge: 60 * 1000,
  });

  res.cookie("hellobro", refreshToken, {
    httponly: true,
    secure: true,
    sameSite: "none",
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    success: true,
    message: "Login successful.",
    user: userData,
  });
};

const validateToken = (req, res) => {
  const authUser = req.user;
  const userData = {
    _id: authUser._id,
    name: authUser.name,
    username: authUser.username,
    email: authUser.email,
    bio: authUser.bio,
    phone_number: authUser.phone_number,
    isAdmin: authUser.isAdmin,
  };
  console.log("User data:", userData);
  return res.status(200).json({
    valid: true,
    message: "access granted",
    details: userData,
  });
};

export { register, login, validateToken };
