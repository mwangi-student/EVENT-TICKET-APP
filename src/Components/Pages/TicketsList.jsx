import React from "react";
import TicketCard from "../TicketCard";
import { Container, Row, Col } from "react-bootstrap";

function TicketList({ eventsTickets }) {
  return (
    <Container>
      <Row>
        {eventsTickets.map((event) =>
          event.tickets.map((ticketType, index) => (
            <Col key={`${event.id}-${index}`} md={3} className="mb-4">
              <TicketCard
                name={event.name}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                poster={event.poster}
                ticketType={ticketType.type}
                price={ticketType.price}
                quantityAvailable={ticketType.quantityAvailable}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default TicketList;
