import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  useColorModeValue,
  Stack,
  Button,
  Link,
  keyframes,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useState } from "react";

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const Project1 = () => {
  const images = [
    {
      src: "/src/assets/project-img/homeSS.png",
      alt: "Screenshot of financial pulse dashboard's Homepage",
    },
    {
      src: "/src/assets/project-img/StockSearchSS.png",
      alt: "Screenshot of a Searchable stock after using the search bar",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const reactLogo = "/src/assets/tech-icons/React.png";
  const nextLogo = "/src/assets/tech-icons/Next.js.png";
  const axiosLogo = "/src/assets/tech-icons/Axios.png";
  const chakraUILogo = "/src/assets/tech-icons/chakraui.png";
  const borderColor = useColorModeValue("purple.500", "pink.300");

  return (
    <div>
      <Stack spacing="4" width="full" mx="auto">
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
              Developed a user-centric Home page and a dynamic router page for
              efficient display of stocks and financial data, sourced from
              Financial Modeling Prep's API. Engineered a feature-rich
              interface, including:
              <UnorderedList>
                <ListItem>
                  A comprehensive navigation bar for easy access to various
                  sections.
                </ListItem>
                <ListItem>
                  An intuitive search bar to quickly find specific stocks or
                  financial data.
                </ListItem>
                <ListItem>
                  A visually engaging marquee to highlight important financial
                  news or trends.
                </ListItem>
                <ListItem>
                  A dedicated news section to keep users updated with the latest
                  financial news.
                </ListItem>
                <ListItem>
                  A sidebar displaying real-time stock data, such as current
                  prices and percentage changes, for at-a-glance market
                  insights.
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
        </Box>
        {/* Image Section */}
        <Box mx="auto" textAlign="center" boxSize={"100%"} mb={2}>
          <Link href={images[currentImageIndex].src} isExternal>
            <Image
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              objectFit="contain"
            />
          </Link>

          <Button mr={4} onClick={prevImage}>
            Back
          </Button>
          <Button onClick={nextImage}>Forward</Button>
        </Box>
      </Stack>
    </div>
  );
};

export default Project1;
