import { Subjects, Publisher, OrderCancelledEvent } from "@jbktickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
