import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Container maxW={"7xl"}>
        <Flex
          direction={"column"}
          h="100vh"
          align="center"
          justify="center"
          gap="20px"
          maxW={"3xl"}
          margin="auto"
        >
          <Image src="code.svg" w={"50%"} />
          <Heading size={"4xl"}>nikhil angolkar</Heading>
          <Heading>full stack web developer</Heading>
          <Text textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ducimus ut voluptate vero autem velit, voluptatum illum aliquid
            quaerat nostrum, numquam quam asperiores eaque deserunt. Illo
            tempora in cum? Obcaecati.
          </Text>
          <Button bg="orange" color={"white"} borderRadius="full">
            RESUME
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
