import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Raffle from "./Pages/Raffle";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/:seller" element={<Raffle />} />
      </Routes>
    </Router>
  )
}

export default App;
