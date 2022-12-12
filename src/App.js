import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import "./App.css";

const LINKS = [
  { to: "#home", title: "home" },
  { to: "#about", title: "about" },
  { to: "#skills", title: "skills" },
  { to: "#projects", title: "projects" },
  { to: "#contact", title: "contact" },
];

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  /*
  var prevScrollpos = window.pageYOffset;

  useEffect(() => {
    document.getElementById("navbar").style.top = "-52px";
  }, []);

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
      document.getElementById("navbar").style.top = "-52px";
    } else if (0 < currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
  };
  */

  return (
    <Box>
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
        <Heading fontFamily={"mono"}>NIKHIL</Heading>
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

      <Box>
        <Box id="home">
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
