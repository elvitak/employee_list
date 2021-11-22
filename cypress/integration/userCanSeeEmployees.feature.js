/* eslint-disable no-undef */
describe("Visiting the application, a user", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://reqres.in/api/users**", {
      fixture: "userResponse.json",
    });
    cy.visit("/");
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=employee-header]").should("contain.text", "Employee List");
  });

  it("is expecte dto see 5 list items", () => {
    cy.get("[data-cy=employee-list]").children().should("have.length", 5);
  });
});
