import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Logo from "../../src/components/nav/Logo.jsx";
import { MemoryRouter } from "react-router-dom";
import { server } from "../mocks/server.js";

describe("group of tests which test the logo component", () => {
  function renderComponent(size) {
    render(
      <MemoryRouter>
        <Logo size={size} />
      </MemoryRouter>
    );
  }

  it("should use the msw to return the correct information from the logo api'", async () => {
    server.listen();
    screen.debug();
    const response = await fetch("http://localhost:3000/logo");
    const logoInfo = await response.json();
    const logoInfoApi = {
      alt_text: "sapiente",
      image: {
        sm: "RamadaInn-150x150.png",
        md: "RamadaInn-300x300.png",
        lg: "RamadaInn.png",
      },
      id: "cad6",
    };
    expect(logoInfo).toMatchObject(logoInfoApi);
  });
});
