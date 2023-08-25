import { render, screen } from "@testing-library/react";

import { Dashboard } from "../../../src/sections/dashboard/Dashboard";

describe("Dashboard", () => {
  it("should render Dashboard component", async () => {
    render(<Dashboard />);

    const myName = await screen.findByText(/Francisco Marcano/i);
    expect(myName).toBeDefined();
  });
});
