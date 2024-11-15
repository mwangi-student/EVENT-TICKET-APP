import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTicketForm() {
  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    availableTickets: "",
    poster: "",
    venue: "",
    time: "",
    location: "",
    description: ""
  });

  const navigate = useNavigate(); // Initialize the navigate hook

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://event-ticket-app-1.onrender.com/eventsTickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("Event Created:", formData);

        // Clear form fields
        setFormData({
          eventName: "",
          date: "",
          availableTickets: "",
          poster: "",
          venue: "",
          time: "",
          location: "",
          description: ""
        });

        // Redirect to homepage
        navigate("/"); // Replace "/" with your homepage route
      } else {
        console.error("Failed to create event:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-header">CREATE YOUR EVENT</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="left-side mb-10px">
          <input
            type="text"
            name="eventName"
            placeholder="Event Name"
            value={formData.eventName}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="number"
            name="availableTickets"
            placeholder="Available Tickets"
            value={formData.availableTickets}
            onChange={handleChange}
          />
          <input
            type="url"
            name="poster"
            placeholder="Poster URL"
            value={formData.poster}
            onChange={handleChange}
          />
        </div>
        <div className="right-side mb-10px">
          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={formData.venue}
            onChange={handleChange}
          />
          <input
            type="time"
            name="time"
            placeholder="Venue Time"
            value={formData.time}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          CREATE EVENT
        </button>
      </form>
    </div>
  );
}
