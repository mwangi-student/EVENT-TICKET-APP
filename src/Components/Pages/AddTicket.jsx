import React, { useState } from "react";

export default function AddTicketForm() {
  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    availableTickets: "",
    posterUrl: "",
    venue: "",
    time: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Event Created:", formData);
        
        setFormData({
          eventName: "",
          date: "",
          availableTickets: "",
          posterUrl: "",
          venue: "",
          time: "",
          location: "",
          description: "",
        });
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
        <div className="left-side">
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
            name="posterUrl"
            placeholder="Poster URL"
            value={formData.posterUrl}
            onChange={handleChange}
          />
        </div>
        <div className="right-side">
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
            placeholder="Time"
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
