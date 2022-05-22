import { Flex, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import NavItem from "./NavItem";
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import {
  FiMenu,
  FiHome,
  FiEdit,
  FiAlignRight,
  FiBookOpen,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function BaseItems() {
  const [navSize, changeNavSize] = useState("large");

  return (
    <div className="BaseItems">
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

          <NavItem
            navSize={navSize}
            icon={FiHome}
            title="Home"
            description="This is the description for the dashboard."
            active={"/"}
          />
          <NavItem navSize={navSize} icon={FiAlignRight} title="TypeTopics" />
          <NavItem navSize={navSize} icon={FiEdit} title="Custom" />
          <NavItem navSize={navSize} icon={FiBookOpen} title="Classroom" />
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
    </div>
  );
}

export default BaseItems;
