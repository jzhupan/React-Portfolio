import {
  Box,
  Container,
  Text,
  Stack,
  Link,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaPaintBrush } from "react-icons/fa";

const Footer = () => {
  return (
    <Box color="white">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <HStack spacing={4} justifyContent="center" w={"100%"}>
          <Link href="https://www.linkedin.com/in/jenniezp/" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} className="icons" />
          </Link>
          <Link href="https://github.com/jzhupan" isExternal>
            <Icon as={FaGithub} w={6} h={6} className="icons" />
          </Link>
          <Link href="https://www.jenniezp.art/" isExternal>
            <Icon as={FaPaintBrush} w={6} h={6} className="icons" />
          </Link>
        </HStack>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.300"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Text>© 2023 jenniedev.com. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
