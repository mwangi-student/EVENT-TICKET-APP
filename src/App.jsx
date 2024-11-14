import React from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Pages/Home";
import IndividualTicket from "./Components/Pages/IndividualTicket";
import AddTicket from "./Components/Pages/AddTicket";
import EditTicket from "./Components/Pages/EditTicket";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="editEvent" element={<EditTicket />} />
          <Route
            path="individualEvent/:individualEvent"
            element={<IndividualTicket />}
          />
          <Route path="addEvent" element={<AddTicket />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
