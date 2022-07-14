import BasePage from "./BasePage";

class SortPage extends BasePage {
  static get url() {
    return "https://demoqa.com/sortable";
  }
  static get Table_Values() {
    return cy.get('.vertical-list-container')
  }
  
}

export default SortPage;