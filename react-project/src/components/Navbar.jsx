/* eslint-disable react/prop-types */
import { Box, Flex, Link, Stack, Image } from "@chakra-ui/react";
import Logo from "../assets/logos-icon-btns/jzp-white-logo.png";

function Navbar({ toggleTheme, currentTheme }) {
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
        <Box display="flex" alignItems="left">
          <Image src={Logo} alt="Logo" height="40px" marginRight="20px" />
        </Box>

        <Stack direction="row" spacing={8}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <button className="toggle-btn" onClick={toggleTheme}>
            {currentTheme ? "Light" : "Dark"}
          </button>
        </Stack>
      </Flex>
    </div>
  );
}

export default Navbar;
