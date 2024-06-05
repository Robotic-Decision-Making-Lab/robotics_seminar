import { Flex } from "@chakra-ui/react";
import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

function Page({ children }) {
  return (
    <Flex
      w={{ base: "80%", md: "65%" }}
      flexDirection="column"
      margin="0 auto"
      minHeight="100vh"
    >
      <Navbar />
      <Flex flexDirection="column" marginBottom="2vh" marginTop="3vh">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Page;
