import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Flex,
  Th,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function Speaker({ date, name, affiliation, title, location, time, url }) {
  const textColor = useColorModeValue("osu.orange");
  const darkTextColor = useColorModeValue("osu.darkOrange");

  return (
    <Tr>
      <Td
        fontSize={{
          base: "calc(14px + 6 * ((100vw - 320px) / (680)))",
          md: "0.95rem",
        }}
        style={{ minWidth: "80px" }}
      >
        {date}
      </Td>
      <Td
        fontSize={{
          base: "calc(14px + 6 * ((100vw - 320px) / (680)))",
          md: "0.95rem",
        }}
        style={{ minWidth: "150px" }}
      >
        {url ? (
          <Link
            color={textColor}
            href={url}
            _hover={{
              color: darkTextColor,
            }}
            textDecoration="underline"
            isExternal
          >
            {name}
          </Link>
        ) : (
          name
        )}
      </Td>
      <Td
        fontSize={{
          base: "calc(14px + 6 * ((100vw - 320px) / (680)))",
          md: "0.95rem",
        }}
        style={{ minWidth: "170px" }}
      >
        {affiliation}
      </Td>
      <Td
        fontSize={{
          base: "calc(14px + 6 * ((100vw - 320px) / (680)))",
          md: "0.95rem",
        }}
        style={{ minWidth: "300px" }}
      >
        {title}
      </Td>
      <Td
        fontSize={{
          base: "calc(14px + 6 * ((100vw - 320px) / (680)))",
          md: "0.95rem",
        }}
      >
        {location}
      </Td>
      <Td
        fontSize={{
          base: "calc(14px + 6 * ((100vw - 320px) / (680)))",
          md: "0.95rem",
        }}
        style={{ minWidth: "90px" }}
      >
        {time}
      </Td>
    </Tr>
  );
}

export default function Speakers({ title, list }) {
  return (
    <Flex w="100%" flexDirection="column" margin="0 auto">
      <Text
        fontSize={{
          base: "calc(18px + 14 * ((100vw - 320px) / 680))",
          lg: "1.8rem",
        }}
        fontWeight="600"
        marginTop="1vh"
        marginBottom="3vh"
        textColor="#000000"
      >
        {title}
      </Text>
      <TableContainer borderRadius="7px" marginBottom="3vh">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Speaker</Th>
              <Th>Affiliation</Th>
              <Th>Title</Th>
              <Th>Location</Th>
              <Th>Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {list.map((speaker) => (
              <Speaker
                key={speaker.name}
                date={speaker.date}
                name={speaker.name}
                affiliation={speaker.affiliation}
                title={speaker.title}
                location={speaker.location}
                time={speaker.time}
                url={speaker.url}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}
