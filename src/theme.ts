import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'

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

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
}

export const appTheme = extendTheme({
  config,
  shadows,
  colors,
  fonts,
})