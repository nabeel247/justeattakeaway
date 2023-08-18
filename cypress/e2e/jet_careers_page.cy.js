const main_country_selector = "#CountryBody";
const checkbox_NL = 'input[data-ph-at-text="Netherlands"]';
const country_NL = "Netherlands";
const checkbox_DE = 'input[data-ph-at-text="Germany"]';
const country_DE = "Germany";
const country_titles = "span.result-text";
const jobs_counter_byCountry ='span[data-ph-id="ph-page-element-page11-Ed25bO"]';
const country_result = 'span[data-ph-id="ph-page-element-page11-1eXAIg"]';
const jobs_counter_byType = 'span[data-ph-id="ph-page-element-page10-Tj9fMJ"]';
const country_title = 'ul[data-ph-id="ph-page-element-page10-vG6RIv"]';
const job_category = 'span[data-ph-id="ph-page-element-page10-BgDcHg"]';
const job_title = "Sales";

describe("Test careers page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Case-1: Test jobs by country filter", () => {
    cy.get("#keywordSearch").type("Test");
    cy.get("#ph-search-backdrop").click();

    cy.assertMultipleLocations(country_result);

    cy.get("#CountryAccordion").click();
    cy.searchByFilter(
      main_country_selector,
      checkbox_NL,
      country_titles,
      country_NL
    );
    cy.assertByCount(jobs_counter_byCountry);
    cy.assertByTitleCountry(country_result, country_NL);
  });

  it("Case-2: Test jobs by job-category & country filter", () => {
    cy.get("input#keywordSearch").click();
    cy.get('[data-ph-at-data-text="Sales"]').click();
    cy.contains("Refine your search").scrollIntoView({ duration: 1000 });
    cy.get('[data-ph-at-text="Sales"]').should("be.visible");

    cy.searchByFilter(
      main_country_selector,
      checkbox_DE,
      country_titles,
      country_DE
    );
    cy.assertByCount(jobs_counter_byType);
    cy.assertByTitlejob(job_category, job_title);
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
