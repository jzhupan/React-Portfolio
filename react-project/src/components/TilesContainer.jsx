import { Box, Button } from "@chakra-ui/react";

const TilesContainer = () => {
  return (
    <>
      <Box className="tiles-container">
        <ul className="ul-tiles">
          <li className="li-tiles">Project 1</li>
          <li className="li-tiles">Project 2</li>
          <li className="animation-tile">Animation placeholder</li>
          <li className="li-tiles">About</li>
          <li className="animation-tile">Animation Placeholder</li>
          <li className="coming-soon-tile">Coming Soon</li>
          <li className="coming-soon-tile">Coming soon</li>
          <li className="li-tiles">Contact</li>
        </ul>
      </Box>
    </>
  );
};

export default TilesContainer;
