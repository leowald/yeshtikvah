import { db } from "./db";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/logo", () => {
    return HttpResponse.json({
      primary_color: {
        colors: [
          {
            color: "#f905d9",
            deg: "0%",
          },
          {
            color: "#e3d1b9",
            deg: "99.48%",
          },
        ],
        sideCorner: "180deg",
      },
      secondary_color: "#bab97d",
      bgHeaderColor: "#18afd0",
      id: "8419",
    });
  }),
  ...db.product.toHandlers("rest"),
  ...db.category.toHandlers("rest"),
];

//returns all api endpoints for each get/post/put/patch/delete
