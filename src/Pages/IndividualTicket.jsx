import React, { useState, useEffect } from "react";

function IndividualTicket({ event_id }) {
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!event_id) {
      setError("Invalid event ID.");
      return;
    }

    // Fetch event data based on event ID
    fetch(`http://localhost:3000/eventsTickets/${event_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch event data.");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setEvent(data);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching event data:", error);
      });
  }, [event_id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{event.name}</h2>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Time:</strong> {event.time}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>
        <strong>Description:</strong> {event.description}
      </p>

      <div>
        <h3>Available Tickets:</h3>
        {event.tickets.map((ticket, index) => (
          <div key={index}>
            <p>
              {ticket.type} - Price: {ticket.price} - Available:{" "}
              {ticket.quantityAvailable}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h3>Contact Information:</h3>
        <p>
          <strong>Username:</strong> {event.contact.username}
        </p>
        <p>
          <strong>Email:</strong> {event.contact.email}
        </p>
        <img
          src={event.contact.avatar}
          alt={`${event.contact.username}'s avatar`}
          width="50"
        />
      </div>

      <div>
        <h3>Event Poster:</h3>
        <img src={event.poster} alt={event.name} width="300" />
      </div>
    </div>
  );
}

export default IndividualTicket;
