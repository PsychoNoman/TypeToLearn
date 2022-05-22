import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import BaseItems from "./base/BaseItems";
import TypeTest from "./mainTypeTest/TypeTest";
import ChooseTopic from "./typeTopics/ChooseTopic";
import CustomType from "./CustomType";
import Classroom from "./classroom/Classroom";

function App() {
  return (
    <>
      <div className="App"></div>
      <Router>
        <Routes>
          <Route path="/" element={<TypeTest />} />
          <Route path="/choosetopic" element={<ChooseTopic />} />
          <Route path="/customtype" element={<CustomType />} />
          <Route path="/classroom" element={<Classroom />} />
          {/* typeTopics */}
          {/* <Route path="/choosetopic" element={<ChooseTopic />} />
          <Route path="/customtype" element={<CustomType />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/choosetopic" element={<ChooseTopic />} />
          <Route path="/customtype" element={<CustomType />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/choosetopic" element={<ChooseTopic />} />
          <Route path="/customtype" element={<CustomType />} /> */}
          <BaseItems />
        </Routes>
      </Router>
    </>
  );
}

export default App;
