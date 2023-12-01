import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Squares from "./Components/Squares";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      grey: "#1A202C",
      white: "#FFFFFF",
      cyan: "#76E4F7",
      pink: "#D53F8C",
      yellow: "##F6E05E",
    },
  },
  fonts: {
    body: "Quicksand, sans-serif",
    heading: "Quicksand, sans-serif",
  },
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
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Squares />
    </ChakraProvider>
  );
}

export default App;
