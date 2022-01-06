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
cy.get('#headingFormControls > .panel-title > .collapsed').click()
cy.get('#textbox > .col-xs-10').click()
cy.get(locators.properties).click()//click on properties
cy.get(':nth-child(2) > .form-control').should('be.visible').clear().type('colour')//label
cy.get(locators.dropdown).select('Right')

cy.get(':nth-child(5) > .form-control').select('Large')
})
})