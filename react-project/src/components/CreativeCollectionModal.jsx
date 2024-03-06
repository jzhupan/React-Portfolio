import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Box,
} from "@chakra-ui/react";

const CreativeCollectionModal = () => {
  const githubLink = "https://github.com/jzhupan/tech-jobs";
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
        ✦ Job Board Collaboration (WIP) ✦
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered="true">
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(80deg)" />
        <ModalContent width="95%">
          <ModalHeader size="xs" textTransform="uppercase" textAlign={"center"}>
            Company jobs compilation App
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mx="auto" textAlign="center" boxSize={"80%"} mb={3} p={5}>
              <Text>
                <strong>Overview:</strong>
                <br />
                I'm involved in a team project where I take on the role of a
                Maintainer. Currently, I'm working on the front-end, utilizing
                mock-up data from our backend team. We've managed to get a Table
                filled with this mock-up data up and running. If you're
                interested, feel free to check out our work on the GitHub
                repository. Your feedback would be appreciated!
              </Text>
              <br />
              <Button
                width={{ base: "100%", sm: "auto" }}
                fontSize={{ base: "xs", sm: "sm", md: "md" }}
                colorScheme="purple"
                onClick={() => window.open(githubLink, "_blank")}
              >
                Repository
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreativeCollectionModal;
