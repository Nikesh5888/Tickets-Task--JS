

import TicketTypeRequest from './lib/TicketTypeRequest';
import TicketPaymentService from '../thirdparty/paymentgateway/TicketPaymentService'
import SeatReservationService from '../thirdparty/seatbooking/SeatReservationService'

export default class TicketService {
  static async buyTickets(ticketTypeRequest) {
    const { infant, child, adult } = ticketTypeRequest;

    if (!ticketTypeRequest.isValid()) {
      console.log("Invalid purchase request");
      return false;
    }

    const totalAmount = infant * 0 + child * 10 + adult * 20;

    const paymentResult = await TicketPaymentService.makePayment(totalAmount);

    if (!paymentResult) {
      console.log("Payment failed");
      return false;
    }

    const noOfSeatsToReserve = adult;
    const seatReservationResult = await SeatReservationService.reserveSeats(
      noOfSeatsToReserve
    );

    if (!seatReservationResult) {
      console.log("Seat reservation failed");
      return false;
    }

    console.log("Tickets bought successfully");
    return true;
  }
}

