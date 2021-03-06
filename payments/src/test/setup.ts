import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";

import { app } from "../app";
import jwt from "jsonwebtoken";
declare global {
  var signin: (id?: string) => string[];
}

jest.mock("../nats-wrapper");

process.env.STRIPE_KEY =
  "sk_test_51KwBntEIwxFTBUO9isTWVGckv04UWwRzHMI6cWFRpg63r7snR4P0MzscYYnuzI9TIBhr3qwlbLrcBCDQ5TVYQ3h800FeUscRX0";

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "asdfasdf";
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = (id?: string) => {
  // Build a JWT payload. {id, email}
  const payload = {
    id: id || new mongoose.Types.ObjectId().toHexString(),
    email: "test@test.com",
  };
  // Create the JWT!
  const token = jwt.sign(payload, process.env.JWT_KEY!);
  // Build session object {jwt:my_jwt}
  const session = { jwt: token };
  // Turn that seesion into JSON
  const sessionJSON = JSON.stringify(session);
  // Take JSON and encode it as base 64
  const base64 = Buffer.from(sessionJSON).toString("base64");
  // return a string thats the cookie with the encoded data
  return [`session=${base64}`];
};
