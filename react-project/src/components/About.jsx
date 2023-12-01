import {
  Box,
  Heading,
  Text,
  Link,
  Button,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  const resumeLink =
    "https://drive.google.com/file/d/1XHntpzmtXEWaOoaQ0G2fdzZe5QmJFea0/preview";

  return (
    <VStack spacing={4} align="center">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" m="5">
        <Heading mb={4} textAlign="center" size="md">
          Early Career Summary:
        </Heading>
        <Text fontSize="md">
          After several years in freelance illustration and graphic design, I
          made a decisive transition into the realm of programming, with a focus
          on front-end development. While I anticipated a smooth transition, the
          journey proved to be both challenging and invigorating, pushing me out
          of my comfort zone and onto a path of continuous growth and learning.
          In my commitment to this new career path, I have adopted a disciplined
          routine of daily GitHub commits. This practice goes beyond mere code
          submissions; it represents my dedication to consistent engagement in
          development work and my commitment to perpetual improvement.
          Additionally, I am constantly refining my front-end design skills.
          Leveraging my expertise in illustration and graphic design, my goal is
          to craft interfaces that are visually compelling, functional, and
          user-centric. Every step in this journey has been instrumental in
          sharpening my technical abilities and reaffirming my passion for
          evolving as a developer.
        </Text>
        <Heading mb={4} textAlign="center" size="md">
          Career Goal:
        </Heading>
        <Text fontSize="md">
          As an enthusiastic, self-taught Front-End Developer, Designer, and
          Illustrator, I offer a unique fusion of creative talent and technical
          acumen, cultivated through hands-on experience. My foray into
          technology is characterized by an unwavering dedication to mastering
          new skills and expanding my knowledge base. I am eager to collaborate
          with dynamic teams, confront complex challenges, and design
          functional, visually appealing websites. My primary objective is to
          deliver digital solutions that not only align with business objectives
          but also captivate and engage their target audience. I am committed to
          ensuring that each project I undertake surpasses expectations, thereby
          contributing meaningful and impactful work in the digital landscape.
        </Text>
      </Box>

      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading mb={4} textAlign="center" size="md">
          Connect with Me
        </Heading>
        <HStack spacing={4} justifyContent="center" width="100%">
          {/* Replace these links with your own social media profiles */}
          <Link href="https://www.linkedin.com/in/jenniezp/" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
          <Link href="https://github.com/jzhupan" isExternal>
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
          <Button
            colorScheme="pink"
            onClick={() => window.open(resumeLink, "_blank")}
          >
            View My Resume
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}

export default About;
