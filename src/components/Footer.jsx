import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/images/osu.png";

function Footer() {
  return (
    <Flex marginBottom="4vh" justifyContent="center">
      <a href="https://oregonstate.edu/">
        <Image
          src={logo}
          alt="OSU Logo"
          maxW={{ base: "7em", md: "10em" }}
          maxH={{ base: "7em", md: "10em" }}
        />
      </a>
    </Flex>
  );
}

export default Footer;
