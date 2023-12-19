import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  useColorModeValue,
  Stack,
  keyframes,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import vscodeTheme from "../assets/project-img/midnight-grape.png";

const Project3 = () => {
  const borderColor = useColorModeValue("purple.500", "pink.300");

  return (
    <div>
      <Stack spacing="4" width="full" mx="auto">
        <Box mx="auto" width="100%">
          <Heading
            s
            size="xs"
            textTransform="uppercase"
            textAlign={"center"}
            mt={"15px"}
          >
            Summary:
          </Heading>

          <Box mx={"auto"} maxW={"80%"}>
            <Text pt="2" textAlign={"justify"}>
              I <strong>customized</strong> a theme called '
              <strong>Midnight Grape</strong>' for Visual Studio Code, is a{" "}
              <strong>visually stunning interface</strong> designed to enhance
              the developer's experience through its serene night sky-inspired
              color palette. It prioritizes{" "}
              <strong>comfort and readability,</strong> with shades of{" "}
              <strong>deep purple and vibrant pink</strong> that{" "}
              <strong>reduce eye strain</strong> and make{" "}
              <strong>syntax highlighting</strong> a breeze. The theme's custom
              icons and intuitive layout are thoughtfully incorporated, ensuring{" "}
              <strong>seamless navigation</strong> and file management.{" "}
              <strong>Customizable and accessible,</strong> 'Midnight Grape' is
              more than just a theme; it's an <strong>essential tool</strong>{" "}
              for developers who value both{" "}
              <strong>aesthetics and functionality</strong> in their coding
              environment.
              <UnorderedList>
                <ListItem>
                  <strong>Soothing Color Scheme:</strong> Deep purples and
                  vibrant pinks inspired by the night sky create a comfortable
                  coding environment.
                </ListItem>
                <ListItem>
                  <strong>Enhanced Readability:</strong> Distinct colors for
                  syntax highlighting improve code readability and reduce visual
                  fatigue.
                </ListItem>
                <ListItem>
                  <strong>Optimized for Long Sessions:</strong> Dark background
                  designed to minimize glare and light emission.
                </ListItem>
                <ListItem>
                  <strong>Easy Installation:</strong> Quickly downloadable from
                  the Visual Studio Code Marketplace for a hassle-free setup.
                </ListItem>
              </UnorderedList>
            </Text>
          </Box>
        </Box>
        <Box mx="auto">
          <Heading size="xs" textTransform="uppercase" m={1} align="center">
            Link:
          </Heading>
          <Flex
            width="full"
            maxW="md"
            mx="auto"
            px="4"
            py="2"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            borderColor={borderColor}
            boxShadow="lg"
            justify="space-around"
            align="center"
          >
            <a
              href="https://github.com/jzhupan/vscode-theme.git"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </Flex>
        </Box>

        <Box mx="auto" textAlign="center">
          <Image
            src={vscodeTheme}
            alt="screenshot demo of my visual studio code theme"
          />
        </Box>
      </Stack>
    </div>
  );
};

export default Project3;
