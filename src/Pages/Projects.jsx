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
} from "@chakra-ui/react";

import { SiGithub, SiNetlify } from "react-icons/si";

const PROJECTS = [
  {
    title: "lately",
    link: "https://dulcet-marigold-6dca17.netlify.app/",
    image: "lately.png",
    github: "https://github.com/capitalN/lately.ai",
    desc: "ai based content creating website made by me & my team",
  },
  {
    title: "freshly",
    link: "https://freshlyfw200091.netlify.app/index.html",
    image: "freshly.png",
    github: "https://github.com/capitalN/freshly",
    desc: "Prepared meal order & delivery website",
  },
  {
    title: "youtube",
    link: "https://app.netlify.com/sites/tubular-pudding-02ae88/overview",
    image: "lately.png",
    image: "youtube.png",
    desc: "video creating and sharing website",
  },
];

export default function Projects() {
  return (
    <Box>
      <Container maxW={"7xl"}>
        <Flex direction={"column"} align="center" justify={"center"}>
          <Flex gap="30px" direction="column">
            <Heading>projects</Heading>
            {PROJECTS.map((project) => (
              <Flex
                key={project.title}
                bg={"gray.700"}
                color="white"
                direction={{ base: "column", lg: "row" }}
                p="40px"
                borderRadius={"40px"}
              >
                <Image
                  w={{ base: "100%", lg: "60%" }}
                  src={project.image}
                  alt="fdf"
                  borderRadius={"20px"}
                  border="10px solid white"
                />

                <VStack
                  w={{ base: "100%", lg: "40%" }}
                  justify="center"
                  p="20px"
                >
                  <Heading>{project.title}</Heading>
                  <Text>{project.desc}</Text>
                  <Text fontWeight={"bold"}>Tech Stack</Text>
                  <Text>Html | css | JavaScript</Text>

                  <HStack color={"gray.700"}>
                    <Link href={project.link}>
                      <Button borderRadius={"full"}>Live</Button>
                    </Link>
                    <Link href={project.github}>
                      <Button borderRadius={"full"}>GitHub</Button>
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
