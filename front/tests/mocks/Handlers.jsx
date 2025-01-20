import { db } from "./db";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/logo", () => {
    return HttpResponse.json({
      alt_text: "sapiente",
      image: {
        sm: "RamadaInn-150x150.png",
        md: "RamadaInn-300x300.png",
        lg: "RamadaInn.png",
      },
      id: "cad6",
    });
  }),
  ...db.product.toHandlers("rest"),
  ...db.category.toHandlers("rest"),
];

//returns all api endpoints for each get/post/put/patch/delete
