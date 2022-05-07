import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@jbktickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
