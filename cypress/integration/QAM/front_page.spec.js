describe("Front Page", function () {
  it("Loads the page", function () {
    cy.visit("/");
    cy.title().should("eq", "Chuck Norris Facts");
    cy.location("protocol").should("eq", "http:");
  });
  it("Has a header", function () {
    cy.get(".App > header div:first h6").should("be.visible");
  });
  it("Has a search input", function () {
    cy.get('input[aria-label="search chuck norris facts"]').should(
      "be.visible"
    );
  });
});
