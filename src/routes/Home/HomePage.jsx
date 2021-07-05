import React from "react";

import { Box } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
    </Box>
  );
};

export default HomePage;
