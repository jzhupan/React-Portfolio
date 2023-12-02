import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./App.css";
import Squares from "./Components/Squares";

const colors = {
  brand: {
    grey: "#1A202C",
    black: "#000000",
    white: "#FFFFFF",
    cyan: "#76E4F7",
    pink: "#D53F8C",
    yellow: "#FAF089",
    purple: "#9F7AEA",
  },
};

const fonts = {
  body: "Quicksand, sans-serif",
  heading: "Yeseva One', serif",
  fontSizes: {
    xd: "10px",
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: "brand.grey",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Squares />
    </ChakraProvider>
  );
}

export default App;
