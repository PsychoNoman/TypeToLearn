import React from "react";
import { Button, Center, Icon } from "@chakra-ui/react";
import { FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Classroom() {
  return (
    <Center top={"100px"} right="300px" position={"absolute"}>
      probably won't continue this but maybe .. <br />
      <Button
        userSelect={"all"}
        onClick={() => navigator.clipboard.writeText("defaccsuport@gmail.com")}
      >
        defaccsuport@gmail.com
      </Button>
      <Link to={"/customtype"}>
        <Button pos={"fixed"} bottom={"3"} left={"600"}>
          {" "}
          Custom Type
        </Button>
      </Link>
    </Center>
  );
}
