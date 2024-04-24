import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const shadows = {
  default: '0px 4px 10px 0px rgba(0, 0, 0, 0.2)'
}

export const appTheme = extendTheme({
  config,
  shadows
})