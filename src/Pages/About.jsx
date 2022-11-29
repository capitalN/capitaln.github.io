import React from "react";
import { Box, Heading, Container, Button, Flex } from "@chakra-ui/react";

export default function About() {
  return (
    <Box>
      <Container maxW={"7xl"}>
        <Flex
          direction={"column"}
          h="100vh"
          align="center"
          gap="20px"
          border={"1px solid"}
          p="20px"
          justify={"center"}
        >
          <Heading>about</Heading>
        </Flex>
      </Container>
    </Box>
  );
}
