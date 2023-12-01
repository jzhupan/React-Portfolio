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
import { css } from "@emotion/react";
import VideoPlayer from "./VideoPlayer";

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const Project2 = () => {
  const expressLogo = "/src/assets/tech-icons/Express.png";
  const bootstrapLogo = "/src/assets/tech-icons/Bootstrap.png";
  const axiosLogo = "/src/assets/tech-icons/Axios.png";
  const jsLogo = "/src/assets/tech-icons/JavaScript.png";
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
              I developed an innovative Optical Character Recognition (OCR)
              application that seamlessly transforms images into editable text
              and offers translation capabilities. This user-centric platform
              enables users to effortlessly upload images with text, precisely
              crop the text areas, and translate the content into English. Key
              highlights of the project include:
              <UnorderedList>
                <ListItem>
                  User-Friendly Interface: Designed with a focus on simplicity
                  and efficiency, the app provides an intuitive experience,
                  allowing users to navigate and perform tasks with ease.
                </ListItem>
                <ListItem>
                  Cost-Effective Development: I strategically leveraged free
                  resources during the development process, which not only
                  optimized costs but also made the application more accessible
                  to a broader audience.
                </ListItem>
                <ListItem>
                  Robust Back-End System: The app features a sophisticated
                  back-end infrastructure that securely stores uploaded images
                  locally. This system is designed to support multilingual
                  functionality, catering to a diverse user base.
                </ListItem>
                <ListItem>
                  Comprehensive Language Support: For an extensive overview and
                  demonstration of the various languages supported by the app, I
                  encourage you to refer to the ReadMe file included with the
                  application.
                </ListItem>
              </UnorderedList>
            </Text>
          </Box>
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
              alt="React"
              transition="2s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
              css={css`
                animation: ${slideIn} 1s ease-out forwards;
              `}
            />
            <Image
              src={bootstrapLogo}
              boxSize="50px"
              alt="Next.js"
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
              alt="Axios"
              transition="2s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
              css={css`
                animation: ${slideIn} 1s ease-out forwards;
              `}
            />
            <Image
              src={jsLogo}
              boxSize="50px"
              alt="Chakra UI"
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

        <Box mx="auto" textAlign="center">
          <VideoPlayer />
        </Box>
      </Stack>
    </div>
  );
};

export default Project2;
