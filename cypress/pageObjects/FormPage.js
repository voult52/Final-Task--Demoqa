import BasePage from "./BasePage";

class FormPage extends BasePage {
  static get url() {
    return "https://demoqa.com/automation-practice-form";
  }
  static get Input_FirstName() {
    return cy.get('#firstName')
  }
  static get Input_LastName() {
    return cy.get('#lastName')
  }
  static get Input_Email() {
    return cy.get('#userEmail')
  }
  static get CheckBox_Gender() {
    return cy.get('#genterWrapper > .col-md-9')
  }
  static get Input_MobileNumber() {
    return cy.get('#userNumber')
  }
  static get Button_DatePickerBirth() {
    return  cy.get('#dateOfBirthInput')
  }



  static SetYear(year) {
    return  cy.get('.react-datepicker__year-select').select(year)
  }
  static SetMonth(month) {
    return  cy.get('.react-datepicker__month-select').select(month)
  }
  static SetDay(dayTime) {
    return cy.get('.react-datepicker__day--0' + dayTime).not(".react-datepicker__day--outside-month").click()
  }
  static get Input_MobileNumber() {
    return cy.get('#userNumber')
  }
  static get Input_Subjects() {
    return cy.get('.subjects-auto-complete__value-container')
  }
  static get CheckBox_Hobbies() {
    return cy.get('#hobbiesWrapper > .col-md-9')
  }
  static get Input_CurrentAddress() {
    return cy.get('#currentAddress')
  }
  static get Selector_State() {
    return cy.get('#state')
  }
  static get Selector_SelectState() {
    return cy.get('.css-26l3qy-menu')
  }
  static get Selector_City() {
    return cy.get('#city')
  }
  static get Button_Submit() {
    return cy.get('#submit')
  }
  static get Validate_UserData() {
    return cy.get('td')
  }
  
}

export default FormPage;