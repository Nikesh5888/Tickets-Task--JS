

export default class TicketTypeRequest {
  constructor({ infant = 0, child = 0, adult = 0 }) {
    this.infant = infant;
    this.child = child;
    this.adult = adult;
  }

  get totalTickets() {
    return this.infant + this.child + this.adult;
  }

  isValid() {
    return (
      this.totalTickets > 0 &&
      this.totalTickets <= 20 &&
      this.adult > 0 &&
      this.infant <= this.adult &&
      this.child + this.infant <= this.adult
    );
  }
}

