import { Box, Flex, Link, Stack, Image } from "@chakra-ui/react";
import Logo from "../assets/jzp-white-logo.png";

function Navbar() {
  return (
    <div className="nav-bar">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="blue.500"
        color="white"
      >
        <Box display="flex" alignItems="center">
          <Image src={Logo} alt="Logo" height="40px" marginRight="20px" />
        </Box>

        <Stack direction="row" spacing={8}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link> {/* Added Projects link */}
          <Link href="/contact">Contact</Link>
        </Stack>
      </Flex>
    </div>
  );
}

export default Navbar;
