import { Link, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import Page from "../components/Page";
import Speakers from "../components/Speakers";
import { Fall2024Speakers } from "../speakers/Fall2024";

function ResponsiveText({ children, textColor = "#000000" }) {
  return (
    <Text
      fontSize={{
        base: "calc(16px + 6 * ((100vw - 320px) / (680)))",
        md: "1.2rem",
      }}
      lineHeight={{
        base: "24px",
        md: "32px",
      }}
      marginBottom={{
        base: "24px",
        md: "30px",
      }}
      textColor={textColor}
    >
      {children}
    </Text>
  );
}

function Home() {
  return (
    <Page>
      <Flex w="100%" flexDirection="column" margin="0 auto">
        <ResponsiveText>
          The Robotics Seminar Series hosted by the Oregon State University{" "}
          <Link
            color={useColorModeValue("osu.orange")}
            href="https://engineering.oregonstate.edu/CoRIS"
            _hover={{
              color: useColorModeValue("osu.darkOrange"),
            }}
            textDecoration="underline"
            isExternal
          >
            Collaborative Robotics and Intelligent Systems Institute
          </Link>{" "}
          features talks from both invited and internal speakers on a variety of
          robotics topics, such as human-robot interaction, field robotics,
          mechanical design, and machine learning. The seminar is held on{" "}
          <Text
            fontSize={{
              base: "calc(16px + 6 * ((100vw - 320px) / (680)))",
              md: "1.3rem",
            }}
            textColor={useColorModeValue("osu.orange")}
            display="inline"
          >
            Fridays @ 10:00-11:00am
          </Text>{" "}
          during each academic quarter. To receive announcements about upcoming
          talks, please join the Robotics Seminar{" "}
          <Link
            color={useColorModeValue("osu.orange")}
            href="https://lists.oregonstate.edu/mailman/listinfo/robotics-seminar"
            _hover={{
              color: useColorModeValue("osu.darkOrange"),
            }}
            textDecoration="underline"
            isExternal
          >
            mailing list
          </Link>
          .
        </ResponsiveText>
        <ResponsiveText>
          The seminar is held <i>in person</i> and is open to Oregon State
          University faculty, students, and staff.
        </ResponsiveText>
        <Speakers title="Fall 2024 Schedule" list={Fall2024Speakers} />
      </Flex>
    </Page>
  );
}

export default Home;
