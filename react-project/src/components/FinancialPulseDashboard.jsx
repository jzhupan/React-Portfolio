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
import Project2 from "./Project2";

const FinancialPulseDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        Financial Dashboard
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered="true">
        <ModalOverlay />
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
