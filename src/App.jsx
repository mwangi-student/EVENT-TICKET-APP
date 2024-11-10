import React from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import IndividualEvent from "./Pages/IndividualEvent";
import Events from "./Pages/Events";
import AddEvent from "./Pages/AddEvent";
import EditEvent from "./Pages/EditEvent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="editEvent" element={<EditEvent />} />
          <Route
            path="individualEvent/:individualEvent"
            element={<IndividualEvent />}
          />
          <Route path="addEvent" element={<AddEvent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
