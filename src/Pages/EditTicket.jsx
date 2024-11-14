import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTicket() {
  const navigate = useNavigate();
  const { event_id } = useParams();

  const [event, setEvent] = useState({});
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [availableTickets, setAvailableTickets] = useState(0);
  const [contactEmail, setContactEmail] = useState("");
  const [poster, setPoster] = useState("");

  // Fetch event data on mount
  useEffect(() => {
    fetch(`http://localhost:4000/eventsTickets/${event_id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setName(data.name);
        setDate(data.date);
        setTime(data.time);
        setLocation(data.location);
        setDescription(data.description);
        setAvailableTickets(data.availableTickets);
        setContactEmail(data.contact.email);
        setPoster(data.poster);
      })
      .catch((error) => console.error("Error fetching event data:", error));
  }, [event_id]);

  // Handle delete
  function handleDelete() {
    fetch(`http://localhost:4000/eventsTickets/${event_id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Event deleted successfully!");
        navigate("/");
      })
      .catch((error) => console.error("Error deleting event:", error));
  }

  // Handle update
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:4000/eventsTickets/${event_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        date,
        time,
        location,
        description,
        availableTickets,
        contact: { email: contactEmail },
        poster
      })
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Event updated successfully!");
        navigate("/");
      })
      .catch((error) => console.error("Error updating event:", error));
  }

  return (
    <div>
      <img src={poster} alt="Event Poster" className="img-fluid" />
      <h4>{name}</h4>
      <p>{description}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
      <p>Available Tickets: {availableTickets}</p>
      <p>Contact: {contactEmail}</p>

      <button
        onClick={handleDelete}
        type="button"
        className="btn btn-danger btn-sm mt-3"
      >
        DELETE
      </button>

      <div>
        <h3>Edit Event</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Event Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Available Tickets</label>
            <input
              type="number"
              value={availableTickets}
              onChange={(e) => setAvailableTickets(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contact Email</label>
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Poster URL</label>
            <input
              type="url"
              value={poster}
              onChange={(e) => setPoster(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
