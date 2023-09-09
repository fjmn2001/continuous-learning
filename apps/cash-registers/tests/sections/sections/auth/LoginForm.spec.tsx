import { render, screen } from "@testing-library/react";

import { LoginForm } from "../../../../src/sections/auth/LoginForm";

describe("LoginForm Test", () => {
  it("should show the component", async () => {
    render(<LoginForm />);

    expect(await screen.findByLabelText(/Correo electrónico/i)).toBeDefined();
    expect(await screen.findByLabelText(/Contraseña/i)).toBeDefined();
    expect(
      await screen.findByRole("button", { name: /Iniciar sesión/i }),
    ).toBeDefined();
  });
});
