import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import staticImage from "/src/assets/cat-animation/Box-no-eyes.webp";
import animatedGif from "/src/assets/cat-animation/Animated box.gif";

const AnimatedBox = () => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      position="relative"
      width="200px"
      height="200px"
    >
      <Image
        src={staticImage}
        alt="Static"
        style={{
          display: hover ? "none" : "block",
          width: "100%",
          height: "auto",
        }}
      />
      <Image
        src={animatedGif}
        alt="Animated"
        style={{
          display: hover ? "block" : "none",
          width: "100%",
          height: "auto",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </Box>
  );
};

export default AnimatedBox;
