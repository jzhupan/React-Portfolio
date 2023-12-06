import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import staticCatBody from "../assets/cat-animation/Cat-tail-static.webp";
import tailSrc from "../assets/cat-animation/Cat-tail-animated.gif";

const CatAnimation = () => {
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
        src={staticCatBody}
        alt="Cat Body"
        style={{
          display: hover ? "none" : "block",
          width: "100%",
          height: "auto",
        }}
      />
      <Image
        src={tailSrc}
        alt="Cat Tail"
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

export default CatAnimation;
