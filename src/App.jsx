import React from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import IndividualTicket from "./Pages/IndividualTicket";
import AddTicket from "./Pages/AddTicket";
import EditTicket from "./Pages/EditTicket";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="editEvent" element={<EditTicket />} />
          <Route path="ticket/:id" element={<IndividualTicket />} />{" "}
          {/* Note the :id */}
          <Route path="addTicket" element={<AddTicket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
