import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const CustomModal = ({ isOpen, onClose, modalContent, modalHeader }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent height="95%" maxW="80%" margin={1} overflowY={"auto"}>
        <ModalHeader
          size="lg"
          fontSize={24}
          fontWeight="bold"
          marginTop={3}
          paddingBottom={-5}
          textAlign="center"
        >
          {modalHeader}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{modalContent}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  modalContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  modalHeader: PropTypes.string.isRequired,
};

export default CustomModal;
