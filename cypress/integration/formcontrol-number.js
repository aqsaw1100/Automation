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
cy.get(locators.numbercontrol).click()
cy.get(locators.properties).click()//click on properties
cy.get(locators.labeltextt).should('be.visible').clear().type('enter your lane no')//label
cy.get(locators.dropdown).select('Right')

cy.get(locators.fieldsize).select('Large') //fieldsize
cy.get(locators.reqdfield).click()// making reqd field
cy.get(locators.reqdfield).click()//reverting back ti not reqd field
cy.get(locators.placeholder).should('be.visible').clear().type('lane no')
cy.get(locators.canvas).should('be.visible')//visibilty of control
})
})