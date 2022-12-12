import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
  Stack,
  Image,
  Text,
  Link,
  Input,
  FormControl,
  FormLabel,
  HStack,
  VStack,
  Textarea,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box
      backgroundImage={"people.svg"}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Container maxW={"7xl"}>
        <Flex
          direction={"column"}
          h={{ lg: "100vh" }}
          align="center"
          justify="center"
          p="20px"
        >
          <Flex
            border={"2px solid"}
            p="30px"
            gap={"20px"}
            align="top"
            bg={"gray.700"}
            borderRadius={"10px"}
            boxShadow={"2xl"}
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
          >
            <VStack justify={"space-between"}>
              <VStack color="gray.100" align="left">
                <Heading>contact</Heading>
                <Box>
                  <Text>phone</Text>
                  <Link fontWeight={"bold"}>+91 7795 334086</Link>
                </Box>
                <Box>
                  <Text>email</Text>
                  <Link
                    href="mailto:angolkarnikhil@gmail.com"
                    fontWeight={"bold"}
                  >
                    angolkarnikhil@gmail.com
                  </Link>
                </Box>
                <Box>
                  <Text>address</Text>
                  <Text fontWeight={"bold"}>Belgaum, Karnataka</Text>
                </Box>
              </VStack>

              <HStack>
                <Link href="https://github.com/capitalN">
                  <Button borderRadius={"full"}>Github</Button>
                </Link>
                <Link href="https://www.linkedin.com/in/nikhil-angolkar-62722a19b/">
                  <Button borderRadius={"full"}>LinkedIn</Button>
                </Link>
              </HStack>
            </VStack>

            <VStack
              background="white"
              p={"20px"}
              boxShadow="2xl"
              borderRadius={"10px"}
            >
              <Text fontWeight={"bold"} m="10px 20px">
                fill up the form to contact
              </Text>
              <Input type={"text"} placeholder="your name" />
              <Input type={"email"} placeholder="mail@email.com" />
              <Textarea placeholder="type here..." />
              <Button
                borderRadius={"full"}
                bg={"orange"}
                color="white"
                _hover={{ bg: "gray.700" }}
              >
                Send Message
              </Button>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
