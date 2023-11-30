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
} from "@chakra-ui/react";

const Project1 = () => {
  const reactLogo = "/src/assets/tech-icons/React.png";
  const nextLogo = "/src/assets/tech-icons/Next.js.png";
  const axiosLogo = "/src/assets/tech-icons/Axios.png";
  const chakraUILogo = "/src/assets/tech-icons/chakraui.png";
  const borderColor = useColorModeValue("purple.500", "pink.300");

  return (
    <div>
      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Summary
          </Heading>
          <Text pt="2" fontSize="sm">
            <li>
              Created a user-friendly Home page and dynamic router page to
              display stocks and financial data from the Financial Modeling
              Prep's API.
            </li>
            <li>
              Designed a feature-rich interface comprising a navigation bar,
              search bar, marquee, news section, and a sidebar with real-time
              stock data, including prices and percentage changes.
            </li>
          </Text>
        </Box>

        {/* Image Section */}
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <Link href="/src/assets/project-img/homeSS.png" isExternal>
              <Image
                src="/src/assets/project-img/homeSS.png"
                alt="Screenshot of financial pulse dashboard's Homepage"
                borderRadius="20px"
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
                borderRadius="20px"
                maxW="100%"
                maxH="400px"
                objectFit="cover"
              />
            </Link>
          </Box>
        </SimpleGrid>

        <Box>
          <Heading size="xs" textTransform="uppercase">
            Notable Libraries and Frameworks used:
          </Heading>

          <Flex
            width="full"
            maxW="md"
            px="4"
            py="5"
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
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
            />
            <Image
              src={nextLogo}
              boxSize="50px"
              alt="Next.js"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
            />
            <Image
              src={axiosLogo}
              boxSize="50px"
              alt="Axios"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
            />
            <Image
              src={chakraUILogo}
              boxSize="50px"
              alt="Chakra UI"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.2)",
              }}
            />
          </Flex>

          <Text pt="2" fontSize="sm">
            See a detailed analysis of all your business clients.
          </Text>
        </Box>
      </Stack>
    </div>
  );
};

export default Project1;
