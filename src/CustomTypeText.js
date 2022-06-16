// import React, { useState } from "react";
// import { Input, Button, Text, Flex, Textarea, Center } from "@chakra-ui/react";

// export default function CustomType() {
//   const [text, setText] = useState("");
//   const textt = [];

//   const handleType = (event) => {
//     textt.push({ text });
//   };

//   return (
//     <Center
//       style={{
//         width: "700px",
//         position: "fixed",
//         right: "170px",
//         top: "90px",
//       }}
//     >
//       <Textarea
//         w={"700px"}
//         placeholder="Copy and paste text that you want to type up and understand."
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       ></Textarea>

//       <Button
//         m={"5px"}
//         style={{
//           position: "fixed",
//           right: "740px",
//           top: "170px",
//         }}
//         onClick={handleType}
//       >
//         Start Typing
//       </Button>
//       <Text
//         w={"500px"}
//         style={{
//           position: "fixed",
//           right: "400px",
//           top: "230px",
//         }}
//       >
//         {text}
//       </Text>
//       {/* <Button onClick={() => textt.push({ text })}>awd</Button> */}
//       {/* <Button onClick={() => console.log(textt)}>awd2</Button> */}
//     </Center>
//   );
// }

export default () => {
  const texts = ["awd", "awdawdawd"];
  return texts[Math.floor(Math.random() * texts.length)];
};

// export default () => {
//   let aetatetae = document.getElementById("pasteText");
//   const texts = [aetatetae];
//   return texts;
// };
