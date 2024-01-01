import {
  Box,
  Heading,
  Text,
  // Link,
  Image,
  Button,
  Stack,
  Center,
  useColorModeValue,
  // HStack,
  // Icon,
} from "@chakra-ui/react";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1dCprh7jT6iAyIpJK7ewpCDDyGQrzDDPt/preview";
  const borderColor = useColorModeValue("purple.500", "pink.300");
  return (
    <div>
      <Stack spacing="4" width="full" mx="auto">
        <Box mx="auto" width="100%">
          <Heading size="mb" textTransform="uppercase" textAlign={"center"}>
            Early Career Summary:
          </Heading>
          <Box mx={"auto"} maxW={"80%"}>
            <Text pt="2" textAlign={"justify"} mb={2}>
              After several years in{" "}
              <strong>freelance illustration and graphic design</strong>, I made
              a decisive transition into the realm of programming, with a focus
              on <strong>front-end development</strong>. While I anticipated a
              smooth transition, the journey proved to be both challenging and
              invigorating, pushing me out of my comfort zone and onto a path of{" "}
              <strong>continuous growth and learning</strong>. In my commitment
              to this new career path, I have adopted a disciplined routine of
              daily <strong>GitHub commits</strong>. This practice goes beyond
              mere code submissions; it represents my dedication to consistent
              engagement in development work and my commitment to{" "}
              <strong>perpetual improvement</strong>. Additionally, I am
              constantly refining my front-end design skills. Leveraging my
              expertise in illustration and graphic design, my goal is to craft
              interfaces that are{" "}
              <strong>visually compelling, functional, and user-centric</strong>
              . Every step in this journey has been instrumental in sharpening
              my technical abilities and reaffirming my passion for evolving as
              a developer.
            </Text>
            <Heading
              size="mb"
              textTransform="uppercase"
              textAlign={"center"}
              m={"5px"}
            >
              Career Goal:
            </Heading>
            <Text pt="2" textAlign={"justify"} mb={2}>
              As an enthusiastic, self-taught{" "}
              <strong>
                Front-End Developer, Designer with a flair for Illustrator,
              </strong>{" "}
              I offer a unique fusion of creative talent and technical skills,
              cultivated through hands-on experience. My foray into technology
              is characterized by an unwavering dedication to mastering new
              skills and expanding my knowledge base. I am eager to collaborate
              with dynamic teams, confront complex challenges, and design
              functional, <strong>visually appealing websites</strong>. My
              primary objective is to deliver digital solutions that not only
              align with business objectives but also captivate and engage their
              target audience. I am committed to ensuring that each project I
              undertake surpasses expectations, thereby contributing meaningful
              and impactful work in the digital landscape.
            </Text>
          </Box>
        </Box>

        <Box mx="auto" textAlign="center" boxSize={"20%"} mb={2}>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            borderColor={borderColor}
          >
            <Heading mb={4} textAlign="center" size="sm">
              Resume Lost? Worry not!
            </Heading>

            <Button
              colorScheme="purple"
              onClick={() => window.open(resumeLink, "_blank")}
            >
              Resume
            </Button>
          </Box>
        </Box>
        <Center p={1} mt={4}>
          <Image
            boxSize={"20%"}
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTJ6dzMyNmt0aTczeXZvOGF3dTJqbmwybzB6ODM3YzZ3YmhyMHRjZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vpAekUNSgb0k0/giphy.gif"
          />
        </Center>
      </Stack>
    </div>
  );
};

export default About;
