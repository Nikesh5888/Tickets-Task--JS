const TicketTypeRequest = require("./src/pairtest/lib/TicketTypeRequest");
const TicketService = require("./src/pairtest/TicketService");

const ticketTypeRequest = new TicketTypeRequest({
    infant: 1,
    child: 2,
    adult: 1,
});

TicketService.buyTickets(ticketTypeRequest);