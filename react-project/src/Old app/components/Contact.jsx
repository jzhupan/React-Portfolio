import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Message:", message');
  };

  return (
    <div className="pages-container">
      <form className="contact-box" onSubmit={handleSubmit}>
        <h3>Contact form</h3>
        <p>For real inquiries, email to: contactme@jenniedev.com</p>
        <FormLabel>First name:</FormLabel>
        <Input placeholder="First name" />
        <FormControl isInvalid={isError}>
          <FormLabel>Email:</FormLabel>
          <Input type="email" value={input} onChange={handleInputChange} />
          {!isError ? (
            <FormHelperText size="xs">
              Enter an email if you would like to receive an answer.
            </FormHelperText>
          ) : (
            <FormErrorMessage size="xs">Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormLabel>Message:</FormLabel>
        <Textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          size="md"
        />
        <Button colorScheme="blue" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
