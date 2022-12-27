import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOption } from "./Login";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";
import { darkTheme, textColorTheme } from "../utils/colorTheme";
import { DarkModeAndLogin } from "./Navbar";

const Register = ({ theme, setTheme }) => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const signUpClickEvent = async () => {
    if (email.length === 0 || username.length === 0) {
      // react tostify
      toast.info("Enter Email and Username.", toastOption);
    } else {
      if (password.length === 0 || confirmPassword.length === 0) {
        // react tostify
        toast.info("Enter Password.", toastOption);
      } else {
        // API call

        if (password === confirmPassword) {
          if (password.length >= 6) {
            const userData = {
              username,
              email,
              password,
            };
            const { data } = await axios.post(registerRoute, userData);
            console.log("data comming from backend", data);
          } else {
            toast.error("Password length must be more then 5.", toastOption);
          }
        } else {
          toast.error("Passwords doesn't match.", toastOption);
        }
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Box
        width={["100vw", "100vw", "90vw", "90vw", "90vw", "90vw"]}
        height="100vh"
        backgroundColor={
          theme === "dark" ? darkTheme.primaryColor : darkTheme.secondaryColor
        }
        margin="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        gap="1.5rem"
      >
        <Box width={["90vw", "80vw", "70vw", "40vw", "30vw", "25vw"]}>
          <DarkModeAndLogin
            theme={theme}
            setTheme={setTheme}
            visibleHome={{ visibleIn: "register" }}
          />
        </Box>
        <Box>
          <Box
            width={["90vw", "80vw", "70vw", "40vw", "30vw", "25vw"]}
            height="fit-content"
            backgroundColor={
              theme === "dark"
                ? darkTheme.secondaryColor
                : darkTheme.primaryColor
            }
            borderRadius="0.6rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p="2"
            my="2"
            boxShadow="1px 1px 5px -1px white"
          >
            <Text
              fontSize="1.8rem"
              fontWeight="bold"
              color={
                theme === "dark"
                  ? textColorTheme.secondaryColor
                  : textColorTheme.primaryColor
              }
            >
              Create an account
            </Text>
          </Box>

          <Box
            width={["90vw", "80vw", "70vw", "40vw", "30vw", "25vw"]}
            height="fit-content"
            backgroundColor={
              theme === "dark"
                ? darkTheme.secondaryColor
                : darkTheme.primaryColor
            }
            borderRadius="0.6rem"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            p="2"
            boxShadow="1px 1px 5px -1px white"
          >
            {/* Name Container  */}
            <Box
              display="flex"
              width={["85%", "80%", "70%", "65%", "65%", "65%"]}
              flexDir="column"
              mb="2"
            >
              <Text
                fontSize="1.2rem"
                fontWeight="semibold"
                my="0"
                color={
                  theme === "dark"
                    ? textColorTheme.secondaryColor
                    : textColorTheme.primaryColor
                }
              >
                Username :
              </Text>
              <Input
                margin="auto"
                variant="flushed"
                backgroundColor="white"
                borderRadius="0.5rem"
                width="100%"
                height="2.2rem"
                boxShadow="0px 1px 7px -2px gray"
                px="1rem"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              ></Input>
            </Box>

            {/* Email Box  */}
            <Box
              display="flex"
              width={["85%", "80%", "70%", "65%", "65%", "65%"]}
              flexDir="column"
              mb="2"
            >
              <Text
                fontSize="1.2rem"
                fontWeight="semibold"
                my="0"
                color={
                  theme === "dark"
                    ? textColorTheme.secondaryColor
                    : textColorTheme.primaryColor
                }
              >
                Email :
              </Text>
              <Input
                margin="auto"
                variant="flushed"
                backgroundColor="white"
                borderRadius="0.5rem"
                width="100%"
                height="2.2rem"
                boxShadow="0px 1px 7px -2px gray"
                px="1rem"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              ></Input>
            </Box>

            {/* Password Box  */}

            <Box
              display="flex"
              width={["85%", "80%", "70%", "65%", "65%", "65%"]}
              flexDir="column"
              mb="2"
            >
              <Text
                fontSize="1.2rem"
                fontWeight="semibold"
                my="0"
                color={
                  theme === "dark"
                    ? textColorTheme.secondaryColor
                    : textColorTheme.primaryColor
                }
              >
                Password :
              </Text>
              <Input
                margin="auto"
                variant="flushed"
                backgroundColor="white"
                borderRadius="0.5rem"
                width="100%"
                height="2.2rem"
                boxShadow="0px 1px 7px -2px gray"
                px="1rem"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></Input>
            </Box>

            {/* Confirm Password Container  */}
            <Box
              display="flex"
              width={["85%", "80%", "70%", "65%", "65%", "65%"]}
              flexDir="column"
              mb="2"
            >
              <Text
                fontSize="1.2rem"
                fontWeight="semibold"
                my="0"
                color={
                  theme === "dark"
                    ? textColorTheme.secondaryColor
                    : textColorTheme.primaryColor
                }
              >
                Confirm Password :
              </Text>
              <Input
                margin="auto"
                variant="flushed"
                backgroundColor="white"
                borderRadius="0.5rem"
                width="100%"
                height="2.2rem"
                boxShadow="0px 1px 7px -2px gray"
                px="1rem"
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              ></Input>
            </Box>

            <Box mt="1">
              <Text
                fontWeight="semibold"
                color={
                  theme === "dark"
                    ? textColorTheme.secondaryColor
                    : textColorTheme.primaryColor
                }
              >
                Already have an account?{" "}
                <Link to="/login" style={{ textDecoration: "underline" }}>
                  Log In
                </Link>
              </Text>
            </Box>
            <Button
              mt="0.5"
              variant="solid"
              colorScheme="linkedin"
              width={["85%", "80%", "70%", "65%", "65%", "65%"]}
              boxShadow="0px 1px 7px -2px gray"
              height="2rem"
              onClick={() => {
                signUpClickEvent();
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Register;
