import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Raffle from "./Pages/Raffle";
import Home from "./Pages/Home";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:seller" element={<Raffle />} />
      </Routes>
    </Router>
  )
}

export default App;
