import {
  ChakraProvider,
  Box,
  Grid,
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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Tiles() {
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const squareTexts = [
    "Financial Dashboard",
    "Image Text Translator",
    "",
    "About",
    "",
    "✢",
    "VSCode Theme",
    "Contact",
  ];

  const modalContents = [
    <Project1 key="project1" />,
    <Project2 key="project2" />,
    "",
    <About key="about" />,
    "",
    "Coming soon",
    <Project3 key="project3" />,
    <ContactForm key="contact-page" />,
  ];

  const modalHeaders = [
    "Financial Pulse Dashboard",
    "Image to Text Translator Tiles",
    "Animation placeholder",
    "Art Meets Code: Jennie's Creative Coding Odyssey",
    "Animation placeholder",
    "Coming Soon",
    "Visual Studio Code Theme",
    "Your Vision, Our Creativity: Contact Me to Begin!",
  ];

  const modalEnabledSquares = [0, 1, 3, 6, 7];
  const handleSquareClick = (index) => {
    if (modalEnabledSquares.includes(index)) {
      setSelectedSquare(index);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedSquare(null);
    setIsModalOpen(false);
  };

  const animatedSquares = [0, 1, 3, 5, 6, 7];
  const colorChangeSquares = [0, 1, 2, 3, 4, 5, 6, 7];
  const shuffledAnimations = shuffleArray([...animations]);
  const shuffledColors = shuffleArray([...colors]);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Grid
        templateColumns="repeat(4, 200px)"
        gap={4}
        justifyItems="center"
        alignItems="center"
        mt="auto"
      >
        {[...Array(8)].map((_, index) => {
          const isAnimated = animatedSquares.includes(index);
          const shouldChangeColor = colorChangeSquares.includes(index);
          const animationStyle = isAnimated
            ? {
                animation: `${
                  shuffledAnimations[index % shuffledAnimations.length]
                } 0.5s ease forwards`,
              }
            : {};
          const colorIndex = colorChangeSquares.indexOf(index);
          const hoverColor = shouldChangeColor
            ? shuffledColors[colorIndex]
            : "purple.500";

          let extraHoverStyle =
            index === 4 || index === 2
              ? {
                  transform: "scale(1.05)",
                }
              : {};

          return (
            <Box
              key={index}
              w="200px"
              h="200px"
              bg="purple.500"
              _hover={{
                cursor: "pointer",
                ...animationStyle,
                bg: hoverColor,
                ...extraHoverStyle,
              }}
              onClick={() => handleSquareClick(index)}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {index === 4 ? (
                <AnimatedBox />
              ) : index === 2 ? (
                <CatAnimation />
              ) : (
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  color="white"
                  textAlign="center"
                >
                  {squareTexts[index]}
                </Text>
              )}
            </Box>
          );
        })}
      </Grid>
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        modalContent={modalContents[selectedSquare]}
        modalHeader={modalHeaders[selectedSquare]}
      />
    </ChakraProvider>
  );
}

export default Tiles;
