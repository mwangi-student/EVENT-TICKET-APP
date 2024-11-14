import React from "react";
import TicketCard from "../Components/TicketCard";
import { Container, Row, Col } from "react-bootstrap";

function TicketList({ eventsTickets }) {
  return (
    <Container>
      <Row>
        {eventsTickets.map((event) => (
          <Col key={event.id} md={3} className="mb-4">
            <TicketCard
              name={event.name}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              poster={event.poster}
              // Display the first ticket type as a default, or customize as needed
              ticketType={event.tickets[0]?.type || "N/A"}
              price={event.tickets[0]?.price || "N/A"}
              quantityAvailable={event.tickets[0]?.quantityAvailable || "N/A"}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TicketList;
