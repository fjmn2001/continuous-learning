import { render, screen } from "@testing-library/react";

import { LoginForm } from "../../../../src/sections/auth/LoginForm";

describe("LoginForm Test", () => {
  it("should show the component", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText("Correo electrónico")).toBeDefined();
    expect(screen.getByLabelText("Contraseña")).toBeDefined();
    expect(
      screen.getByRole("button", { name: /Iniciar sesión/i }),
    ).toBeDefined();
  });
});
