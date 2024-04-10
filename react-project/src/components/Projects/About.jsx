import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Stack,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

const About = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1UM3la_EKzvNAaEylFQ84l_400_y483E7/preview";
  const borderColor = useColorModeValue("purple.500", "pink.300");
  return (
    <div>
      <Stack spacing="4" width="full" mx="auto">
        <Box mx="auto" width="100%">
          <Heading size="mb" textTransform="uppercase" textAlign={"center"}>
            About me:
          </Heading>
          <Box mx={"auto"} maxW={"80%"}>
            <Text pt="2" textAlign={"justify"} mb={2}>
              My name is Jennie Zhu Pan. I graduated with the Class of 2021 from
              CUNY New York City College of Technology, where I earned a BFA in
              Communication Design. There, I honed my skills in graphic design,
              front-end web development, and illustration, and have since been
              focusing on my visual design skills. Currently, I'm looking for
              job opportunities to further refine my abilities and expand my
              portfolio.
              <br />
              <br />
              My passion lies in bringing ideas to life through visual design
              and interactive media. I excel at creating art that tells a story
              or conveys an idea. Achieving a JavaScript Development
              Certification has further enhanced my coding skills, enabling me
              to effectively collaborate with both UX/UI Designers and backend
              developers. My design knowledge bridges communication gaps,
              facilitating seamless integration between design and development.
              I aim to innovate and deliver standout solutions in the realm of
              visual communication. With a strong foundation in both design and
              technology, I'm prepared to contribute to projects that engage
              audiences and leave a lasting impact.
            </Text>
            <Box mx="auto" textAlign="center" boxSize={"80%"} mb={3} p={5}>
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
                  width={{ base: "100%", sm: "auto" }}
                  fontSize={{ base: "xs", sm: "sm", md: "md" }}
                  colorScheme="purple"
                  onClick={() => window.open(resumeLink, "_blank")}
                >
                  Resume
                </Button>
              </Box>
            </Box>
            {/* <Heading
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
                Front-End Developer, Designer with a flair for Illustration,
              </strong>{" "}
              I offer a unique fusion of creative talent and technical skills,
              cultivated through hands-on experience. My take into technology is
              characterized by an unwavering dedication to mastering new skills
              and expanding my knowledge base. I am eager to collaborate with
              dynamic teams, confront complex challenges, and design functional,{" "}
              <strong>visually appealing websites</strong>. My primary objective
              is to deliver digital solutions that not only align with business
              objectives but also captivate and engage their target audience. I
              am committed to ensuring that each project I undertake surpasses
              expectations, thereby contributing meaningful and impactful work
              in the digital landscape.
            </Text> */}
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default About;
