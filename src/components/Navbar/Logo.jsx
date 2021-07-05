import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import LogoIcon from "../../assets/svg/LogoIcon";

const Logo = () => {
  return (
    <Flex align="center" justify="center">
      <LogoIcon width="32.303" height="32.303" />

      <Text ml="7.2px" fontWeight="bold" fontSize="23px">
        movieTime
      </Text>
    </Flex>
  );
};

export default Logo;
