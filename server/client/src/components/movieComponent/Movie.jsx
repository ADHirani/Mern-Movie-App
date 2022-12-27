import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { darkTheme, textColorTheme } from "../../utils/colorTheme";

const Movie = ({ title, poster, type, imdb, theme }) => {
  return (
    <>
      <Container
        style={{
          backgroundColor:
            theme === "dark"
              ? darkTheme.secondaryColor
              : darkTheme.primaryColor,
        }}
      >
        {poster ? (
          <Box
            width="100%"
            height="65%"
            display="flex"
            borderRadius="0.5rem"
            backgroundColor="red"
            pb="4px"
          >
            <Img
              src={poster}
              alt={title}
              width="100%"
              height="100%"
              borderRadius="0.5rem"
              mt="2px"
              mx="2px"
              backgroundSize="cover"
            />
          </Box>
        ) : (
          <SkeletonTheme
            baseColor="#505050"
            highlightColor="#6b6b6b"
            borderRadius="0.5rem"
            duration={1}
          >
            <p>
              <Skeleton
                count={1}
                width="9.5rem"
                height="10rem"
                borderRadius="0.5rem"
              />
            </p>
          </SkeletonTheme>
        )}

        <Box
          display="flex"
          width="100%"
          flexDir="column"
          alignItems="center"
          overflowY="scroll"
          overflowX="hidden"
          css={{
            "&::-webkit-scrollbar": {
              width: "2px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background:
                theme === "dark"
                  ? darkTheme.primaryColor
                  : darkTheme.secondaryColor,
              borderRadius: "1rem",
            },
          }}
          gap={title && imdb && type ? "0.4rem" : "0rem"}
        >
          {title ? (
            <Text
              fontSize="1.01rem"
              mx="2"
              fontWeight="bold"
              color={
                theme === "dark"
                  ? textColorTheme.secondaryColor
                  : textColorTheme.primaryColor
              }
            >
              {title}
            </Text>
          ) : (
            <SkeletonTheme
              baseColor="#505050"
              highlightColor="#6b6b6b"
              borderRadius="0.5rem"
              duration={1}
            >
              <p>
                <Skeleton
                  count={1}
                  style={{ marginTop: "10px" }}
                  width="10rem"
                  height="1.5rem"
                  borderRadius="1rem"
                />
              </p>
            </SkeletonTheme>
          )}
          {type ? (
            <Text
              color={
                theme === "dark"
                  ? textColorTheme.secondaryColor
                  : textColorTheme.primaryColor
              }
            >
              {type}
            </Text>
          ) : (
            <SkeletonTheme
              baseColor="#505050"
              highlightColor="#6b6b6b"
              borderRadius="0.5rem"
              duration={1}
            >
              <p>
                <Skeleton
                  count={1}
                  // style={{ marginTop: "6px" }}
                  width="10rem"
                  height="1.5rem"
                  borderRadius="1rem"
                />
              </p>
            </SkeletonTheme>
          )}
          {imdb ? (
            <Text
              color={
                theme === "dark"
                  ? textColorTheme.secondaryColor
                  : textColorTheme.primaryColor
              }
            >
              {imdb}
              {imdb ? "/10" : ""}
            </Text>
          ) : (
            <SkeletonTheme
              baseColor="#505050"
              highlightColor="#6b6b6b"
              borderRadius="0.5rem"
              duration={1}
            >
              <p>
                <Skeleton
                  count={1}
                  width="9.8rem"
                  height="1.5rem"
                  borderRadius="0.5rem"
                />
              </p>
            </SkeletonTheme>
          )}
        </Box>
      </Container>
    </>
  );
};
const Container = styled.div`
  min-width: 10rem;
  max-width: 10rem;
  height: 17rem;
  box-shadow: 1.5px 0.5px 7px 0px gray;
  border-radius: 0.6rem;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.4rem 0.3rem;
  cursor: pointer;
`;

export default Movie;
