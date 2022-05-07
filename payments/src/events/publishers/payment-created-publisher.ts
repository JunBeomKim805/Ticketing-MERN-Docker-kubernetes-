import { PaymentCreatedEvent, Publisher, Subjects } from "@jbktickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
