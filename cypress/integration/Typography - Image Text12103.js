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

it.only('image text',()=>{
    call.login();
    cy.wait(3000)
cy.createform()
cy.get(locators.imagetext).drag(locators.canvas)//paragraph will be dragged on screen
cy.get(locators.properties).click()//click on properties
cy.get(locators.fieldname).should('be.visible').clear().type('imgtext')
cy.get(locators.imagelocation).clear().type(labels.image1url) //typing in image url
cy.get(locators.imagealign).select('Right') //moving image right
cy.wait(4000)
cy.get(locators.toggle_hide).click()//autoscale
cy.get(locators.imgvisibleright).should('be.visible')//checking image on canvas
cy.get(locators.form_preview).click()//preview 
cy.wait(6000)
cy.get(locators.tabletform).should('be.visible').click()
cy.wait(6000)
 cy.get(locators.mobileform).should('be.visible').click()
 cy.wait(6000)
 cy.get('.smartphone').should('be.visible') //using smart phone in preview


})}
)