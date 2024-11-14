import React from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import IndividualTicket from "./Pages/IndividualTicket";
import AddTicket from "./Pages/AddTicket";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ticket/:event_id" element={<IndividualTicket />} />{" "}
          <Route path="addTicket" element={<AddTicket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
