import FormPage from "../pageObjects/FormPage";
import SortPage from "../pageObjects/SortPage";



describe("Demoqa webpage", () => {

  it("1. Scenario (Forms - Practice forms)", ()=>{
    FormPage.visit();
    // - Fill in information
    //     - First Name
    FormPage.Input_FirstName.type("Deniss")
    //     - Last Name
    FormPage.Input_LastName.type("Belinskis")
    //     - Email
    FormPage.Input_Email.type("deniss.belinskis@inbox.lv")
    //     - Gender
    FormPage.CheckBox_Gender.children().first().click()
    //     - Mobile number
    FormPage.Input_MobileNumber.type("25856136")
    //     - Date of birth
    FormPage.Button_DatePickerBirth.click()
    //         - Set value - 29/February/1984
    //         - Set date of birth value by using the calendar widget
    //         - Pass the values dynamically, e.g. create methods:
    //           - setYear(“1984”)
    FormPage.SetYear("1984")
    //           - setMonth(“February”)
    FormPage.SetMonth("February")
    //           - “setDate(“29”)”
    FormPage.SetDay("29")
    //     - Subjects
    //         - Maths
    FormPage.Input_Subjects.type("Maths{enter}")
    //     - Hobbies    
    FormPage.CheckBox_Hobbies.contains("Sports").click()
    FormPage.CheckBox_Hobbies.contains("Reading").click()
    FormPage.CheckBox_Hobbies.contains("Music").click()
    //     - Current address
    FormPage.Input_CurrentAddress.type("Engures nov., Engures pag.")
    //     - State
    FormPage.Selector_State.click()
    FormPage.Selector_SelectState.contains("NCR").click()
    //     - City
    FormPage.Selector_City.click()
    FormPage.Selector_City.contains("Noida").click()
    // - Click Submit
    FormPage.Button_Submit.click()
    // - Validate Values in the table based on label value
    FormPage.Validate_UserData.should("contain.text", "Deniss Belinskis")
    FormPage.Validate_UserData.should("contain.text", "deniss.belinskis@inbox.lv")
    FormPage.Validate_UserData.should("contain.text", "Male")
    FormPage.Validate_UserData.should("contain.text", "25856136")
    FormPage.Validate_UserData.should("contain.text", "29 February,1984")
    FormPage.Validate_UserData.should("contain.text", "Maths")
    FormPage.Validate_UserData.should("contain.text", "Sports, Reading, Music")
    FormPage.Validate_UserData.should("contain.text", "Engures nov., Engures pag.")
    FormPage.Validate_UserData.should("contain.text", "NCR Noida")
  })

  it.only("2. Scenario (Interactions - Sortable)", ()=>{


    // - 2. Scenario ( https://demoqa.com/sortable ) Interactions - Sortable
    SortPage.visit()
    // - Validate that the values are in order - One, Two, Three, Four, Five, Six
    SortPage.Table_Values.should("have.text", "OneTwoThreeFourFiveSix")
    // - Sort the values in following order - Six, Five, Four, Three, Two, One
    cy.get('.vertical-list-container').children().eq(0)
    //cy.get('.vertical-list-container > :nth-child(4)')
    
    //   const draggable = el[0]  // Pick up this
    //   cy.get('#cdk-drop-list-1 > :nth-child(4)').then(el => {
    //     const droppable = el[0]  // Drop over this
    
    //     const coords = droppable.getBoundingClientRect()
    //     draggable.dispatchEvent(new MouseEvent('mousemove'));
    //     draggable.dispatchEvent(new MouseEvent('mousedown'));
    //     draggable.dispatchEvent(new MouseEvent('mousemove', {clientX: 10, clientY: 0}));
    //     draggable.dispatchEvent(new MouseEvent('mousemove', {clientX: coords.x+10, clientY: coords.y+10}));
    //     draggable.dispatchEvent(new MouseEvent('mouseup'));
    
    //   })
    // - Validate that the values are in order - Six, Five, Four, Three, Two, One
  })

});

