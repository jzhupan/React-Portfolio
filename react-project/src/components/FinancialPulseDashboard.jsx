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
import Project2 from "./Projects/Project2";

const FinancialPulseDashboard = () => {
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
        ✦ Financial Dashboard ✦
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered="true">
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(80deg)" />
        <ModalContent width="95%">
          <ModalHeader size="xs" textTransform="uppercase" textAlign={"center"}>
            Financial Pulse Dashboard
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Project2 />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FinancialPulseDashboard;
