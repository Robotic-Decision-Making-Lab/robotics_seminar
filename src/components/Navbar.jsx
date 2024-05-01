"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

function NavLink({ link }) {
  const location = useLocation();
  const isActive = link.dest === location.pathname;

  const backgroundColor = useColorModeValue("osu.white");
  const inactiveTextColor = useColorModeValue("greyscale.700");
  const activeTextColor = useColorModeValue("greyscale.900");

  return (
    <RouterLink to={link.dest}>
      <Button
        bg={backgroundColor}
        textColor={isActive ? activeTextColor : inactiveTextColor}
        fontWeight={isActive ? 500 : 400}
        _hover={{
          color: activeTextColor,
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease-in-out",
        }}
        _active={{
          bg: backgroundColor,
        }}
        fontSize={{
          base: "calc(16px + 4 * ((100vw - 320px) / (680)))",
          md: "1.25rem",
        }}
        marginLeft={{ base: "3vw" }}
        padding={0}
      >
        {link.title}
      </Button>
    </RouterLink>
  );
}

function MenuLinks() {
  const Links = [
    { title: "Schedule", dest: "/" },
    { title: "Archive", dest: "/archive" },
  ];

  return (
    <Box>
      <HStack spacing={8} alignItems="center">
        <HStack as="nav">
          {Links.map((link) => (
            <NavLink key={link.title} link={link} />
          ))}
        </HStack>
      </HStack>
    </Box>
  );
}

export default function Navbar() {
  return (
    <Box
      bg={useColorModeValue("grayscale.50")}
      marginTop={{ base: "3vh", md: "7vh" }}
      marginBottom={{ base: "1vh", md: "5vh" }}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <RouterLink to="/">
          <Flex alignItems="center">
            <Text
              fontSize={{
                base: "calc(18px + 18 * ((100vw - 320px) / (680)))",
                lg: "2.3rem",
              }}
              fontWeight={500}
              display={{ base: "flex" }}
              textColor={useColorModeValue("osu.orange")}
            >
              {useBreakpointValue({ base: "Seminar", md: "Robotics Seminar" })}
            </Text>
          </Flex>
        </RouterLink>
        <MenuLinks />
      </Flex>
    </Box>
  );
}
