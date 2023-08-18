Cypress.Commands.add("searchByFilter", (param1, param2, param3, param4) => {
  cy.get(param1).within(() => {
    cy.get(param2).check({ force: true });
    cy.get(param3)
      .contains(param4)
      .then(($el) => {
        cy.wrap($el)
          .next("span")
          .first()
          .children()
          .should("have.class", "symbol")
          .invoke("text")
          .then(($count2) => {
            let val2 = $count2.replace(/[^0-9.]/g, "").trim();
            cy.wrap(val2).as("total_count");
          });
      });
  });
});

Cypress.Commands.add("assertByTitlejob", (param1, param2) => {
  cy.get(param1)
    .each(($el, index, list) => {
      let xp = Cypress._.map($el, "innerText");
      let location_title_length_count = xp.toString().replace(/^[^\n]+/, '').trim();
      expect(location_title_length_count).equal(param2);
    });
});

Cypress.Commands.add("assertByCount", (param1) => {
  cy.get("@total_count").then(($result_count) => {
    cy.get(param1).should("have.text", $result_count);
  });
});

Cypress.Commands.add("assertByTitle", (param1, param2) => {
  cy.get(param1).each((item, index, list) => {
    expect(Cypress.$(item).text()).contains(param2);
  });
});

Cypress.Commands.add("assertMultipleLocations", (param1) => {
  cy.get(param1)
    .each(($el, index, list) => {
      let xp = Cypress._.map($el, "innerText");
      let location_title_length_count = xp.toString().replace(/^[^ ]+/, '').trim().length;
      
      let country_length_counter = 0;
      let min_count = null;
      cy.get(location_title_length_count).each((iter) => {
        if (iter < iter + 1) {
          min_count = iter;
        }
      });
      if (location_title_length_count > min_count) {
        country_length_counter += 1;
        expect(country_length_counter).to.eq(1);
      }
    });
    /* **Explaination**
    1. Find all countries in search results
    2. Trim the text to get only country name via regex
    3. Get the count of each country title
    4. Find the country with minimum characters count {min_count}
    5. Assertion: To determine that results in the list are from different countries
       a. Declared an empty variable {country_length_counter} 
       b. Then checked via condition that: if other countries in the list have their title-count higher than our min value {min_count}
       c. {country_length_counter} will be incremented by 1
       d. Log message {expected 1 to equal **1**} signifies that results in the list are from different countries
    */
  });

  Cypress.Commands.add("assertByTitleCountry", (param1, param2) => {
    cy.get(param1)
      .each(($el, index, list) => {
        let xp = Cypress._.map($el, "innerText");
        let location_title_length_count = xp.toString().replace(/^[^ ]+/, '').trim();
        expect(location_title_length_count).equal(param2);
      });
  });
  
  
