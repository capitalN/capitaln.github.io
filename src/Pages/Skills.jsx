import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
  Image,
  Stack,
  Grid,
  background,
  Text,
} from "@chakra-ui/react";

import {
  SiHtml5,
  SiCss3,
  SiGithub,
  SiReact,
  SiChakraui,
  SiReactrouter,
  SiRedux,
  SiJavascript,
  SiNpm,
} from "react-icons/si";

export default function Skills() {
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
          <Heading mb={"20px"}>technical skills</Heading>
          <Grid gridTemplateColumns={"repeat(4,1fr)"} gap={"50px 80px"}>
            <Stack
              align="center"
              background={"gray.700"}
              p="10px"
              borderRadius={"10px"}
              w="120px"
              h="120px"
              color={"white"}
              justify="center"
            >
              <SiHtml5 size={"60px"} color="red" />
              <Text fontWeight={"bold"} mt="3">
                HTML
              </Text>
            </Stack>

            <Stack
              align="center"
              background={"gray.700"}
              p="10px"
              borderRadius={"10px"}
              w="120px"
              h="120px"
              color={"white"}
              justify="center"
            >
              <SiCss3 size={"60px"} color="blue" />
              <Text fontWeight={"bold"} mt="3">
                CSS
              </Text>
            </Stack>

            <Stack
              align="center"
              background={"gray.700"}
              p="10px"
              borderRadius={"10px"}
              w="120px"
              h="120px"
              color={"white"}
              justify="center"
            >
              <SiJavascript size={"60px"} color="orange" />
              <Text fontWeight={"bold"} mt="3">
                JavaScript
              </Text>
            </Stack>

            <Stack
              align="center"
              background={"gray.700"}
              p="10px"
              borderRadius={"10px"}
              w="120px"
              h="120px"
              color={"white"}
              justify="center"
            >
              <SiReact size={"60px"} color="#61dafd" />
              <Text fontWeight={"bold"} mt="3">
                React
              </Text>
            </Stack>

            <Stack
              align="center"
              background={"gray.700"}
              p="10px"
              borderRadius={"10px"}
              w="120px"
              h="120px"
              color={"white"}
              justify="center"
            >
              <SiChakraui size={"60px"} color="#81e6d9" />
              <Text fontWeight={"bold"} mt="3">
                ChakraUI
              </Text>
            </Stack>

            <Stack
              align="center"
              background={"gray.700"}
              p="10px"
              borderRadius={"10px"}
              w="120px"
              h="120px"
              color={"white"}
              justify="center"
            >
              <SiGithub size={"60px"} color="white" />
              <Text fontWeight={"bold"} mt="3">
                GitHub
              </Text>
            </Stack>

            <Stack
              align="center"
              background={"gray.700"}
              p="10px"
              borderRadius={"10px"}
              w="120px"
              h="120px"
              color={"white"}
              justify="center"
            >
              <SiReactrouter size={"60px"} color="red" />
              <Text fontWeight={"bold"} mt="3">
                ReactRouter
              </Text>
            </Stack>

            <Stack
              align="center"
              background={"gray.700"}
              p="10px"
              borderRadius={"10px"}
              w="120px"
              h="120px"
              color={"white"}
              justify="center"
            >
              <SiRedux size={"60px"} color="#764abc" />
              <Text fontWeight={"bold"} mt="3">
                Redux
              </Text>
            </Stack>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
}
