/// <reference types="cypress" />

describe("Testing the app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("input field should be rendered", () => {
    cy.get("input[type=text]").should("be.visible");
    cy.get("input[type=text]").click().should("have.focus");
  });

  it("user can type into input", () => {
    cy.get("input[type=text]").as("inputField");
    cy.get("@inputField").click().should("have.focus");
    cy.get("@inputField").type("{enter}");
    cy.get("ul").should("not.be.visible");
  });

  it("user should not be able to add empty spaces as tasks", () => {
    cy.get("input[type=text]").as("inputField");
    cy.get("@inputField").click().should("have.focus");
    cy.get("@inputField").type("   {enter}");
    cy.get("ul").should("not.be.visible");
  });
});
