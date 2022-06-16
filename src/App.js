import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import BaseItems from "./base/BaseItems";
import TypeTest from "./mainTypeTest/TypeTest";
import ChooseTopic from "./chooseTypeTopic/ChooseTopic";
import CustomType from "./CustomType";
import Classroom from "./classroom/Classroom";
import Computerscience from "./chooseTypeTopic/typeTopic/Computerscience";
import Credits from "./Credits";
import RandomType from "./chooseTypeTopic/typeTopic/RandomType";
function App() {
  return (
    <>
      <div className="App"></div>
      <Router>
        <BaseItems />

        <Routes>
          <Route path="/" element={<TypeTest />} />
          <Route path="/choosetopic" element={<ChooseTopic />} />
          <Route path="/customtype" element={<CustomType />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/credits" element={<Credits />} />

          {/* typeTopics */}
          <Route path="/tcs" element={<Computerscience />} />
          <Route path="/random" element={<RandomType />} />

          <Route path="/classroom" element={<Classroom />} />
          <Route path="/choosetopic" element={<ChooseTopic />} />
          <Route path="/customtype" element={<CustomType />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/choosetopic" element={<ChooseTopic />} />
          <Route path="/customtype" element={<CustomType />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
