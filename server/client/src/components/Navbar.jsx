import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { darkTheme, textColorTheme } from "../utils/colorTheme";
import { BiSearchAlt } from "react-icons/bi";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineCaretDown,
  AiOutlineCaretLeft,
  AiFillHome,
} from "react-icons/ai";

const Navbar = ({ theme, setTheme }) => {
  return (
    <>
      <Box
        width="100%"
        height={["100%", "100%", "100%", "98%", "98%", "98%"]}
        borderRadius="0.6rem"
        gap={["1rem", "1rem", "1rem", "1.5rem", "2rem", "2rem"]}
        display="flex"
        flexDir="column"
        mt={["3", "3", "3", "0", "0", "0"]}
        alignItems="center"
        backgroundColor={
          theme === "dark" ? darkTheme.primaryColor : darkTheme.secondaryColor
        }
        color={
          theme === "dark"
            ? textColorTheme.primaryColor
            : textColorTheme.secondaryColor
        }
      >
        <NavbarHeader theme={theme} setTheme={setTheme} />
        <NavbarContent theme={theme} setTheme={setTheme} />
      </Box>
    </>
  );
};

const NavbarHeader = ({ theme, setTheme }) => {
  return (
    <Box
      borderRadius="0.6rem"
      width="95%"
      mt="1"
      gap="1.5"
      height="fit-content"
      backgroundColor="transparent"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      // pt="1.5"
    >
      {/* BUTTON AND DARKMODE OPTION */}
      <DarkModeAndLogin
        theme={theme}
        setTheme={setTheme}
        visibleHome={{ visibleIn: "navbar" }}
      />

      {/* INPUT AND ICON FOR SEARCH BAR */}
      <Box
        width={["80%", "70%", "70%", "70%", "70%", "60%"]}
        display="flex"
        gap="0.3"
        backgroundColor="white"
        color="black"
        borderRadius="0.5rem"
        m="2.5"
      >
        <Box
          width="2.5rem"
          height="2.55rem"
          backgroundColor="transparent"
          fontSize="1.5rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          ml="0.5"
        >
          <BiSearchAlt />
        </Box>
        <Input
          variant="unstyled"
          width="80%"
          placeholder="Search Movie .."
          py="0"
          px="1"
        />
      </Box>
    </Box>
  );
};

export const DarkModeAndLogin = ({ theme, setTheme, visibleHome }) => {
  const { visibleIn } = visibleHome;
  const navigate = useNavigate();

  return (
    <>
      <Box
        width="90%"
        display="flex"
        gap="0.3"
        backgroundColor="transparent"
        borderRadius="0.5rem"
        mx="0.5"
        mt="3.5"
        justifyContent="space-between"
      >
        <Box
          color={
            theme === "dark"
              ? textColorTheme.secondaryColor
              : textColorTheme.primaryColor
          }
          width="2.5rem"
          height="2.5rem"
          fontSize="1.5rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          cursor="pointer"
          onClick={() => {
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
          backgroundColor={
            theme === "dark"
              ? textColorTheme.primaryColor
              : textColorTheme.secondaryColor
          }
        >
          {theme === "dark" ? <MdOutlineDarkMode /> : <MdDarkMode />}
        </Box>
        <Box
          width={["70%", "70%", "70%", "90%", "90%", "90%"]}
          display="flex"
          flexDir="row"
          gap="0.8rem"
          justifyContent="flex-end"
        >
          {/* signin Button */}

          {visibleIn === "register" ? (
            <HomeNavigationButton />
          ) : (
            <Button
              variant="outline"
              color={
                theme === "dark"
                  ? textColorTheme.primaryColor
                  : textColorTheme.secondaryColor
              }
              onClick={() => {
                navigate("/register");
              }}
              width="fit-content"
            >
              Sign Up
            </Button>
          )}

          {/* Login Button */}
          {visibleIn === "login" ? (
            <HomeNavigationButton />
          ) : (
            <Button
              color={darkTheme.primaryColor}
              width="fit-content"
              backgroundColor={textColorTheme.primaryColor}
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

const HomeNavigationButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        color={darkTheme.primaryColor}
        width="fit-content"
        backgroundColor={textColorTheme.primaryColor}
        borderRadius="0.7rem"
        onClick={() => {
          navigate("/");
        }}
        textAlign="center"
        fontSize="1.5rem"
      >
        <AiFillHome />
      </Button>
    </>
  );
};

const NavbarContent = ({ theme, setTheme }) => {
  const [hollywoodTapIcon, sethollywoodTapIcon] = useState(false);
  const [bollywoodTapIcon, setbollywoodTapIcon] = useState(false);
  const [tollywoodTapIcon, settollywoodTapIcon] = useState(false);
  return (
    <>
      <Box
        color="white"
        width="85%"
        display="flex"
        flexDir={["row", "row", "column", "column", "column", "column"]}
        justifyContent="space-around"
        gap={["2", "2", "2", "2", "5", "5"]}
        fontSize={["0.9rem", "0.9rem", "1rem", "1rem", "1.2rem", "1.2rem"]}
      >
        <Box
          margin="auto"
          className="forHollywood"
          width={["50%", "50%", "100%", "100%", "100%", "100%"]}
          borderRadius="0.3rem"
          py="1.5"
          px="2"
          display="flex"
          justifyContent="space-between"
          cursor="pointer"
          onClick={() => {
            sethollywoodTapIcon(!hollywoodTapIcon);
          }}
          backgroundColor={
            theme === "dark"
              ? textColorTheme.primaryColor
              : darkTheme.primaryColor
          }
          color={
            theme === "dark"
              ? textColorTheme.secondaryColor
              : textColorTheme.primaryColor
          }
        >
          <Text>HOLLYWOOD</Text>
          <Box display="flex" justifyContent="center" alignItems="center">
            {hollywoodTapIcon ? <AiOutlineCaretDown /> : <AiOutlineCaretLeft />}
          </Box>
        </Box>
        <Box
          margin="auto"
          className="forHollywood"
          width={["50%", "50%", "100%", "100%", "100%", "100%"]}
          borderRadius="0.3rem"
          py="1.5"
          px="2"
          display="flex"
          cursor="pointer"
          justifyContent="space-between"
          onClick={() => {
            setbollywoodTapIcon(!bollywoodTapIcon);
          }}
          backgroundColor={
            theme === "dark"
              ? textColorTheme.primaryColor
              : darkTheme.primaryColor
          }
          color={
            theme === "dark"
              ? textColorTheme.secondaryColor
              : textColorTheme.primaryColor
          }
        >
          <Text>BOLLYWOOD</Text>
          <Box display="flex" justifyContent="center" alignItems="center">
            {bollywoodTapIcon ? <AiOutlineCaretDown /> : <AiOutlineCaretLeft />}
          </Box>
        </Box>
        <Box
          margin="auto"
          className="forHollywood"
          cursor="pointer"
          width={["50%", "50%", "100%", "100%", "100%", "100%"]}
          borderRadius="0.3rem"
          py="1.5"
          px="2"
          display="flex"
          justifyContent="space-between"
          onClick={() => {
            settollywoodTapIcon(!tollywoodTapIcon);
          }}
          backgroundColor={
            theme === "dark"
              ? textColorTheme.primaryColor
              : darkTheme.primaryColor
          }
          color={
            theme === "dark"
              ? textColorTheme.secondaryColor
              : textColorTheme.primaryColor
          }
        >
          <Text>TOLLYWOOD</Text>
          <Box display="flex" justifyContent="center" alignItems="center">
            {tollywoodTapIcon ? <AiOutlineCaretDown /> : <AiOutlineCaretLeft />}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
