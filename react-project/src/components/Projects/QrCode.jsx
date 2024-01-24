import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Stack,
  Center,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const QrCode = () => {
  const githubLink = "https://jzhupan.github.io/QR-code/";
  const borderColor = useColorModeValue("purple.500", "pink.300");
  return (
    <div>
      <Stack spacing="4" width="full" mx="auto">
        <Box mx="auto" width="100%">
          <Heading size="mb" textTransform="uppercase" textAlign={"center"}>
            QR Code Component
          </Heading>
          <Box mx={"auto"} maxW={"80%"}>
            <Text pt="2" textAlign={"justify"} mb={2}>
              Trying out SASS for learning purposes. Started with a small
              project following the design from Frontend Mentor Challenge and
              made it mobile responsive while also learning and trying out SCSS.
            </Text>
            <Box mx="auto" textAlign="center" boxSize={"80%"} mb={3} p={5}>
              <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                borderColor={borderColor}
              >
                <Heading mb={4} textAlign="center" size="sm">
                  QR Code component
                </Heading>

                <Button
                  width={{ base: "100%", sm: "auto" }}
                  fontSize={{ base: "xs", sm: "sm", md: "md" }}
                  colorScheme="purple"
                  onClick={() => window.open(githubLink, "_blank")}
                >
                  Preview
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default QrCode;
