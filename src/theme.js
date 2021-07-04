import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    // useSystemColorMode: true,
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  styles: {
    global: (props) => ({
      body: {
        // fontFamily: "body",
        color: mode("", "#F2FAFF")(props),
        bg: mode("white", "#090C17")(props),
        // lineHeight: "base",
      },
    }),
  },
});
export default theme;

// import { mode } from "@chakra-ui/theme-tools";
// color: mode("gray.800", "whiteAlpha.900")(props)
