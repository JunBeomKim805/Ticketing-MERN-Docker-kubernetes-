import { Publisher, Subjects, TicketUpdatedEvent } from "@jbktickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
