///<reference types="cypress" />


import { locators } from "d:/cypressQformautomation/cypress/Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { links } from "d:/cypressQformautomation/cypress/Pages/link"
import { labels } from "../Pages/label"


const call =new text()


describe('Test',()=>                                      //testsuite
{
   afterEach(function(){
      if (this.currentTest.state === 'failed')           //any test case failed cypress will stop
        {
        Cypress.runner.stop()
        }
      });

it.only('list items',()=>{
    call.login();
    cy.wait(3000)
cy.createform()  
cy.wait(6000)                          //locating create form on page and clicking on it
cy.get(locators.listitems).drag(locators.canvas)//list items will be dragged on screen
cy.get(locators.properties).click()//click on properties
cy.get(locators.fieldname).should('be.visible').clear().type('items')
cy.get(locators.listitemtext).clear().type('apple').type('{enter}').type('mango').type('{enter}').type('orange')
cy.get(locators.listtype).select('Unordered') //changing list order
cy.get(locators.fontsize).select('Large')//changing font size to large
cy.wait(4000)
cy.get(locators.form_preview).click()//preview 
cy.wait(6000)
cy.get(locators.tabletform).should('be.visible').click()
cy.wait(6000)
 cy.get(locators.mobileform).should('be.visible').click()
 cy.wait(6000)
 cy.get('.smartphone').should('be.visible') //using smart phone in preview


})}
)