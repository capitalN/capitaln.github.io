import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  useDisclosure,
  Show,
  Hide,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  Text,
  DrawerFooter,
  Input,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Stack,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import "./App.css";
import React, { useEffect } from "react";
import { BiMenuAltRight, BiMenu } from "react-icons/bi";
import { HamburgerIcon } from "@chakra-ui/icons";

const LINKS = [
  { to: "#home", title: "HOME" },
  { to: "#about", title: "ABOUT" },
  { to: "#skills", title: "SKILLS" },
  { to: "#projects", title: "PROJECTS" },
  { to: "#contact", title: "CONTACT" },
];

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  var prevScrollpos = window.pageYOffset;

  // useEffect(() => {
  //   document.getElementById("navbar").style.top = "-52px";
  // });

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollpos) {
      document.getElementById("navbar").style.top = "-52px";
    } else {
      document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <Box>
      <Show above="sm">
        <Flex
          as={"header"}
          justify={"space-evenly"}
          position="fixed"
          w="100vw"
          h={"60px"}
          align={"center"}
          bg={"gray.700"}
          color="white"
          zIndex={10}
          id="navbar"
          transition={"top 0.3s"}
        >
          <Link href="#home" _hover={{ textDecoration: "none" }}>
            <Heading fontFamily={"mono"}>NIKHIL</Heading>
          </Link>
          <Flex justify={"space-evenly"} w="50%">
            {LINKS.map((link) => (
              <Link
                _hover={{ color: "orange" }}
                fontWeight={"bold"}
                href={link.to}
                key={link.to}
              >
                {link.title}
              </Link>
            ))}
          </Flex>
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
              w="120px"
            >
              RESUME
            </Button>
          </Link>
        </Flex>
      </Show>

      <Show below="sm">
        <HStack justify={"space-between"}>
          <Button
            position={"fixed"}
            right="4"
            top="4"
            ref={btnRef}
            onClick={onOpen}
            borderRadius={"full"}
            bg={"orange"}
            color="white"
            w="50px"
            h="50px"
            zIndex={"100"}
          >
            <HamburgerIcon fontSize={"20px"} fontWeight="bold" />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg={"gray.700"} color="white">
              <DrawerCloseButton />
              <Heading fontFamily={"mono"}>NIKHIL</Heading>
              <Divider />
              <DrawerBody>
                <Stack>
                  {LINKS.map((link) => (
                    <Link
                      _hover={{ color: "orange" }}
                      fontWeight={"bold"}
                      href={link.to}
                      key={link.to}
                      textAlign="left"
                    >
                      {link.title}
                    </Link>
                  ))}
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Show>

      <Box>
        <Box id="home" bg="gray.700" color={"white"}>
          <Home />
        </Box>
        <Box id="about">
          <About />
        </Box>
        <Box id="skills">
          <Skills />
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
      </Box>

      <Box
        w="100vw"
        justify="space-evenly"
        bg={"gray.700"}
        color="white"
        padding={"20px"}
      >
        <Heading>nikhil angolkar</Heading>
        <Link>angolkarnikhil@gmail.com</Link>
      </Box>
    </Box>
  );
}

export default App;
