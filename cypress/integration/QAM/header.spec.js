describe("Page Header", function () {
  it("Has a title", function () {
    cy.visit("/");
    cy.get(".App > header div:first h6").contains("Chuck Norris Fact Finder");
  });
  it("Has a language option", function () {
    cy.get(".App > header div:first h6", { timeout: 10000 }).contains(
      "Change Language"
    );
  });
  it("Has 3 language options", function () {
    cy.get(".App > header > div > div:nth-child(2) div").within(() => {
      cy.get("button[aria-label='english']").contains("en");
      cy.get("button[aria-label='arabic']").contains("ar");
      cy.get("button[aria-label='hebrew']").contains("he");
    });
  });
});
