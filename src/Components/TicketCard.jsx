import React from "react";
import "./TicketCard.css";
import { Card, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TicketCard({ id, name, date, location, poster, description }) {
  const navigate = useNavigate();

  const handleViewTicket = () => {
    navigate(`/ticket/${id}`);
  };

  const handleBuyTicket = () => {
    navigate(`/ticket/${id}`);
  };

  return (
    <Card className="ticket-card h-100 shadow-sm" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={poster}
        alt={`${name} poster`}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Text className="text-muted">
          <FaMapMarkerAlt /> {location}
        </Card.Text>
        <Card.Text className="text-muted">
          <FaCalendarAlt /> {date}
        </Card.Text>
        <Card.Text>{description.slice(0, 80)}...</Card.Text>
        <div className="d-flex justify-content-between mt-3">
          <Button variant="outline-warning" onClick={handleViewTicket}>
            View Ticket
          </Button>
          <Button variant="warning" onClick={handleBuyTicket}>
            Buy Ticket
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TicketCard;
