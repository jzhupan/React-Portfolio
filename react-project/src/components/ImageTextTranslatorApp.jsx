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
import Project1 from "./Projects/Project1";

const ImageTextTranslatorApp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        mt={4}
        onClick={onOpen}
        w="100%"
        h="100%"
        className="modal-btn"
        bg="none"
        color="white"
        fontWeight="bold"
        fontSize="xl"
        _hover={{
          background: "none",
          color: "white",
        }}
        whiteSpace="normal"
      >
        ✦ Image to Text Translator App ✦
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered="true">
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(80deg)" />
        <ModalContent width="95%">
          <ModalHeader size="xs" textTransform="uppercase" textAlign={"center"}>
            Image to Text Translator App
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Project1 />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImageTextTranslatorApp;
