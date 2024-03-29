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
  Button,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import VideoPlayer1 from "./VideoPlayer";
import expressLogo from "/src/assets/tech-icons/Express.png";
import bootStrapLogo from "/src/assets/tech-icons/Bootstrap.png";
import axiosLogo from "/src/assets/tech-icons/Axios.png";
import JavaScriptLogo from "/src/assets/tech-icons/JavaScript.png";

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const Project2 = () => {
  const borderColor = useColorModeValue("purple.500", "pink.300");
  const githubLink = "https://github.com/jzhupan/Image-To-Text-Translator-App";

  return (
    <div>
      <Stack spacing="4" width="full" mx="auto">
        <Box mx="auto" textAlign="center">
          <VideoPlayer1 />
        </Box>
        <Box mx="auto">
          <Heading size="xs" textTransform="uppercase" m={1}>
            Notable Libraries / Frameworks used:
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
            <Image
              src={expressLogo}
              boxSize="50px"
              alt="Express Logo"
              transition="2s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
              css={css`
                animation: ${slideIn} 1s ease-out forwards;
              `}
            />
            <Image
              src={bootStrapLogo}
              boxSize="50px"
              alt="Bootstrap Logo"
              transition="2s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
              css={css`
                animation: ${slideIn} 1s ease-out forwards;
              `}
            />
            <Image
              src={axiosLogo}
              boxSize="50px"
              alt="Axios Logo"
              transition="2s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
              css={css`
                animation: ${slideIn} 1s ease-out forwards;
              `}
            />
            <Image
              src={JavaScriptLogo}
              boxSize="50px"
              alt="JavaScript Logo"
              transition="2s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
              css={css`
                animation: ${slideIn} 1s ease-out forwards;
              `}
            />
          </Flex>
        </Box>

        <Box mx="auto" width="100%">
          <Heading
            size="xs"
            textTransform="uppercase"
            textAlign={"center"}
            mt={"15px"}
          >
            Summary:
          </Heading>
          <Box mx={"auto"} maxW={"80%"}>
            <Text pt="2" textAlign={"justify"}>
              I developed an innovative{" "}
              <strong>Optical Character Recognition (OCR) application</strong>{" "}
              that seamlessly transforms images into editable text and offers
              translation capabilities. This user-centric platform enables users
              to effortlessly upload images with text, precisely crop the text
              areas, and translate the content into English. Key highlights of
              the project include:
              <UnorderedList>
                <ListItem>
                  <strong>User-Friendly Interface:</strong> Designed with a
                  focus on simplicity and efficiency, the app provides an
                  intuitive experience, allowing users to navigate and perform
                  tasks with ease.
                </ListItem>
                <ListItem>
                  <strong>Cost-Effective Development:</strong> I strategically
                  leveraged free resources during the development process, which
                  not only optimized costs but also made the application more
                  accessible to a broader audience.
                </ListItem>
                <ListItem>
                  <strong>Robust Back-End System:</strong> The app features a
                  sophisticated back-end infrastructure that securely stores
                  uploaded images locally. This system is designed to support
                  multilingual functionality, catering to a diverse user base.
                </ListItem>
                <ListItem>
                  <strong>Comprehensive Language Support:</strong> For an
                  extensive overview and demonstration of the various languages
                  supported by the app, I encourage you to refer to the{" "}
                  <strong>ReadMe</strong> file included with the application.
                </ListItem>
              </UnorderedList>
            </Text>
            <Box mx="auto" textAlign="center" boxSize={"80%"} mb={3} p={5}>
              <Button
                width={{ base: "100%", sm: "auto" }}
                fontSize={{ base: "xs", sm: "sm", md: "md" }}
                colorScheme="purple"
                onClick={() => window.open(githubLink, "_blank")}
              >
                Repository
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default Project2;
