import { useState } from "react";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Box,
} from "@chakra-ui/react";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:contactme@jenniedev.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      message
    )}%0D%0A%0D%0AFrom:%20${encodeURIComponent(email)}`;
    window.location.href = mailto;
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl isRequired>
            <FormLabel htmlFor="email">Your Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <Input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Send Email
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default ContactForm;
