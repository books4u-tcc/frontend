import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const shadows = {
  default: '0px 4px 10px 0px rgba(0, 0, 0, 0.2)',
  defaultHovered: '0px 5px 13px 0px rgba(0, 0, 0, 0.25)'
}

const colors = {
  brand: "#006D86",
  brandGradient: "linear-gradient(-45deg, #fff 0%, #EAF5F7 100%)",
  brandGradientHover: "linear-gradient(-45deg, #d2eff4 0%, #eafafc 100%)"
}

export const appTheme = extendTheme({
  config,
  shadows,
  colors
})