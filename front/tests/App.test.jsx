import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";

describe("group", () => {
  it("should", () => {
    render(<App />);
    expect(screen.getByText(/sages/i)).toBeInTheDocument();
  });
});
