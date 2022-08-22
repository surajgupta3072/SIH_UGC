import "./App.css";
import Navbar from "./Navbar.js";
import Calendar from "./Components/Calendar/Calendar";
import CaseList from "./Components/CaseList/CaseList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<CaseList />} />
        <Route path='/calendar' element={<Calendar/>} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
