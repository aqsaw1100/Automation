
   ///<reference types="cypress" />

///<reference types="cypress" />


import { locators } from "d:/cypressQformautomation/cypress/Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { info } from "d:/cypressQformautomation/cypress/Pages/userData"
import { links } from "d:/cypressQformautomation/cypress/Pages/link"

const call =new text()
let url=links.link1
let exlink=links.expectedlink
  it('invalidPassword',()=>{                                           //typing invalid password
        call.navigate(url);
        call.validEmailAddress();
        let result1="result"
        let rpassword=call.generateString(8);                               //calling function in which we are randomly generating password
        cy.get(locators.password).type(rpassword)
        call.onSubmit();
        cy.url().should('include', exlink)
        call.errormessage()                                              //capturing error message which we get once we try to log in using invalid password/email
        cy.log("log in failed")                                          //message
        cy.screenshot()
     }) 