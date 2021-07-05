import React from "react";

import {
  Box,
  Button,
  Input,
  Flex,
  Image,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { SearchIcon } from "../../assets/icons/icons";

const Hero = () => {
  const containerHeight = "400px";

  return (
    <Flex mt="50px" justify="center">
      <Flex
        position="fixed"
        zIndex={0}
        bg="gray.300"
        h={containerHeight}
        w="1286px"
      >
        <Box w="50%"></Box>
        <Box w="50%" h="100%">
          <Image
            bg="#090C17"
            h="100%"
            objectFit="cover"
            src="https://www.themoviedb.org/t/p/original/j4cTvBTeeeh0KetGBQzS5y0msym.jpg"
            alt="Tomarrow War"
          />
        </Box>
      </Flex>

      <Box
        zIndex={1}
        bgGradient="linear(to-r, rgba(13,16,27,1) 51%, rgba(13,16,27,0) 100%)"
        position="fixed"
        h={containerHeight}
        w="1286px"
      ></Box>

      <Flex
        position="fixed"
        zIndex={2}
        pl="82px"
        direction="column"
        h={containerHeight}
        w="1286px"
        justify="center"
      >
        <Box w="704px">
          <Heading fontSize="62px">Welcome</Heading>
          <Text mt="10px" fontSize="24px">
            Millions of movies, TV shows and people to discover. Explore now.
          </Text>
          <Flex w="500px" mt="28px">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input
                borderColor="#FFC000"
                borderRadius="0px"
                type="tel"
                placeholder="Search for movies and shows"
              />
            </InputGroup>

            <Button bg="#FFC000" color="#090C17" borderRadius="0px">
              Search
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero;

// https://www.themoviedb.org/t/p/original/eV3XnUul4UfIivz3kxgeIozeo50.jpg
// https://www.themoviedb.org/t/p/original/j4cTvBTeeeh0KetGBQzS5y0msym.jpg
