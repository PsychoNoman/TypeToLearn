import React from "react";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function choosetopic() {
  return (
    <>
      <Flex
        flexWrap={"wrap"}
        width={"900px"}
        marginLeft={"300px"}
        marginTop={"100px"}
        className="container"
      >
        <Link to={"/tcs"}>
          <Box
            border={"solid"}
            borderRadius={"10px"}
            width={"250px"}
            height={"250px"}
            fontSize={"30px"}
            margin={"10px"}
            textAlign={"center"}
            justifyContent={"space-around"}
            fontFamily={"Courier New"}
            backgroundImage="https://wallpaperaccess.com/full/1428481.jpg"
            color={"white"}
          >
            Computer <br /> Science
          </Box>{" "}
        </Link>
        {/* <Link>
          <Box
            border={"solid"}
            borderRadius={"10px"}
            width={"250px"}
            height={"250px"}
            fontSize={"30px"}
            margin={"10px"}
            textAlign={"center"}
            justifyContent={"space-around"}
            fontFamily
            backgroundImage=""
            color={""}
          >
            Computer <br /> Science
          </Box>
        </Link> */}
        <Link to="/random">
          <Box
            border={"solid"}
            borderRadius={"10px"}
            width={"250px"}
            height={"250px"}
            fontSize={"30px"}
            margin={"10px"}
            textAlign={"center"}
            justifyContent={"space-around"}
            fontFamily
            backgroundImage="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            color={""}
          >
            Random <br /> Facts
          </Box>
        </Link>
        <Link to="/">
          <Box
            border={"solid"}
            borderRadius={"10px"}
            width={"250px"}
            height={"250px"}
            fontSize={"30px"}
            margin={"10px"}
            textAlign={"center"}
            justifyContent={"space-around"}
            fontFamily
            backgroundImage=""
            color={""}
          >
            <br />
          </Box>
        </Link>
        <Link to="/">
          <Box
            border={"solid"}
            borderRadius={"10px"}
            width={"250px"}
            height={"250px"}
            fontSize={"30px"}
            margin={"10px"}
            textAlign={"center"}
            justifyContent={"space-around"}
            fontFamily
            backgroundImage=""
            color={""}
          >
            <br />
          </Box>
        </Link>
        <Link to="/">
          <Box
            border={"solid"}
            borderRadius={"10px"}
            width={"250px"}
            height={"250px"}
            fontSize={"30px"}
            margin={"10px"}
            textAlign={"center"}
            justifyContent={"space-around"}
            fontFamily
            backgroundImage=""
            color={""}
          >
            <br />
          </Box>
        </Link>
        <Link to="/">
          <Box
            border={"solid"}
            borderRadius={"10px"}
            width={"250px"}
            height={"250px"}
            fontSize={"30px"}
            margin={"10px"}
            textAlign={"center"}
            justifyContent={"space-around"}
            fontFamily
            backgroundImage=""
            color={""}
          >
            <br />
          </Box>
        </Link>
        <Link to="/">
          <Box
            border={"solid"}
            borderRadius={"10px"}
            width={"250px"}
            height={"250px"}
            fontSize={"30px"}
            margin={"10px"}
            textAlign={"center"}
            justifyContent={"space-around"}
            fontFamily
            backgroundImage=""
            color={""}
          >
            <br />
          </Box>
        </Link>
      </Flex>
    </>
  );
}
