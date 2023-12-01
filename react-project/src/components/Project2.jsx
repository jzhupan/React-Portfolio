import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  useColorModeValue,
  Stack,
  StackDivider,
  keyframes,
  SimpleGrid,
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
      <Stack divider={<StackDivider />} spacing="4" width="full" mx="auto">
        <Box mx="auto" width="full">
          <Heading size="xs" textTransform="uppercase">
            Summary:
          </Heading>
          <SimpleGrid columns={2} spacing={12} mx="auto">
            <Box mx={"auto"}>
              <Text pt="2" fontSize="sm">
                <li>
                  Created a user friendly platform allowing users to upload
                  images containing text, crop text images, and translate them
                  to English.
                </li>
                <li>
                  Implemented cost-effective development by utilizing free
                  resources, making the app accessible for a wider audience.
                </li>
                <li>
                  Developed a back-end system for storing uploaded images
                  locally and ensured multilingual support.
                </li>
                <li>
                  For a detailed overview and a demonstration of supported
                  languages, please refer to the ReadMe file.
                </li>
              </Text>
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
              <Text pt="2" fontSize="sm" textAlign={"center"}></Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box mx="auto">
          <VideoPlayer />
        </Box>
      </Stack>
    </div>
  );
};

export default Project2;
