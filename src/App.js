import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Event from "./components/Event";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}
