///<reference types="cypress" />


import { locators } from "d:/cypressQformautomation/cypress/Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
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

it.only('paragraph',()=>{
    call.login();
    cy.wait(3000)
cy.createform()// plus icon working
cy.get(locators.paragraph).drag(locators.canvas)//paragraph will be dragged on screen
cy.get(locators.paragraph).click()//adding paragraph by click
cy.get(locators.properties).click()//click on properties
cy.get(locators.fieldname).should('be.visible').clear().type('paragraphform')
cy.get(locators.label_text).should('be.visible').clear().type('my first paragrph label') //typing in field name
cy.wait(4000)
cy.get(locators.dropdown_left_rght_top_para).select('Right')
cy.get(locators.dropdown_left_rght_top_para).select('Left')
cy.get(locators.dropdown_left_rght_top_para).select('Center')
cy.get(locators.form_preview).click()//preview 
cy.wait(6000)
cy.get(locators.tabletform).should('be.visible').click()//tablet
cy.wait(6000)
 cy.get(locators.mobileform).should('be.visible').click()//[phone]
 cy.wait(6000)
 cy.contains('Potrait').click()
 cy.get('.smartphone').should('be.visible') //using smart phone in preview


})}
)