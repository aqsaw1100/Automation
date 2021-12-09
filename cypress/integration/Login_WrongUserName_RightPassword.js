
   ///<reference types="cypress" />

///<reference types="cypress" />


import { locators } from "d:/cypressQformautomation/cypress/Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { info } from "d:/cypressQformautomation/cypress/Pages/userData"
import { links } from "d:/cypressQformautomation/cypress/Pages/link"

const call =new text()
let url=links.link1
let exlink=links.expectedlink

it.only('InvaLidEmail',()=>{                           //randomly generated email is given thus incorrect email id
    call.navigate(url);                        //navigating q forms URL
    call.remailAddress();                     //calling function which generates random email address 
    call.password();                          //correct password
    call.onSubmit();
    cy.url().should('include', exlink)       //asserting url as it will still contain url where we enter credentials 
    call.errormessage()                      //capturing error message which we get once we try to log in using invalid password/email
    cy.log("log in failed")                  //we are giving message that our test case has passed as our log in is failed
    cy.screenshot()
})