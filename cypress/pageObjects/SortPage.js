import BasePage from "./BasePage";

class SortPage extends BasePage {
  static get url() {
    return "https://demoqa.com/sortable";
  }
  static get Table_Values() {
    return cy.get('.vertical-list-container')
  }
 
  static Switch_TableValues(fromVal, toVal) {
    cy.get('.vertical-list-container').children().eq(fromVal-1).trigger('mousedown')
    cy.get('.vertical-list-container').children().eq(toVal-1).click();
  }
 





  
}

export default SortPage;