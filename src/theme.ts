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
  default: '0px 4px 13px 0px rgba(0, 0, 0, 0.12)',
  defaultHovered: '0px 5px 13px 0px rgba(0, 0, 0, 0.25)'
}

const colors = {
  brand: "#006D86",
  brandLight: "#3F8EA8",
  brandGradient: "linear-gradient(-45deg, #fff 0%, #EAF5F7 100%)",
  brandGradientHover: "linear-gradient(-45deg, #d2eff4 0%, #eafafc 100%)"
}

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
}

const components = {
  Input: {
    baseStyle: {
      
    },
    sizes: {},
    variants: {
      input:{
        field: {
          bgColor: "#DDDDDD",
          borderColor: "brand",
          borderRadius: "xl",
          _hover: {
            borderColor: "brand",
          },
          _focus: {
            borderColor: "brand",
            boxShadow: "0 0 0 1px #006D86",
          },
        },
      }
    },
    defaultProps: {},
  },
}

export const appTheme = extendTheme({
  config,
  shadows,
  colors,
  fonts,
  components
})