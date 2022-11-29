import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", title: "home" },
  //   { to: "/about", title: "about" },
  { to: "/skills", title: "skills" },
  { to: "/projects", title: "projects" },
  { to: "/contact", title: "contact" },
];

export default function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let style = {
    textDecoration: "none",
  };

  return (
    <Flex justify={"space-evenly"} position="fixed" w="100vw">
      {LINKS.map((link) => (
        <NavLink
          key={link.title}
          to={link.to}
          style={({ isActive }) => (isActive ? activeStyle : style)}
          end
        >
          <Text fontWeight={"bold"}>{link.title}</Text>
        </NavLink>
      ))}
    </Flex>
  );
}
