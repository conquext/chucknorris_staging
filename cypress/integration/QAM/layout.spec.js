describe("Page Layout", () => {
  it("Has left alignment by default", () => {
    cy.visit("/");
    cy.viewport(1680, 1050);
    cy.get("header").should("be.leftAligned", "main");
  });
  it("Has ltr layout", () => {
    cy.visit("/");
    cy.viewport(1680, 1050);
    cy.get(".App > header > div > div:nth-child(2) div").within(() => {
      cy.get("button[aria-label='arabic']").click();
    });
    cy.get("body[dir='rtl'").should("be.visible");
  });
  it("Has rtl layout", () => {
    cy.visit("/");
    cy.viewport(1680, 1050);
    cy.get(".App > header > div > div:nth-child(2) div").within(() => {
      cy.get("button[aria-label='english']").click();
    });
    cy.get("body[dir='ltr'").should("be.visible");
  });
});
