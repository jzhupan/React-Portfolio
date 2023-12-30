import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  extendTheme,
  Text,
  CSSReset,
} from "@chakra-ui/react";
import { useState } from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import ContactForm from "./ContactForm";
import About from "./About";
import AnimatedBox from "./AnimatedBox";
import CatAnimation from "./CatAnimation";
import CustomModal from "./CustomModal";

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

const ModalComponents = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Grid
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(4, 200px)"
        gap={2}
      >
        <GridItem rowSpan={2} colSpan={1} w="100%" h="200" bg="none">
          <CatAnimation w="90%" />
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="blue.500"
        ></GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="blue.500"
        ></GridItem>
        <GridItem rowSpan={2} colSpan={1} w="100%" h="200" bg="none">
          <AnimatedBox />
        </GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="blue.500"
        ></GridItem>
        <GridItem rowSpan={2} colSpan={1} w="100%" h="200" bg="none"></GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="blue.500"
        ></GridItem>
        <GridItem
          rowSpan={2}
          colSpan={1}
          w="100%"
          h="200"
          bg="blue.500"
        ></GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default ModalComponents;
