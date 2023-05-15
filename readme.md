The TicketService class has a constructor that takes two arguments: paymentService and seatReservationService. These are the external providers in charge of payment and seat reservations, respectively. The purchaseTickets function takes two arguments: accountId and ticketTypeRequest. The accountId is the account that will be charged for the tickets. The ticketTypeRequest is an immutable object that indicates the type and quantity of tickets being purchased. The procedure initially verifies that the total number of tickets purchased does not exceed the maximum limit of 20 tickets. It also verifies that at least one adult ticket is purchased. If any of these tests fails, an error is thrown.The method then uses the calculateTotalPrice method to get the total price of the tickets and determines whether there are sufficient funds in the account to cover the cost of the tickets. If the payment is successful, the reserveSeats function is invoked to reserve seats for the tickets that were purchased. Finally, the procedure returns the total cost of the tickets that were purchased. The calculateTotalPrice method computes the total price of the tickets based on the kind and number of tickets supplied in the ticketTypeRequest. It obtains the price of each ticket type using the TICKET_PRICES  constant. I hope this solution is useful!