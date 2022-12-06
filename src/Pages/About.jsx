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
          border={"1px solid"}
          justify={"center"}
          color="white"
        >
          <Flex
            m={"10%"}
            p="30px"
            gap={"40px"}
            align="top"
            bg={"gray.700"}
            borderRadius={"10px"}
            // direction="column"
          >
            <VStack
              p={"20px"}
              boxShadow={"2xl"}
              borderRadius={"10px"}
              justify={"space-evenly"}
            >
              <Image
                src="https://avatars.githubusercontent.com/u/107465553?v=4"
                alt="nikhil angolkar"
                borderRadius={"full"}
                width="70%"
                mb="20px"
                boxShadow={"2xl"}
              />
              <Divider />
              <Box fontFamily={"mono"}>
                <Text fontWeight={"bold"} fontSize="2xl">
                  NIKHIL ANGOLKAR
                </Text>
                <Text fontWeight={"bold"}>full-stack web-developer</Text>
                {/* <Text>code | dsa | more</Text> */}
              </Box>
            </VStack>
            <VStack
              maxW={"600px"}
              color={"white"}
              justifyContent={"center"}
              gap="15px"
            >
              <Heading>about me</Heading>

              <Text fontWeight={"bold"} fontSize="md">
                " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis soluta est quas tempore beatae corrupti vel tenetur
                deserunt laudantium, reprehenderit odit repudiandae rem quos
                natus laboriosam optio voluptatum commodi labore "
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
                  _hover={{ bg: "white", color: "gray.700" }}
                  fontWeight="bold"
                >
                  RESUME
                </Button>
              </Link>
              <HStack color={"gray.700"}>
                <Button borderRadius={"full"}>G</Button>
                <Button borderRadius={"full"}>G</Button>
                <Button borderRadius={"full"}>G</Button>
              </HStack>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
