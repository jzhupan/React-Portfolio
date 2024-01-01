import {
  ChakraProvider,
  Grid,
  GridItem,
  extendTheme,
  CSSReset,
  Flex,
} from "@chakra-ui/react";
// import { useState } from "react";
// import ContactForm from "./ContactForm";
// import About from "./About";
import AnimatedBox from "./AnimatedBox";
import CatAnimation from "./CatAnimation";
import ImageTextTranslatorApp from "./ImageTextTranslatorApp";
import FinancialPulseDashboard from "./FinancialPulseDashboard";
import VSCodeTheme from "./VSCodeTheme";
import AboutModal from "./AboutModal";
import ContactModal from "./ContactModal";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        bg: "brand[grey]",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Quicksand, sans-serif",
      },
    },
  },
});

const colors = [
  "red.500",
  "cyan.300",
  "green.400",
  "orange.300",
  "pink.300",
  "teal.200",
  "pink.500",
  "yellow.300",
];

const animations = [
  "shrink-halfway",
  "grow",
  "shake",
  "rotate",
  "flip",
  "pulse",
  "bounce",
  "jelly",
];

const GridLayout = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(4, 200px)"
        gap={2}
      >
        <GridItem rowSpan={2} colSpan={1} w="100%" h="200" bg="none">
          <Flex justifyContent="center" alignItems="center" height="180px">
            <CatAnimation />
          </Flex>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} w="100%" h="200" bg="purple.500">
          <Flex justifyContent="center" alignItems="center" height="180px">
            <ImageTextTranslatorApp />
          </Flex>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} w="100%" h="200" bg="purple.500">
          <Flex justifyContent="center" alignItems="center" height="180px">
            <FinancialPulseDashboard />
          </Flex>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} w="100%" h="200" bg="none">
          <AnimatedBox />
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} w="100%" h="200" bg="purple.500">
          <Flex justifyContent="center" alignItems="center" height="180px">
            <VSCodeTheme />
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="none"
          color="white"
        >
          <Flex justifyContent="center" alignItems="center" height="180px">
            ✢
          </Flex>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} w="100%" h="200" bg="purple.500">
          <Flex justifyContent="center" alignItems="center" height="180px">
            <AboutModal />
          </Flex>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} w="100%" h="200" bg="purple.500">
          <Flex justifyContent="center" alignItems="center" height="180px">
            <ContactModal />
          </Flex>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default GridLayout;
