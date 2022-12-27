import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Movie from "./movieComponent/Movie";
import Navbar from "./Navbar";
import { darkTheme, textColorTheme } from "../utils/colorTheme";

const Home = ({ theme, setTheme }) => {
  return (
    <>
      <ToastContainer />

      <Box
        width={["100vw", "100vw", "90vw", "90vw", "90vw", "90vw"]}
        height="100%"
        margin="auto"
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        backgroundColor={
          theme === "dark" ? darkTheme.secondaryColor : darkTheme.primaryColor
        }
        color={
          theme === "dark"
            ? textColorTheme.primaryColor
            : textColorTheme.secondaryColor
        }
        gap="0.5rem"
      >
        <Box
          width={["100%", "100%", "30%", "30%", "25%", "25%"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Navbar theme={theme} setTheme={setTheme} />
        </Box>
        <Box
          width={["100%", "100%", "60%", "60%", "70%", "70%"]}
          display="flex"
          flexDir="column"
          gap="1rem"
          alignItems="center"
          borderRadius="0.8rem"
          my="2"
          backgroundColor={
            theme === "dark" ? darkTheme.primaryColor : darkTheme.secondaryColor
          }
        >
          <Text
            fontSize="2rem"
            ml={["1", "1", "2", "2", "3", "3"]}
            mt="2"
            fontWeight="extrabold"
            alignSelf="flex-start"
            color={
              theme === "dark"
                ? textColorTheme.primaryColor
                : textColorTheme.secondaryColor
            }
          >
            {" "}
            Hollywood Movies
          </Text>
          <Box
            className="forHollywood"
            width={["90%", "90%", "90%", "90%", "100%", "100%"]}
            display="flex"
            justifyContent="space-between"
            gap="1.5rem"
            p={["0.5rem", "0.5rem", "1rem", "1rem", "1.5rem", "1.5rem"]}
            overflowX="scroll"
            css={{
              "&::-webkit-scrollbar": {
                height: "3px",
                borderRadius: "50rem",
              },
              "&::-webkit-scrollbar-thumb": {
                background:
                  theme === "dark"
                    ? darkTheme.secondaryColor
                    : darkTheme.primaryColor,
              },
            }}
          >
            <Movie
              theme={theme}
              title="Pirates of the Carebian"
              type="drama"
              imdb="8.1"
              poster="https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg"
            />
            <Movie
              theme={theme}
              title="Lucifer"
              type="drama"
              imdb="7.1"
              poster="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            />
            <Movie
              theme={theme}
              title="Stranger things"
              type="sci-fi"
              imdb="8.5"
              poster="https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg"
            />
            <Movie
              theme={theme}
              title="Pirates of the Carebian"
              type="drama"
              imdb="8.1"
              poster="https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg"
            />
            <Movie
              theme={theme}
              title="Lucifer"
              type="drama"
              imdb="7.1"
              poster="https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
            />
            <Movie
              theme={theme}
              title="Stranger things"
              type="sci-fi"
              imdb="8.5"
              poster="https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg"
            />
          </Box>
          <Text
            fontSize="2rem"
            ml={["1", "1", "2", "2", "3", "3"]}
            mt="2"
            fontWeight="extrabold"
            alignSelf="flex-start"
            color={
              theme === "dark"
                ? textColorTheme.primaryColor
                : textColorTheme.secondaryColor
            }
          >
            {" "}
            Bollywood Movies
          </Text>
          <Box
            className="forBollywood"
            width={["90%", "90%", "90%", "90%", "100%", "100%"]}
            display="flex"
            justifyContent="space-between"
            gap="1.5rem"
            p={["0.5rem", "0.5rem", "1rem", "1rem", "1.5rem", "1.5rem"]}
            overflowX="scroll"
            css={{
              "&::-webkit-scrollbar": {
                height: "3px",
                borderRadius: "50rem",
              },
              "&::-webkit-scrollbar-thumb": {
                background:
                  theme === "dark"
                    ? darkTheme.secondaryColor
                    : darkTheme.primaryColor,
              },
            }}
          >
            <Movie theme={theme} />
            <Movie theme={theme} />
            <Movie theme={theme} />
            <Movie theme={theme} />
            <Movie theme={theme} />
            <Movie theme={theme} />
            <Movie theme={theme} />
            <Movie theme={theme} />
            <Movie theme={theme} />
          </Box>
          <Text
            fontSize="2rem"
            ml={["1", "1", "2", "2", "3", "3"]}
            mt="2"
            fontWeight="extrabold"
            alignSelf="flex-start"
            color={
              theme === "dark"
                ? textColorTheme.primaryColor
                : textColorTheme.secondaryColor
            }
          >
            {" "}
            Tollywood Movies
          </Text>
          <Box
            className="forTollywood"
            width={["90%", "90%", "90%", "90%", "100%", "100%"]}
            display="flex"
            overflowX="scroll"
            justifyContent="space-between"
            gap="1.5rem"
            p={["0.5rem", "0.5rem", "1rem", "1rem", "1.5rem", "1.5rem"]}
            css={{
              "&::-webkit-scrollbar": {
                height: "3px",
                borderRadius: "50rem",
              },
              "&::-webkit-scrollbar-thumb": {
                background:
                  theme === "dark"
                    ? darkTheme.secondaryColor
                    : darkTheme.primaryColor,
              },
            }}
          >
            <Movie theme={theme} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
