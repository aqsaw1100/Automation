///<reference types="cypress" />


import { locators } from "d:/cypressQformautomation/cypress/Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { info } from "d:/cypressQformautomation/cypress/Pages/userData"
import { links } from "d:/cypressQformautomation/cypress/Pages/link"


const call =new text()


describe('Test',()=>                                      //testsuite
{
   afterEach(function(){
      if (this.currentTest.state === 'failed')           //any test case failed cypress will stop
        {
        Cypress.runner.stop()
        }
      });

it.only('text',()=>{
    call.login();
    cy.wait(6000)
cy.createform()  
cy.wait(6000)                          //locating create form on page and clicking on it
cy.get(locators.formcontrol).click()//locating formcontrol and clicking on it
cy.get(locators.checkbox).click()
cy.get(locators.properties).click()//click on properties
cy.get(locators.labeltextt).should('be.visible').clear().type('education')//label
cy.get(locators.chkbox0p1).clear().type('12th')
cy.get(locators.chkbox0p2).clear().type('masters')
cy.get(locators.chkbox0p3).clear().type('phd')
cy.get(locators.chkextra).click()//add extra options
cy.get(locators.dislayother).click()//display other options
//cy.get(locators.randomize).click()//randomize choices

//cy.get(locators.formcompletion).click()//form completion
cy.get(locators.savenclose).click()//save n close
cy.wait(6000)
cy.get(locators.topmost_form).click()
cy.get('.mat-primary > .mat-button-wrapper').click()

cy.wait(8000)
cy.get(locators.topmost_form + '> a')
.should('have.attr', 'href')
.then((href) =>{
  cy.visit(href) })
  cy.get('#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()

//function to extract URL from the Topmost Form in Form Manager in order to open it in the same FRAME

cy.wait(5000)

cy.get('.col-md-12 > .btn').click()

})
})