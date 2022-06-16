import { Flex, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import NavItem from "./NavItem";
import { useColorMode, Switch, Box, Grid, VStack } from "@chakra-ui/react";

import {
  FiMenu,
  FiHome,
  FiEdit,
  FiAlignRight,
  FiBookOpen,
  FiAirplay,
} from "react-icons/fi";

function BaseItems({ children }) {
  const [navSize, changeNavSize] = useState("large");
  const { toggleColorMode } = useColorMode();

  return (
    <VStack align="flex-start" className="BaseItems">
      <Switch right={2} top={2} position={"fixed"} onChange={toggleColorMode} />

      <Grid
        templateColumns={{ base: "2fr 4fr", lg: "2fr 4fr 2fr" }}
        gap="4"
        mx="4"
        my="6"
      >
        <Flex
          pos="fixed"
          left="5"
          h="95vh"
          marginTop="2.5vh"
          boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
          borderRadius={navSize === "small" ? "15px" : "30px"}
          w={navSize === "small" ? "75px" : "200px"}
          flexDir="column"
          justifyContent="space-between"
        >
          <Flex
            p="5%"
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
            as="nav"
          >
            <IconButton
              background="none"
              mt={5}
              _hover={{ background: "none" }}
              icon={<FiMenu />}
              onClick={() => {
                if (navSize === "small") changeNavSize("large");
                else changeNavSize("small");
              }}
            />

            <NavItem navSize={navSize} icon={FiHome} title="Home" url="/" />
            <NavItem
              navSize={navSize}
              icon={FiAlignRight}
              url="/choosetopic"
              title="TypeTopics"
              description={"Choose a topic to learn about"}
            />
            {/* <NavItem
              navSize={navSize}
              url="/customtype"
              icon={FiEdit}
              title="Custom"
              description={
                "Copy and paste your own text to type up and understand"
              }
            /> */}
            <NavItem
              navSize={navSize}
              url="/classroom"
              icon={FiBookOpen}
              title="Classroom"
              description={"Coming soon ... (probably not)"}
            />
            <NavItem
              navSize={navSize}
              url="/credits"
              icon={FiAirplay}
              title="Credits"
            />
            {/* <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
          <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" />
          <NavItem navSize={navSize} icon={FiSettings} title="Settings" /> */}
          </Flex>

          <Flex
            p="5%"
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
            mb={4}
          ></Flex>
        </Flex>
        <div
          style={{
            id: "ad",
            width: "280px",
            height: "190px",
            backgroundColor: "grey",
            backgroundImage: "",
            position: "fixed",
            bottom: 0,
            right: 0,
            borderRadius: "5px",
            margin: "3px",
            border: "solid",
            borderWidth: "2px",
          }}
        ></div>
        <Box>{children}</Box>
      </Grid>
    </VStack>
  );
}

export default BaseItems;
