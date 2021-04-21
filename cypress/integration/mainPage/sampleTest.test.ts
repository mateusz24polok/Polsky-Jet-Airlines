/// <reference types="cypress" />

describe("Bunch of sample tests", () => {
  it("Open main page and check it display properly", () => {
    cy.visit("/");
    cy.get('[data-testid="header__title"').then(
      ($heading: JQuery<HTMLElement>) => {
        cy.wrap($heading).should("be.visible");
        cy.wrap($heading).should(
          "have.text",
          "Main component of POLSKY JET APP"
        );
      }
    );
  });
});
