import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { darkTheme, textColorTheme } from "../utils/colorTheme";
import { DarkModeAndLogin } from "./Navbar";

export const toastOption = {
  position: "top-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

const Login = ({ theme, setTheme }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginClickEvent = async () => {
    if (email.length === 0 || password.length === 0) {
      // react tostify
      toast.info("Please enter Email or Password.", toastOption);
    } else {
      // API Call
      const userData = {
        email,
        password,
      };
      const { data } = await axios.post(loginRoute, userData);
      console.log("data for login", data);
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
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        gap="1.5rem"
      >
        <Box width={["90vw", "80vw", "70vw", "40vw", "30vw", "25vw"]}>
          <DarkModeAndLogin
            theme={theme}
            setTheme={setTheme}
            visibleHome={{ visibleIn: "login" }}
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
              Login with account
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
            {/* Email Box  */}
            <Box
              display="flex"
              width={["85%", "80%", "70%", "65%", "65%", "65%"]}
              flexDir="column"
              my="2"
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
            <Box mt="1">
              <Text
                fontWeight="semibold"
                color={
                  theme === "dark"
                    ? textColorTheme.secondaryColor
                    : textColorTheme.primaryColor
                }
              >
                Don't have an account?{" "}
                <Link to="/register" style={{ textDecoration: "underline" }}>
                  Sign up
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
                loginClickEvent();
              }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
