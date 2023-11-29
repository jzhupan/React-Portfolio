import { Box } from "@chakra-ui/react";
import ReturnFocus from "./Modals/ReturnFocus";

const TilesContainer = () => {
  return (
    <>
      <Box className="tiles-container">
        <ul className="ul-tiles">
          <li className="li-tiles" id="li-contact">
            Project 1 <ReturnFocus />
          </li>
          <li className="li-tiles" id="li-contact">
            Project 2
          </li>
          <li className="animation-tile">Animation placeholder</li>
          <li className="li-tiles" id="li-contact">
            About
          </li>
          <li className="animation-tile">Animation Placeholder</li>
          <li className="coming-soon-tile">Coming Soon</li>
          <li className="coming-soon-tile">Coming soon</li>
          <li className="li-tiles" id="li-contact">
            Contact
          </li>
        </ul>
      </Box>
    </>
  );
};

export default TilesContainer;
