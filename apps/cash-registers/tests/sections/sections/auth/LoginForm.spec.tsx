import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LoginForm } from "../../../../src/sections/auth/LoginForm";

describe("LoginForm Test", () => {
  it("auth an existing user when form is summited", async () => {
    render(<LoginForm />);

    const email = await screen.findByLabelText(/Correo electrónico/i);
    await userEvent.type(email, "fjmn2001@gmail.com");

    const password = await screen.findByLabelText(/Contraseña/i);
    await userEvent.type(password, "123456");

    const submitButton = await screen.findByRole("button", {
      name: /Iniciar sesión/i,
    });
    await userEvent.click(submitButton);

    await screen.findByText(/Success/i);
  });

  it("show error when form is summited with bad credentials", async () => {
    render(<LoginForm />);

    const email = await screen.findByLabelText(/Correo electrónico/i);
    await userEvent.type(email, "invalid@email.com");

    const password = await screen.findByLabelText(/Contraseña/i);
    await userEvent.type(password, "invalid_password");

    const submitButton = await screen.findByRole("button", {
      name: /Iniciar sesión/i,
    });
    await userEvent.click(submitButton);

    await screen.findByText(/Error/i);
  });
});
