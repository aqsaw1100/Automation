///<reference types="cypress" />


import { locators } from "../Pages/locator"
import { data, text} from  "d:/cypressQformautomation/cypress/Pages/function"
import { info } from "../Pages/userData"
import { links } from "../Pages/link"




const call =new text()

let link='https://test.qforms.co'
let exdboardlink=links.exdashboardlink

       it.only('QformsLogin', () =>{        
       call.login();                               //logging q forms
       //cy.url().should('include', link)         
       cy.log("you have entered qforms log in page")
       cy.url().should('eq',exdboardlink )         //asserting dashboard url once we logged in 
       cy.screenshot()

       })
    