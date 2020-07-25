describe("Supports Multiple Language", function () {
  it("Get the arabic page", function () {
    cy.visit("/#/ar");
    cy.get(".App > header div:first h6");
    cy.get("body[dir='rtl'").should("be.visible");
  });
  it("Get the hebrew page", function () {
    cy.visit("/#/he");
    cy.hash().should("eq", "#he");
    cy.get("body[dir='rtl'").should("be.visible");
  });
  it("Get the english page by default", function () {
    cy.visit("/");
    cy.get("body[dir='ltr'").should("be.visible");
  });
  it("Get the english page for unsupported language specified in url", function () {
    cy.visit("/ch");
    cy.get(".App > header div:first h6").contains("Chuck Norris Fact Finder");
    cy.get("body[dir='ltr'").should("be.visible");
  });
});
