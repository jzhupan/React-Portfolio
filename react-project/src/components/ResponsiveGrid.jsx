import {
  ChakraProvider,
  Grid,
  GridItem,
  extendTheme,
  CSSReset,
  Flex,
  Box,
} from "@chakra-ui/react";

import AnimatedBox from "./Projects/AnimatedBox";
import CatAnimation from "./Projects/CatAnimation";
import ImageTextTranslatorApp from "./ImageTextTranslatorApp";
import FinancialPulseDashboard from "./FinancialPulseDashboard";
import VSCodeTheme from "./VSCodeTheme";
import AboutModal from "./AboutModal";
import ContactModal from "./ContactModal";
import Logo from "./Logo";
import CreativeCollectionModal from "./CreativeCollectionModal";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        bg: "brand[grey]",
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Quicksand, sans-serif",
      },
    },
  },
  breakpoints: {
    sm: "320px",
    md: "500px",
    lg: "960px",
    xl: "1200px",
  },
});

const ResponsiveGrid = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Logo />
      </Box>
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(4, 200px)",
        }}
        gap={2}
      >
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="100%"
          bgColor="none"
          className="hide-on-mobile"
        >
          <Flex justifyContent="center" alignItems="center" height="50%">
            <CatAnimation />
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="purple.500"
          className="rotate"
        >
          <Flex
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="180px"
          >
            <ImageTextTranslatorApp />
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="purple.500"
          className="shake"
        >
          <Flex justifyContent="center" alignItems="center" height="180px">
            <FinancialPulseDashboard />
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bgColor="none"
          className="hide-on-mobile"
        >
          <Flex justifyContent="center" alignItems="center" height="100%">
            <AnimatedBox />
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="purple.500"
          className="jelly"
        >
          <Flex justifyContent="center" alignItems="center" height="180px">
            <VSCodeTheme />
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="purple.500"
          color="white"
          className="flip"
        >
          <Flex justifyContent="center" alignItems="center" height="180px">
            <CreativeCollectionModal />
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="purple.500"
          className="pulse"
        >
          <Flex justifyContent="center" alignItems="center" height="180px">
            <AboutModal />
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="purple.500"
          className="bounce"
        >
          <Flex justifyContent="center" alignItems="center" height="180px">
            <ContactModal />
          </Flex>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default ResponsiveGrid;
