/// <reference types="cypress" />

describe("Bunch of sample tests", () => {
  it("Open main page and check if AppBar have black background", () => {
    cy.visit("/");
    cy.get('[data-testid="app-bar"]').should(
      "have.css",
      "background-color",
      "rgb(4, 8, 9)"
    );
  });

  it("Open main page and check if footer have black background", () => {
    cy.visit("/");
    cy.get('[data-testid="footer"]').should(
      "have.css",
      "background-color",
      "rgb(4, 8, 9)"
    );
  });
});
