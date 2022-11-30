import { Box, Container, Flex, Link, textDecoration } from "@chakra-ui/react";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import "./App.css";
import { useEffect, useState } from "react";

const LINKS = [
  { to: "#home", title: "home" },
  { to: "#about", title: "about" },
  { to: "#skills", title: "skills" },
  { to: "#projects", title: "projects" },
  { to: "#contact", title: "contact" },
];

function App() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <Box bg={"gray.100"} color="blue.600" textAlign={"center"} className="App">
      <Flex
        as={"header"}
        justify={"space-evenly"}
        position="fixed"
        w="100vw"
        h={16}
        align={"center"}
        bg="white"
        zIndex={10}
        id="navbar"
        transition={"top 0.3s"}
      >
        {LINKS.map((link) => (
          <Link fontWeight={"bold"} href={link.to} key={link.to}>
            {link.title}
          </Link>
        ))}
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
