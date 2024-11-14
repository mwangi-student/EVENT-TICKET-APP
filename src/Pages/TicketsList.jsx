import React from "react";
import TicketCard from "../Components/TicketCard";
import { Container, Row, Col } from "react-bootstrap";

function TicketList({ eventsTickets }) {
  // Check if eventsTickets is an array and not empty
  if (!Array.isArray(eventsTickets) || eventsTickets.length === 0) {
    return <div>No events available</div>; // Fallback if no tickets are available
  }

  return (
    <Container>
      <Row>
        {eventsTickets.map((event) => (
          <Col key={event.id} md={3} className="mb-4">
            <TicketCard
              id={event.id}
              name={event.name}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              poster={event.poster}
              ticketType={event.tickets?.[0]?.type || "N/A"}
              price={event.tickets?.[0]?.price || "N/A"}
              quantityAvailable={event.tickets?.[0]?.quantityAvailable || "N/A"}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TicketList;
