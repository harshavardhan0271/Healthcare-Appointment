import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DoctorProfile from "./pages/DoctorProfile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
      </Routes>
    </Router>
  );
}
