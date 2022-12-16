import React from "react";
import {
  Box,
  Heading,
  Container,
  Button,
  Flex,
  HStack,
  VStack,
  Textarea,
  Text,
  Input,
  Image,
  Stack,
  Divider,
  color,
  Link,
} from "@chakra-ui/react";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function About() {
  return (
    <Box>
      <Container maxW={"7xl"}>
        <Flex
          direction={"column"}
          h="100vh"
          align="center"
          justify={"center"}
          textAlign="center"
        >
          <Flex
            m={"10px"}
            p="30px"
            gap={"20px"}
            align="top"
            borderRadius={"10px"}
            direction={{ base: "column", md: "column", lg: "row" }}
            boxShadow={"2xl"}
          >
            <VStack
              p={"30px"}
              borderRadius={"10px"}
              justify={"space-evenly"}
              bg="gray.700"
              color={"white"}
            >
              <Image
                src="https://avatars.githubusercontent.com/u/107465553?v=4"
                alt="nikhil angolkar"
                borderRadius={"10px"}
                mb="20px"
              />
              <Divider />
              <Box fontFamily={"mono"}>
                <Text fontWeight={"bold"}>NIKHIL ANGOLKAR</Text>
                <Text>full-stack web-developer</Text>
              </Box>
            </VStack>
            <VStack justifyContent={"center"} gap="15px">
              <Heading>ABOUT</Heading>

              <Text fontWeight={"bold"} fontSize="md" w={{ lg: "80%" }}>
                " An ambitious and self-motivated full-stack web developer with
                considerable technical skills who possesses self-discipline and
                the ability to work with a minimum of supervision. "
              </Text>
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
                  w="120px"
                >
                  RESUME
                </Button>
              </Link>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
