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

it.only('header',()=>{
    call.login();
    cy.wait(3000)
cy.createform()
cy.get(locators.heading).drag(locators.dragyouroption)//heading will be dragged on screen
cy.get(locators.properties).click()//click on properties
cy.get(locators.fieldname).should('be.visible').clear().type('headingform') //typing in field name
cy.wait(4000)
cy.get(locators.label_header).should('be.visible').clear().type('my first heading label') //typing in field name
cy.wait(4000)
cy.get(locators.toggle_hide).click()//check whether subtitle is hidden
cy.log('subtitle is hidden')
cy.get(locators.dropdown_left_rght_top).select('Right')
cy.get(locators.dropdown_left_rght_top).select('Left')
cy.get(locators.dropdown_left_rght_top).select('Center')
cy.get(locators.form_preview).click()//preview 
cy.wait(6000)
cy.get(locators.tabletform).should('be.visible').click()
cy.wait(6000)
 cy.get(locators.mobileform).should('be.visible').click()
 cy.get('.smartphone').should('be.visible') //using smart phone in preview















// // cy.get('#mat-button-toggle-19-button > .mat-button-toggle-label-content').click() 
// cy.get('[style="margin-top: -35px; border: 1px solid #b9afaf; padding-top: 5px; min-height: 85vh; padding-bottom: 5px;"] > .ng-star-inserted').should('be.visible').click()
// //^tablet view
// cy.log("tablet view is enabled")
// cy.get('#mat-slide-toggle-3').click()//back to form  builder
// cy.get('.txtarea-heading').should('be.visible').clear().type('hi') //will write hi in header
// cy.get('div.edit-mode').should('be.visible').clear().type('here check it') //will edit sub title
// cy.get(':nth-child(4) > .mat-primary').click()//will save it through icon from right
// cy.get('.toast-message').should('be.visible')//save message
// cy.log("you saved form")

// cy.get(':nth-child(4) > .mat-warn > .mat-button-wrapper > .mat-icon').click()//icon save n close from right
// cy.get('.mat-dialog-content > div').should('be.visible')// are you sure dialog box assert
// cy.get('[fxlayout="row"] > .mat-primary').click() // clicking confirm pop up to close

// cy.get(':nth-child(1) > .cdk-column-action > .mat-menu-trigger').click()// actions... 

})
})