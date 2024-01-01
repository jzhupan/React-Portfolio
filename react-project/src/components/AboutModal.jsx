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
import About from "./About";

const AboutModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        About
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered="true">
        <ModalOverlay />
        <ModalContent width="95%">
          <ModalHeader size="xs" textTransform="uppercase" textAlign={"center"}>
            Art Meets Code: Jennie's Creative Coding Odyssey
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <About />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutModal;
