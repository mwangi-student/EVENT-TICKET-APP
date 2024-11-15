import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./IndividualTicket.css";

function IndividualTicket() {
  const { event_id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [editingTicket, setEditingTicket] = useState(null);
  const [updatedTicket, setUpdatedTicket] = useState({
    type: "",
    price: "",
    quantityAvailable: "",
    location: "",
    email: "",
    poster: ""
  });

  useEffect(() => {
    if (!event_id) {
      setError("Invalid event ID.");
      return;
    }

    // Fetch event data based on event ID
    fetch(
      `https://event-ticket-app.onrender.com/eventsTickets/${event_id}?_=${new Date().getTime()}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch event data.");
        }
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

  const handleEditClick = (ticket) => {
    setEditingTicket(ticket);
    setUpdatedTicket({
      type: ticket.type || "",
      price: ticket.price || "",
      quantityAvailable: ticket.quantityAvailable || "",
      location: ticket.location || "",
      email: ticket.contact?.email || "",
      poster: ticket.poster || ""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTicket((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    if (editingTicket) {
      const updatedTickets = event.tickets.map((ticket) =>
        ticket.id === editingTicket.id
          ? { ...ticket, ...updatedTicket }
          : ticket
      );

      // Update the event with the new ticket data
      const updatedEvent = { ...event, tickets: updatedTickets };

      // Send the updated data to the server
      fetch(
        `https://event-ticket-app-1.onrender.com/eventsTickets/${
          event.id
        }?_=${new Date().getTime()}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedEvent)
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setEvent(data);
          setEditingTicket(null); // Close the edit form
        })
        .catch((error) => {
          setError("Failed to save the updated ticket data.");
          console.error("Error updating event data:", error);
        });
    }
  };

  const handleCancelClick = () => {
    setEditingTicket(null); // Close the edit form without saving
  };

  const deleteEvent = async () => {
    try {
      const response = await fetch(
        `https://event-ticket-app-1.onrender.com/eventsTickets/${event_id}`,
        {
          method: "DELETE"
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete event");
      }

      setMessage(alert("Event successfully deleted!"));
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error deleting event:", error);
      setMessage("Failed to delete event.");
    }
  };

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  if (!event) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            {event.name}
            <hr
              style={{
                width: "300px",
                backgroundColor: "black",
                height: "2px",
                border: "none",
                margin: "10px auto"
              }}
            />
          </h2>

          <div className="mt-4">
            <img
              src={event.poster}
              alt={event.name}
              className="img-fluid"
              width="300"
            />
          </div>

          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>

          <div className="mt-4">
            <h3>Contact Information:</h3>
            <p>
              <strong>Email:</strong> {event.contact?.email}
            </p>
          </div>

          <p>
            <strong>Description:</strong> {event.description}
          </p>

          <div>
            <h3>Available Tickets:</h3>
            {event.tickets.map((ticket, index) => (
              <div key={index} className="mb-3">
                <p>
                  {ticket.type} - Price: {ticket.price} - Available:{" "}
                  {ticket.quantityAvailable}
                </p>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEditClick(ticket)}
                >
                  Edit
                </button>
                <br />
                <button
                  className="btn btn-outline-warning mt-2"
                  onClick={deleteEvent}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {message && <p>{message}</p>}

          {editingTicket && (
            <div className="mt-4">
              <h3>Edit Ticket</h3>
              <div className="form-group">
                <label>Type:</label>
                <input
                  type="text"
                  name="type"
                  className="form-control"
                  value={updatedTicket.type}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Price:</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  value={updatedTicket.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Tickets Available:</label>
                <input
                  type="number"
                  name="quantityAvailable"
                  className="form-control"
                  value={updatedTicket.quantityAvailable}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  value={updatedTicket.location}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Contact Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={updatedTicket.email}
                  onChange={handleInputChange}
                />
              </div>
              <button
                className="btn btn-warning mt-3"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="btn btn-outline-warning mt-3 ms-2"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IndividualTicket;
