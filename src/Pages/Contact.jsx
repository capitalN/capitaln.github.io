import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
  Text,
  Link,
  Input,
  HStack,
  VStack,
  Textarea,
} from "@chakra-ui/react";

import { SiGithub, SiLinkedin, SiGmail, SiMinutemailer } from "react-icons/si";

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
              <VStack color="gray.100">
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

              <HStack gap={"10px"}>
                <Link href="https://github.com/capitalN">
                  <SiGithub color="white" size="30px" />
                </Link>
                <Link href="https://www.linkedin.com/in/nikhil-angolkar-62722a19b/">
                  <SiLinkedin color="white" size="30px" />
                </Link>
                <Link href="mailto:angolkarnikhil@gmail.com">
                  <SiGmail color="white" size="30px" />
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
              <Input type={"text"} placeholder="your name" textAlign={"left"} />
              <Input
                type={"email"}
                placeholder="your email"
                textAlign={"left"}
              />
              <Textarea placeholder="type here..." textAlign={"left"} />
              <Button
                borderRadius={"full"}
                bg={"orange"}
                color="white"
                _hover={{ bg: "gray.700" }}
                fontWeight="bold"
                w="120px"
              >
                SEND
              </Button>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
