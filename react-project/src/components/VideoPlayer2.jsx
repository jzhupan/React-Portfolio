import { useRef } from "react";
import { Box, IconButton, useBoolean, Flex } from "@chakra-ui/react";
import { FiPlay, FiPause, FiMaximize2 } from "react-icons/fi";
import video from "../assets/project-img/financial-pulse-demo.webm";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useBoolean();
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying.toggle();
    }
  };

  const expandVideo = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="100%">
      <Box position="relative" boxSize={"95%"} mx="auto" mb={2}>
        <video
          ref={videoRef}
          src={video}
          alt="Demo video of Image to Text Translator App"
          loop
          muted
          style={{ width: "100%", height: "auto" }} // maintain aspect ratio
        />

        <Box position="absolute" bottom="5" left="5">
          <IconButton
            icon={isPlaying ? <FiPause /> : <FiPlay />}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          />
          <IconButton
            icon={<FiMaximize2 />}
            onClick={expandVideo}
            aria-label="Expand"
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default VideoPlayer;
