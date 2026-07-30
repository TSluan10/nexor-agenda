import { BrowserRouter, Route, Routes } from "react-router-dom";

import Booking from "./pages/Booking/Booking";
import Landing from "./pages/Landing/Landing";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/agendar" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}