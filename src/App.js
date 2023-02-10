import { useEffect } from "react";
import Home from "./Home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Courses from "./Courses/Courses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
