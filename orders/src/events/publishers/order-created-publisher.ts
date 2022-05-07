import { Publisher, OrderCreatedEvent, Subjects } from "@jbktickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
