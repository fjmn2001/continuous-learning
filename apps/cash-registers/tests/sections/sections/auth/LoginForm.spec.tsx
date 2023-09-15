import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LoginForm } from "../../../../src/sections/auth/LoginForm";

describe("LoginForm Test", () => {
  it("should show the component", async () => {
    render(<LoginForm />);

    const email = await screen.findByLabelText(/Correo electrónico/i);
    await userEvent.type(email, "email@email.com");

    const password = await screen.findByLabelText(/Contraseña/i);
    await userEvent.type(password, "123456");

    const submitButton = await screen.findByRole("button", {
      name: /Iniciar sesión/i,
    });
    await userEvent.click(submitButton);
  });
});
