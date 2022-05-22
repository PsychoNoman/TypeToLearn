import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useColorMode, Switch } from "@chakra-ui/react";
import React, { Component } from "react";
import BaseItems from "./base/BaseItems";
import TypeTest from "./mainTypeTest/TypeTest";
import ChooseTopic from "./typeTopics/ChooseTopic";
function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <div className="App">
        <Switch
          right={2}
          top={2}
          position={"absolute"}
          onChange={toggleColorMode}
        />
        <BaseItems />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<TypeTest />} />
          <Route path="/ChooseTopic" element={<ChooseTopic />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
