import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Rallye from "./Rallye";
import Objectif from "./Objectif";
import Contact from "./Contact";

export default function Body() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rallye" element={<Rallye />} />
          <Route path="/objectif" element={<Objectif />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
