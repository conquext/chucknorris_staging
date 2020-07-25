describe("Gets joke", function () {
  beforeEach(function () {
    cy.fixture("keywords").as("keys");
  });
  it("Get a random joke", function () {
    cy.visit("/");
    cy.get('input[aria-label="search chuck norris facts"]').should(
      "be.visible"
    );
    cy.get("form.search-box").within(($form) => {
      cy.get('button[aria-label="searchRandom"]').should("be.visible").click();
    });
    cy.get(".App .jokes-list > div > nav").children().should("have.length", 1);
  });
  it("Type in search box", function () {
    cy.visit("/");
    cy.get("form.search-box").within(() => {
      cy.get('input[aria-label="search chuck norris facts"]')
        .should("be.visible")
        .type("jokes.")
        .should("have.value", "jokes.");
    });
  });
  it("Get jokes", function () {
    cy.visit("/");
    cy.get("form.search-box").within(() => {
      cy.get('input[aria-label="search chuck norris facts"]')
        .should("be.visible")
        .type("jokes.");
    });
    cy.get(".App .jokes-list > div > nav[aria-label='jokes']")
      .children()
      .should("have.length.greaterThan", 1)
      .should("have.length.lessThan", 16);
  });
  it("Get a random joke after getting list of joke", function () {
    cy.get('input[aria-label="search chuck norris facts"]').should(
      "be.visible"
    );
    cy.get("form.search-box").within(($form) => {
      cy.get('button[aria-label="searchRandom"]').should("be.visible").click();
    });
    cy.get(".App .jokes-list > div > nav").children().should("have.length", 1);
  });
  it("Return error if search key is less than 3", function () {
    cy.visit("/");
    cy.get("form.search-box").within(() => {
      cy.get('input[aria-label="search chuck norris facts"]')
        .should("be.visible")
        .type("jo")
        .should("have.value", "jo");
      cy.get('button[aria-label="search"]').should("be.visible").click();
    });
    cy.contains("Search term must have atleast 3 characters.");
  });
  it("Get a random joke after getting error message", function () {
    cy.get('input[aria-label="search chuck norris facts"]').should(
      "be.visible"
    );
    cy.get("form.search-box").within(($form) => {
      cy.get('button[aria-label="searchRandom"]').should("be.visible").click();
    });
    cy.get(".App .jokes-list > div > nav").children().should("have.length", 1);
  });
  it("Get jokes after an error message", function () {
    cy.visit("/");
    cy.get("form.search-box").within(() => {
      cy.get('input[aria-label="search chuck norris facts"]')
        .should("be.visible")
        .type("high");
    });
    cy.get(".App .jokes-list > div > nav[aria-label='jokes']")
      .children()
      .should("have.length.greaterThan", 1)
      .should("have.length.lessThan", 16);
  });
  it("Test Search button", function () {
    cy.get("form.search-box").within(() => {
      cy.get('input[aria-label="search chuck norris facts"]').should(
        "be.visible"
      );
      cy.get('button[aria-label="search"]').should("be.visible").click();
    });
  });
  it("Try invalid search word", function () {
    cy.visit("/");
    cy.get("form.search-box").within(() => {
      cy.get('input[aria-label="search chuck norris facts"]')
        .should("be.visible")
        .type(this.keys.willProduceEmptySearchResult)
        .should("have.value", this.keys.willProduceEmptySearchResult);
      cy.get('button[aria-label="search"]').should("be.visible").click();
    });
    cy.contains(
      `NO MATCHES FOR "${this.keys.willProduceEmptySearchResult}". TRY ANOTHER SEARCH TERM.`,
      { matchCase: false }
    );
  });
});
