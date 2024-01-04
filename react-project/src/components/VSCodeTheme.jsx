import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Project3 from "./Projects/Project3";

const VSCodeTheme = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        mt={4}
        onClick={onOpen}
        w={["95%", "90%", "85%", "80%"]}
        whiteSpace="normal"
      >
        Visual Studio Code Theme
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered="true">
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(80deg)" />
        <ModalContent width="95%">
          <ModalHeader size="xs" textTransform="uppercase" textAlign={"center"}>
            Visual Studio Code Theme
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Project3 />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VSCodeTheme;
