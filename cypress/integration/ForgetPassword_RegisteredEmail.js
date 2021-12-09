///<reference types="cypress" />


import { locators } from "d:/cypressQformautomation/cypress/Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { info } from "d:/cypressQformautomation/cypress/Pages/userData"
import { links } from "d:/cypressQformautomation/cypress/Pages/link"

const call =new text()
let url=links.link1

it('forgetPassword',()=>
{
   call.navigate(url);
   cy.get(locators.forgetlink).click()                         //forgt link click
   call.forgetpassword()
   cy.get(locators.sendemail).click()                           //click on send email
   cy.get(locators.successtoast).should('have.text'," Success ") //once email is send check message pop success is on screen
   cy.screenshot()
   cy.contains('Please check your inbox')                        //checking label
})