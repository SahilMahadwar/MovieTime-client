import React from "react";

import { Box, Button, useColorMode } from "@chakra-ui/react";

const DarkmodeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      {colorMode === "light" ? (
        <Button onClick={toggleColorMode}>Dark</Button>
      ) : (
        <Button onClick={toggleColorMode}>Light</Button>
      )}
    </Box>
  );
};

export default DarkmodeToggle;
