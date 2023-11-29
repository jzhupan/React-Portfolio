import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  extendTheme,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  CSSReset,
} from "@chakra-ui/react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Contact from "./Contact";
import About from "./About";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        bg: "gray.100",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
});

function getRandomColor() {
  const colors = [
    "red.400",
    "blue.400",
    "green.400",
    "purple.400",
    "orange.400",
    "pink.400",
    "teal.400",
    "yellow.400",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

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

function getRandomAnimation() {
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
}

function getRandomAnimationsArray() {
  const animationsArray = [];
  for (let i = 0; i < 8; i++) {
    animationsArray.push(getRandomAnimation());
  }
  return animationsArray;
}

function App() {
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const squareTexts = [
    "Financial Dashboard",
    "Image Text Translator",
    "Animation",
    "About",
    "Animation",
    "Coming soon",
    "Coming Soon",
    "Contact",
  ];

  const modalContents = [
    <Project1 key="project1" />,
    <Project2 key="project2" />,
    "Animation/GIF placeholder",
    <About key="about" />,
    "Animation/GIF placeholder",
    "Coming soon",
    "Coming Soon",
    <Contact key="contact-page" />,
  ];

  const modalHeaders = [
    "Financial Pulse Dashboard",
    "Image to Text Translator App",
    "",
    "Coming Soon",
    "Coming Soon",
    "Contact",
  ];

  const handleSquareClick = (index) => {
    setSelectedSquare(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedSquare(null);
    setIsModalOpen(false);
  };

  const handleAnimationEnd = (event) => {
    event.target.classList.remove("animate"); // Remove the animation class after it ends
  };
  const animationsArray = getRandomAnimationsArray();

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
        {[...Array(8)].map((_, index) => (
          <Box
            key={index}
            w="200px"
            h="200px"
            bg="blue.400"
            _hover={{
              cursor: "pointer",
              animation: `${animationsArray[index]} 0.5s ease forwards`,
            }}
            onClick={() => handleSquareClick(index)}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            onAnimationEnd={handleAnimationEnd}
          >
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              {squareTexts[index]}
            </Text>
          </Box>
        ))}
      </Grid>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        size="md"
        isCentered
      >
        <ModalOverlay />
        <ModalContent height="45%" maxW="80%">
          <ModalHeader>{modalHeaders[selectedSquare]}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{modalContents[selectedSquare]}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
