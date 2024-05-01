import { extendTheme, ThemeConfig, useColorMode } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: () => {
      const { colorMode } = useColorMode();
      return {
        body: {
          bg: colorMode === "dark" ? "#232627" : "white", // Set background color based on color mode
        },
      };
    },
  },
});

export default theme;






