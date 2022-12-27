import React from "react";
import { Box, theme } from "@chakra-ui/react";
import { darkTheme, textColorTheme } from "../../utils/colorTheme";

const UploadMovie = ({ theme }) => {
  return (
    <>
      <Box
        width={["100vw", "100vw", "90vw", "90vw", "90vw", "90vw"]}
        height="100vh"
        margin="auto"
        backgroundColor={
          theme === "dark" ? darkTheme.primaryColor : darkTheme.secondaryColor
        }
        color={
          theme === "dark"
            ? textColorTheme.primaryColor
            : textColorTheme.secondaryColor
        }
      >
        {/* UPLOAD POSTER CONTAINER */}
        <Box
          className="forUploadPoster"
          width="40%"
          height="30%"
          backgroundColor="white"
        ></Box>
      </Box>
    </>
  );
};

export default UploadMovie;
