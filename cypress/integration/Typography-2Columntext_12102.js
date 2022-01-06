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

it.only('2Columntext',()=>{
    call.login();
    cy.wait(3000)
cy.createform()// plus icon working
cy.get(locators.twocolumntext).drag(locators.canvas)//paragraph will be dragged on screen
cy.get(locators.properties).click()//click on properties
cy.get(locators.fieldname).should('be.visible').clear().type('twocolumntest')
cy.get(locators.image1locator).clear().type(labels.image1url) //typing in image url
cy.get(locators.image1columnurl).clear().type(labels.Columntextlabel)
cy.get(locators.aligncolumnlocator).select('Top')
cy.get(locators.image2locator).clear().type(labels.image1url)//typing in column text
cy.get(locators.image2columnurl).clear().type(labels.Columntextlabel)
cy.wait(4000)
cy.get(locators.alignment).select('Top')
cy.get(locators.toggle_hide).click()//autoscale
cy.get(locators.img).should('be.visible')//checking image on canvas
cy.get(locators.img2).should('be.visible')
cy.get(locators.form_preview).click()//preview 
cy.wait(6000)
cy.get(locators.tabletform).should('be.visible').click()
cy.wait(6000)
 cy.get(locators.mobileform).should('be.visible').click()
 cy.wait(6000)
 cy.get('.smartphone').should('be.visible') //using smart phone in preview


})}
)