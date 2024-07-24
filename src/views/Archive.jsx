import { Flex } from "@chakra-ui/react";
import React from "react";

import Page from "../components/Page";
import Speakers from "../components/Speakers";
import { Winter2024Speakers } from "../speakers/Winter2024";
import { Fall2023Speakers } from "../speakers/Fall2023";
import { Spring2024Speakers } from "../speakers/Spring2024";

function Archive() {
  return (
    <Page>
      <Flex w="100%" flexDirection="column" margin="0 auto" marginTop="-10px">
        <Speakers title="Spring 2024 Schedule" list={Spring2024Speakers} />
        <Speakers title="Winter 2024 Schedule" list={Winter2024Speakers} />
        <Speakers title="Fall 2023 Schedule" list={Fall2023Speakers} />
      </Flex>
    </Page>
  );
}

export default Archive;
