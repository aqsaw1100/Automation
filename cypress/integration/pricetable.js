///<reference types="cypress" />


import { locators } from "d:/cypressQformautomation/cypress/Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { links } from "d:/cypressQformautomation/cypress/Pages/link"
import { labels } from "../Pages/label"
import { userdata } from "../Pages/userData"


const call =new text()


describe('Test',()=>                                      //testsuite
{
   afterEach(function(){
      if (this.currentTest.state === 'failed')           //any test case failed cypress will stop
        {
        Cypress.runner.stop()
        }
      });

it.only('features',()=>{
    call.login();
    cy.wait(6000)
cy.createform()  
cy.wait(6000)                          //locating create form on page and clicking on it
cy.get(locators.feature).drag(locators.canvas)//list items will be dragged on screen
cy.get(locators.properties).click()//click on properties
cy.wait(6000)
cy.get(locators.fieldname).should('be.visible').clear().type('features')
cy.get(locators.heading).should('be.visible')//heading should be visible
cy.get(locators.columntitleleft).click().clear().type('hi')
cy.wait(6000)
cy.get(locators.columntitleleft).type('hi')
cy.get(locators.descriptionleft).type('hii')
cy.get(locators.buttonlefttext).type('me')
cy.get(locators.lefturl).type(userdata.url4test)
cy.wait(4000)
cy.get(locators.canvasfeatures).should('have.text',userdata.junkdata) //asserting canvas area whether chnages are reflected
cy.get(locators.form_preview).click()//preview 
cy.wait(6000)
cy.get(locators.tabletform).should('be.visible').click()
cy.wait(6000)
 cy.get(locators.mobileform).should('be.visible').click()
 cy.wait(6000)
 cy.get('.smartphone').should('be.visible') //using smart phone in preview


})}
)