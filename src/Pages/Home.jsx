import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
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
          <Image src="code.svg" w={{ base: "80%", sm: "50%" }} />
          <Heading size={"4xl"} fontSize={"54px"}>
            NIKHIL ANGOLKAR
          </Heading>
          <Heading>full stack web developer</Heading>
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
              _hover={{ bg: "white", color: "black" }}
              fontWeight="bold"
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
