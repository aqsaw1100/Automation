///<reference types="cypress" />


import { locators } from "d:/cypressQformautomation/cypress/Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"

import { links } from "d:/cypressQformautomation/cypress/Pages/link"


const call =new text()
let url=links.link1
let exlink=links.expectedlink
let exdboardlink=links.exdashboardlink


describe('Test',()=>                                      //testsuite
{
   afterEach(function(){
      if (this.currentTest.state === 'failed')           //any test case failed cypress will stop
        {
        Cypress.runner.stop()
        }
      });

it.only('drag and drop',()=>{
    call.login();
cy.get(locators.createform).click()                            //locating create form on page and clicking on it
cy.get(locators.formbuilder).should('be.visible').click()             //on select template look for form builder locator
cy.get(locators.plusicon).click()
cy.get(locators.heading).drag(locators.dragyouroption)
cy.get(locators.heading).click()
cy.get(locators.paragraph).drag(locators.canvas)
cy.wait(3000)
//cy.contains('Form Elements').scrollto('bottom')
cy.get(locators.imagetext).drag(locators.canvas)

cy.get('#twocolumntext > .col-md-10').drag(locators.canvas)
cy.get('#orderedlist > .col-md-10').drag(locators.canvas)

}) 
})