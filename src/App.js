import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  textDecoration,
  VStack,
} from "@chakra-ui/react";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import "./App.css";
import { Show, Hide } from "@chakra-ui/react";
import { useEffect } from "react";

const LINKS = [
  { to: "#home", title: "home" },
  { to: "#about", title: "about" },
  { to: "#skills", title: "skills" },
  { to: "#projects", title: "projects" },
  { to: "#contact", title: "contact" },
];

function App() {
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

  return (
    <Box>
      <Flex
        as={"header"}
        justify={"space-evenly"}
        position="fixed"
        w="100vw"
        h={"50px"}
        align={"center"}
        bg={"gray.700"}
        color="white"
        zIndex={10}
        id="navbar"
        transition={"top 0.3s"}
      >
        <Heading fontFamily={"mono"}>NIKHIL</Heading>
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
      </Flex>

      <Box>
        <Box id="home">
          <Home />
          <Divider />
        </Box>
        <Box id="about">
          <About />
          <Divider />
        </Box>
        <Box id="skills">
          <Skills />
          <Divider />
        </Box>
        <Box id="projects">
          <Projects />
          <Divider />
        </Box>
        <Box id="contact">
          <Contact />
          <Divider />
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

/*
<Navbar />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
*/
