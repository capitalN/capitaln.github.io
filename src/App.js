import { Box, Flex, Heading, Link, textDecoration } from "@chakra-ui/react";

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
    <Box color={"gray.700"} bg="white" textAlign={"center"} className="App">
      <Flex
        as={"header"}
        justify={"space-evenly"}
        position="fixed"
        w="100vw"
        h={"50px"}
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
