import React from "react";
import { Box, Heading, Container, Button, Flex } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box>
      <Container maxW={"7xl"}>
        <Flex
          direction={"column"}
          h="100vh"
          align="center"
          justify="center"
          gap="20px"
          border={"1px solid"}
          p="20px"
        >
          <Heading>contact</Heading>
        </Flex>
      </Container>
    </Box>
  );
}
