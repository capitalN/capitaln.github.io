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
    desc: "this is an ai based content creating website buitd by me and my team of 4 during our construct week, and my contributions are ",
    direction: "row",
    contributions: ["navbar", "footer", "resource pages", "UI"],
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
    desc: "prepared meal order & delivery website build by myself i have created navbar, login, signup form, UI",
    direction: "row-reverse",
    contributions: ["navbar", "footer", "resource pages", "UI"],
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
    direction: "row",
    contributions: ["navbar", "footer", "resource pages", "UI"],
    techStack: [
      { color: "red", title: "HTML" },
      { color: "blue", title: "CSS" },
      { color: "yellow", title: "JavaScript" },
    ],
  },
];

export default function Projects() {
  return (
    <Box pb="30px">
      <Container maxW={"7xl"}>
        <Flex direction={"column"} align="center" justify={"center"}>
          <Flex gap="60px" direction="column">
            <Heading mt={"9vh"}>PROJECTS</Heading>
            {PROJECTS.map((project) => (
              <Flex
                key={project.title}
                direction={{ base: "column", lg: project.direction }}
                gap="20px"
                borderRadius={"40px"}
              >
                <Image
                  w={{ base: "100%", lg: "60%" }}
                  src={project.image}
                  alt="fdf"
                  borderRadius={"20px"}
                  boxShadow="2xl"
                  data-aos="fade-down"
                />

                <VStack
                  w={{ base: "100%", lg: "30%" }}
                  justify="space-around"
                  p="20px"
                >
                  <Stack>
                    <Heading size={"lg"}>{project.title}</Heading>
                    <Text>{project.desc}</Text>
                  </Stack>
                  <Stack>
                    <Text fontWeight={"bold"}>contributions</Text>
                    <HStack justify={"center"} flexWrap={"wrap"} gap="5px">
                      {project.contributions.map((el) => (
                        <Badge key={el}>{el}</Badge>
                      ))}
                    </HStack>
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
                  <Divider />
                  <HStack color={"gray.700"}>
                    <Link
                      href={project.link}
                      target="_blank"
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        borderRadius={"full"}
                        fontWeight="bold"
                        w="120px"
                        gap="1"
                      >
                        LIVE
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
                      <Button
                        borderRadius={"full"}
                        fontWeight="bold"
                        w="120px"
                        bg={"gray.700"}
                        color="white"
                        _hover={{ color: "gray.700", bg: "gray.200" }}
                        gap="1"
                      >
                        GITHUB
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
