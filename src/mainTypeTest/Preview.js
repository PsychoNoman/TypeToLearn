import React from "react";

export default (props) => {
  const text = props.text.split("");

  return (
    <div
      style={{ userSelect: "none", width: "700px" }}
      className="border rounded p-3 mb-4"
    >
      {text.map((s, i) => {
        let color;
        if (i < props.userInput.length) {
          color = s === props.userInput[i] ? "#ADD8E6" : "#fcbea4";
        }
        return (
          <span key={i} style={{ backgroundColor: color }}>
            {s}
          </span>
        );
      })}
    </div>
  );
};
// import React from "react";
// import { Flex } from "@chakra-ui/react";

// export default (props) => {
//   const text = props.text.split("");

//   return (
//     <Flex userSelect="none" wrap="wrap">
//       {text.map((s, i) => {
//         let color;
//         if (i < props.userInput.length) {
//           color = s === props.userInput[i] ? "#dfffa0" : "#fcbea4";
//         }
//         return (
//           <p key={i} style={{ backgroundColor: color }}>
//             {s}
//           </p>
//         );
//       })}
//     </Flex>
//   );
// };
