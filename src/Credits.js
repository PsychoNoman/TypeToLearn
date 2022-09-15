import { Button, Text } from "@chakra-ui/react";
import React from "react";

export default function Credits() {
  return (
    <Text marginLeft={"300px"} marginTop={"100px"}>
      Credits for TypeTopics goes to <br />
      <Button
        p={1}
        // onClick={() =>
        //   navigator.clipboard.writeText(
        //     "https://en.wikipedia.org/wiki/Main_Page"
        //   )
        // }
      >
        {" "}
        <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank">
          {" "}
          https://en.wikipedia.org/wiki/Main_Page{" "}
        </a>
      </Button>
      and
      <br /> Google "i'm feeling curious"
    </Text>
  );
}
