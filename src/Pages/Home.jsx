import React, { useState, useEffect } from "react";
import TicketList from "./TicketsList";

function Home() {
  const [tickets, setTickets] = useState([]);

  // Fetch tickets data from the server
  useEffect(() => {
    fetch("http://localhost:3000/eventsTickets")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check the fetched data
        setTickets(data);
      });
  }, []);

  return (
    <main>
      <TicketList eventsTickets={tickets} />
    </main>
  );
}

export default Home;