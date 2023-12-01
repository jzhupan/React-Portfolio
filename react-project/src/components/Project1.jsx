import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  useColorModeValue,
  Stack,
  StackDivider,
  SimpleGrid,
  Link,
  keyframes,
} from "@chakra-ui/react";
import { css } from "@emotion/react";

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const Project1 = () => {
  const reactLogo = "/src/assets/tech-icons/React.png";
  const nextLogo = "/src/assets/tech-icons/Next.js.png";
  const axiosLogo = "/src/assets/tech-icons/Axios.png";
  const chakraUILogo = "/src/assets/tech-icons/chakraui.png";
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
                  Created a user-friendly Home page and dynamic router page to
                  display stocks and financial data from the Financial Modeling
                  Prep's API.
                </li>
                <li>
                  Designed a feature-rich interface comprising a navigation bar,
                  search bar, marquee, news section, and a sidebar with
                  real-time stock data, including prices and percentage changes.
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
                  src={nextLogo}
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
              <Text pt="2" fontSize="sm" textAlign={"center"}></Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Image Section */}
        <SimpleGrid columns={2} spacing={12} mx="auto">
          <Box>
            <Link href="/src/assets/project-img/homeSS.png" isExternal>
              <Image
                src="/src/assets/project-img/homeSS.png"
                alt="Screenshot of financial pulse dashboard's Homepage"
                maxW="100%"
                maxH="400px"
                objectFit="cover"
              />
            </Link>
          </Box>
          <Box>
            <Link href="/src/assets/project-img/StockSearchSS.png" isExternal>
              <Image
                src="/src/assets/project-img/StockSearchSS.png"
                alt="Screenshot of a Searchable stock after using the search bar"
                maxW="100%"
                maxH="400px"
                objectFit="cover"
              />
            </Link>
          </Box>
        </SimpleGrid>
      </Stack>
    </div>
  );
};

export default Project1;
