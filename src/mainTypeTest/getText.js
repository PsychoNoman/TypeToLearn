import React, { useState } from "react";

export default () => {
  const [fact, setFact] = useState(null);

  // const getFact = () => {
  //   fetch("https://asli-fun-fact-api.herokuapp.com/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFact(data.data);
  //     });
  // };
  // useEffect(() => {
  //   getFact();
  // }, []);

  // if (!fact) return null;

  const texts = ["awdawdawawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdd"];

  return texts[Math.floor(Math.random() * texts.length)];
};
