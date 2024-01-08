import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./Components/Footer";

import ResponsiveGrid from "./Components/ResponsiveGrid";

const colors = {
  brand: {
    grey: "#1A202C",
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
      <ResponsiveGrid />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
