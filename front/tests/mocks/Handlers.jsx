import { db } from "./db";

export const handlers = [
  ...db.product.toHandlers("rest"),
  ...db.category.toHandlers("rest"),
];

//returns all api endpoints for each get/post/put/patch/delete
