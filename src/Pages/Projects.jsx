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
} from "@chakra-ui/react";

import { SiGithub, SiNetlify } from "react-icons/si";

const SKILLS = [{ title: "lately" }, { title: "freshly" }, { title: "tools" }];

export default function Projects() {
  return (
    <Box>
      <Container maxW={"7xl"}>
        <Flex
          direction={"column"}
          h="100vh"
          align="center"
          gap="50px"
          border={"1px solid"}
          justify={"center"}
        >
          <Heading>projects</Heading>
          <Flex gap={10}>
            {SKILLS.map((skill) => (
              <Stack
                key={skill.title}
                h="320px"
                w="300px"
                bg={"white"}
                justifyContent="space-evenly"
                borderRadius={"50px"}
              >
                <Heading size={"md"}>{skill.title}</Heading>

                <a
                  href="https://dulcet-marigold-6dca17.netlify.app/"
                  target="_blank"
                >
                  <Image
                    _hover={{
                      boxShadow: "2xl",
                      transform: "scale(1.04)",
                      transition: "0.5s",
                    }}
                    src="https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba503872080311dde1ea56_long-form-landing-page-examples.png"
                    alt="fdf"
                  />
                </a>
                <Text>ai based content creating website</Text>
                <Flex justifyContent={"space-evenly"}>
                  <a
                    href="https://course.masaischool.com/messages/39864"
                    target="_blank"
                  >
                    <SiGithub color="purple" size={"30px"} />
                  </a>
                </Flex>
              </Stack>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
