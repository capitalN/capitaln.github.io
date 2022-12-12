import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
  Text,
  Image,
  Link,
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
          <Link
            href="https://drive.google.com/file/d/1GtZiQIVtAi8ap6WSe38hKNHeB_c4T4eg/view?usp=share_link"
            target="_blank"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Button
              fontWeight={"bold"}
              bg="orange"
              color={"white"}
              borderRadius="full"
              _hover={{ bg: "gray.700" }}
              w="120px"
            >
              RESUME
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
