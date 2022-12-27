require("dotenv").config();
const expressHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const emailValidator = require("email-validator");

const register = expressHandler(async (req, res, next) => {
  try {
    const { username, email, password } = await req.body;

    // Validations for Email and Password
    const isEmail = emailValidator.validate(email);

    if (username) {
      if (isEmail) {
        if (password) {
          if (password.length >= 6) {
            const hashedPassword = await bcrypt.hash(
              password,
              process.env.BCRYPT_SALT
            );

            if (hashedPassword) {
              const newUser = await User.create({
                username,
                email,
                password: hashedPassword,
              });

              if (newUser) {
                res.status(201).json({
                  status: true,
                  message: "User created successfully",
                  user: { email: newUser.email, username: newUser.username },
                });
              } else {
                res
                  .status(400)
                  .json({ status: false, message: "Something went wrong." });
              }
            } else {
              res
                .status(400)
                .json({ status: false, message: "Password is Not Valid" });
            }
          } else {
            res.status(400).json({
              status: false,
              message: "Invalid Pasword",
            });
          }
        } else {
          res
            .status(400)
            .json({ status: false, message: "Password is necessary" });
        }
      } else {
        res.status(400).json({
          status: false,
          message: "Invalid email",
        });
      }
    } else {
      res.status(400).json({ status: false, message: "Username is required" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

const login = expressHandler(async (req, res, next) => {
  try {
    const { email, password } = await req.body;

    if (email) {
      if (password) {
        const isUserExists = await User.findOne({ email });

        if (isUserExists) {
          const hashedPassword = await bcrypt.hash(
            password,
            process.env.BCRYPT_SALT
          );
          if (hashedPassword === isUserExists.password) {
            res.status(200).json({
              status: true,
              message: "Login Successful.",
              user: { email: isUserExists.email },
            });
          } else {
            res.status(200).json({
              status: false,
              message: "Please enter valid Email or Password",
            });
          }
        } else {
          res.status(404).json({ status: false, message: "User not Found" });
        }
      } else {
        res
          .status(400)
          .json({ status: false, message: "Password is required" });
      }
    } else {
      res.status(400).json({ status: false, message: "Email is required" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = { register, login };
