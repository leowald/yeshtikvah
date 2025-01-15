import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
// use 'react-router' not 'react-router-dom' otherwise the stories subtopic (useParams)
// routing does not work
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../src/routes.jsx";

describe("group of tests for main.jsx", () => {
  it.each([
    "page",
    "contact",
    "donate",
    "faq",
    "pesukim",
    "shiurim",
    "sources",
    "stories",
    "subscribe",
  ])("should correctly route to page %s", (loc) => {
    const router = createMemoryRouter(routes, {
      initialEntries: [`/${loc}`],
    });
    render(<RouterProvider router={router} />);
    expect(
      // need to use RegExp to apply regEx to a variable
      screen.getByRole("heading", { name: new RegExp(`${loc} page`, "i") })
    ).toBeInTheDocument();
    expect(screen.getByRole("header")).toBeInTheDocument();
    expect(screen.getByRole("footer")).toBeInTheDocument();
  });

  it("should correctly route to the App page", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByText(/be inspired and inspire others/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("header")).toBeInTheDocument();
    expect(screen.getByRole("footer")).toBeInTheDocument();
  });

  it("should correctly route to the stories subtopic", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/stories/health"],
    });
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole("heading", { name: /health/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("header")).toBeInTheDocument();
    expect(screen.getByRole("footer")).toBeInTheDocument();
  });
  it("should route to page not found if incorrect route is inserted", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/abc"],
    });
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { name: /oops/i })).toBeInTheDocument();
  });
});
