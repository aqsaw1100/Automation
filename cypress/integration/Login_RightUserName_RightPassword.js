///<reference types="cypress" />

import { locators } from "d:/cypressQformautomation/cypress/Pages/locator"
import { text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { info } from "d:/cypressQformautomation/cypress/Pages/userData"
import { links } from "d:/cypressQformautomation/cypress/Pages/link"

const call =new text()

// let link='https://test.qforms.co'
// let exdboardlink=links.exdashboardlink
// let exlink=links.expectedlink

       it.only('QformsLogin', () =>{        
       
       call.login()  //call.login();                               //logging q forms by calling log in function which contains its URL and credentials        
       cy.url().should('include',links.exdashboardlink) 
       cy.log("you have entered qforms log in page")
       cy.url().should('eq',links.exdashboardlink)         //asserting dashboard url once we logged in 
       cy.screenshot()

       })
    