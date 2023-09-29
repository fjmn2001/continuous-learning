describe("Login", () => {
  it("should auth a valid user", () => {
    cy.visit("/");

    //todo: add object mother
    //ref: https://github.com/CodelyTV/react-devdash/blob/501745e0e338eaafb49acb53211b480c22e44d06/tests/e2e/tests/RespositoryWidgetForm.spec.ts#L11

    cy.findByLabelText(/Correo electrónico/i).type("fjmn2001@gmail.com");
    cy.findByLabelText(/Contraseña/i).type("123456");

    cy.findByRole("button", { name: /Iniciar sesión/i }).click();

    const message = cy.findByText(/Success/i);
    message.should("exist");
  });
});
