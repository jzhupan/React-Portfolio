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
import VideoPlayer2 from "./VideoPlayer2";
import reactLogo from "/src/assets/tech-icons/React.png";
import nextjsLogo from "/src/assets/tech-icons/Next.js.png";
import axiosLogo from "/src/assets/tech-icons/Axios.png";
import chakraUILogo from "/src/assets/tech-icons/chakraui.png";

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const Project2 = () => {
  const borderColor = useColorModeValue("purple.500", "pink.300");

  return (
    <div>
      <Stack spacing="4" width="full" mx="auto">
        <Box mx="auto" textAlign="center">
          <VideoPlayer2 />
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
              src={reactLogo}
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
              src={nextjsLogo}
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
              src={chakraUILogo}
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
              Developed a user-centric <strong>Home page</strong> and a dynamic
              router page for efficient display of stocks and financial data,
              sourced from <strong>Financial Modeling Prep's API</strong>.
              Engineered a feature-rich interface, including:
              <UnorderedList>
                <ListItem>
                  A comprehensive <strong>navigation bar</strong> for easy
                  access to various sections.
                </ListItem>
                <ListItem>
                  An intuitive <strong>search bar</strong> to quickly find
                  specific stocks or financial data.
                </ListItem>
                <ListItem>
                  A visually engaging <strong>marquee</strong> to highlight
                  important financial news or trends.
                </ListItem>
                <ListItem>
                  A dedicated <strong>news section</strong> to keep users
                  updated with the latest financial news.
                </ListItem>
                <ListItem>
                  A sidebar displaying <strong>real-time stock data</strong>,
                  such as current prices and percentage changes, for at-a-glance
                  market insights.
                </ListItem>
              </UnorderedList>
            </Text>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default Project2;
