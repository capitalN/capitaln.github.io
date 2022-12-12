import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  Link,
  HStack,
  VStack,
  Divider,
  Badge,
} from "@chakra-ui/react";

import { SiGithub, SiNetlify } from "react-icons/si";
import { useEffect } from "react";
import { GetStaticProps } from "./Api";

const PROJECTS = [
  {
    title: "lately.ai",
    link: "https://dulcet-marigold-6dca17.netlify.app/",
    image: "lately.png",
    github: "https://github.com/capitalN/lately.ai",
    desc: "ai based content creating website",
    techStack: [
      { color: "red", title: "HTML" },
      { color: "blue", title: "CSS" },
      { color: "yellow", title: "JavaScript" },
    ],
  },
  {
    title: "freshly.com",
    link: "https://freshlyfw200091.netlify.app/index.html",
    image: "freshly.png",
    github: "https://github.com/capitalN/freshly",
    desc: "prepared meal order & delivery website",
    techStack: [
      { color: "red", title: "HTML" },
      { color: "blue", title: "CSS" },
      { color: "yellow", title: "JavaScript" },
    ],
  },
  {
    title: "youtube.com",
    link: "https://app.netlify.com/sites/tubular-pudding-02ae88/overview",
    image: "lately.png",
    image: "youtube.png",
    desc: "video creating and sharing website",
    techStack: [
      { color: "red", title: "HTML" },
      { color: "blue", title: "CSS" },
      { color: "yellow", title: "JavaScript" },
    ],
  },
];

export default function Projects() {
  // useEffect(() => {
  //   GetStaticProps().then((res) => console.log(res));
  // }, []);

  return (
    <Box pb="30px">
      <Container maxW={"7xl"}>
        <Flex direction={"column"} align="center" justify={"center"}>
          <Flex gap="30px" direction="column">
            <Heading mt={"8vh"}>projects</Heading>
            {PROJECTS.map((project) => (
              <Flex
                key={project.title}
                bg={"gray.700"}
                color="white"
                direction={{ base: "column", lg: "row" }}
                p="20px"
                borderRadius={"40px"}
              >
                <Image
                  w={{ base: "100%", lg: "60%" }}
                  src={project.image}
                  alt="fdf"
                  borderRadius={"20px"}
                />

                <VStack
                  w={{ base: "100%", lg: "40%" }}
                  justify="space-around"
                  p="20px"
                >
                  <Stack>
                    <Heading>{project.title}</Heading>
                    <Text>{project.desc}</Text>
                  </Stack>
                  <Stack>
                    <Text fontWeight={"bold"}>tech-stack</Text>
                    <HStack justify={"center"}>
                      {project.techStack.map((el) => (
                        <Badge key={el.title} colorScheme={el.color}>
                          {el.title}
                        </Badge>
                      ))}
                    </HStack>
                  </Stack>

                  <HStack color={"gray.700"}>
                    <Link
                      href={project.link}
                      target="_blank"
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Button borderRadius={"full"} fontWeight="bold" w="120px">
                        Live.
                        <SiNetlify />
                      </Button>
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Button borderRadius={"full"} fontWeight="bold" w="120px">
                        GitHub.
                        <SiGithub />
                      </Button>
                    </Link>
                  </HStack>
                </VStack>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

<Link
  href="https://drive.google.com/file/d/1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg/view?usp=share_link"
  target="_blank"
  _hover={{
    textDecoration: "none",
  }}
>
  <Button
    borderRadius={"full"}
    bg={"orange"}
    color="white"
    _hover={{ bg: "gray.700" }}
    fontWeight="bold"
  >
    RESUME
  </Button>
</Link>;
