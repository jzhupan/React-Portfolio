import { Box, Image } from "@chakra-ui/react";
import styles from "./AnimatedBox.module.css"; // Update the path if necessary
import BoxNoEyes from "../assets/cat-animation/Box-no-eyes.webp";
import Eyes from "../assets/cat-animation/Eyes-only.webp";
import Snoozing from "../assets/cat-animation/Zzz.webp";

const AnimatedBox = () => {
  return (
    <Box className={styles.animationContainer}>
      <Image src={BoxNoEyes} alt="Box without eyes" />
      <Image src={Eyes} alt="Eyes only" className={styles.eyes} />
      <Image src={Snoozing} alt="Snoozing" className={styles.snooze} />
    </Box>
  );
};

export default AnimatedBox;
